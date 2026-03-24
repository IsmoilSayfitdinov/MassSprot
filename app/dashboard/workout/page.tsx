"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { 
  Play, 
  Pause, 
  SkipForward, 
  RotateCcw,
  Clock,
  Flame,
  Heart,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  Volume2,
  Maximize2
} from "lucide-react"

// Today's workout
const todayWorkout = {
  title: "Yuqori tana kuchi",
  type: "strength",
  totalDuration: 45,
  calories: 320,
  exercises: [
    { 
      id: 1,
      name: "Push-up", 
      description: "To'g'ri texnika bilan, tanangiz to'g'ri chiziqda",
      sets: 3, 
      reps: 15, 
      rest: 60,
      targetMuscles: ["Ko'krak", "Yelka", "Triceps"],
      tips: "Qo'llaringiz yelka kengligida, tirsaklar 45° burchakda"
    },
    { 
      id: 2,
      name: "Dumbbell press", 
      description: "O'tirib yoki yotib bajarish mumkin",
      sets: 3, 
      reps: 12, 
      rest: 60,
      targetMuscles: ["Ko'krak", "Yelka"],
      tips: "Dumbbellni sekin tushiring, portlash bilan ko'taring"
    },
    { 
      id: 3,
      name: "Shoulder press", 
      description: "Yelka mushaklar uchun asosiy mashq",
      sets: 3, 
      reps: 12, 
      rest: 60,
      targetMuscles: ["Yelka", "Trapezius"],
      tips: "Boshingizni oldinga egilmasdan to'g'ri tuting"
    },
    { 
      id: 4,
      name: "Tricep dips", 
      description: "Stul yoki skameyka yordamida",
      sets: 3, 
      reps: 15, 
      rest: 45,
      targetMuscles: ["Triceps", "Ko'krak"],
      tips: "Oyoqlaringizni oldinga cho'zing, sekin tushiring"
    },
    { 
      id: 5,
      name: "Plank", 
      description: "Core mustahkamlash uchun",
      sets: 3, 
      reps: "60s", 
      rest: 30,
      targetMuscles: ["Core", "Yelka"],
      tips: "Tanangiz to'g'ri chiziqda, bel egilmasin"
    },
  ]
}

type WorkoutState = 'ready' | 'exercise' | 'rest' | 'feedback' | 'complete'

export default function WorkoutPage() {
  const [state, setState] = useState<WorkoutState>('ready')
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [currentSet, setCurrentSet] = useState(1)
  const [timer, setTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [completedSets, setCompletedSets] = useState<Record<number, number>>({})
  const [heartRate, setHeartRate] = useState(85)
  
  // Feedback state
  const [difficulty, setDifficulty] = useState(3)
  const [fatigue, setFatigue] = useState(3)
  const [pain, setPain] = useState(1)

  const currentExercise = todayWorkout.exercises[currentExerciseIndex]
  const totalSets = todayWorkout.exercises.reduce((a, b) => a + b.sets, 0)
  const completedSetsTotal = Object.values(completedSets).reduce((a, b) => a + b, 0)
  const progress = (completedSetsTotal / totalSets) * 100

  // Simulate heart rate changes
  useEffect(() => {
    if (state === 'exercise' && isTimerRunning) {
      const interval = setInterval(() => {
        setHeartRate(prev => Math.min(180, prev + Math.random() * 3))
      }, 2000)
      return () => clearInterval(interval)
    } else if (state === 'rest') {
      const interval = setInterval(() => {
        setHeartRate(prev => Math.max(90, prev - Math.random() * 2))
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [state, isTimerRunning])

  // Timer for rest periods
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1)
      }, 1000)
    } else if (timer === 0 && state === 'rest') {
      // Rest complete, move to next set or exercise
      if (currentSet < currentExercise.sets) {
        setCurrentSet(prev => prev + 1)
        setState('exercise')
      } else {
        // Move to next exercise
        if (currentExerciseIndex < todayWorkout.exercises.length - 1) {
          setCurrentExerciseIndex(prev => prev + 1)
          setCurrentSet(1)
          setState('exercise')
        } else {
          setState('feedback')
        }
      }
      setIsTimerRunning(false)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning, timer, state, currentSet, currentExercise, currentExerciseIndex])

  const startWorkout = () => {
    setState('exercise')
    setHeartRate(100)
  }

  const completeSet = () => {
    setCompletedSets(prev => ({
      ...prev,
      [currentExercise.id]: (prev[currentExercise.id] || 0) + 1
    }))

    if (currentSet < currentExercise.sets) {
      // Start rest timer
      setState('rest')
      setTimer(currentExercise.rest)
      setIsTimerRunning(true)
    } else {
      // Exercise complete
      if (currentExerciseIndex < todayWorkout.exercises.length - 1) {
        // Move to next exercise
        setCurrentExerciseIndex(prev => prev + 1)
        setCurrentSet(1)
        setState('rest')
        setTimer(90) // Longer rest between exercises
        setIsTimerRunning(true)
      } else {
        // Workout complete
        setState('feedback')
      }
    }
  }

  const skipRest = () => {
    setTimer(0)
    setIsTimerRunning(false)
    if (currentSet < currentExercise.sets) {
      setCurrentSet(prev => prev + 1)
    } else if (currentExerciseIndex < todayWorkout.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1)
      setCurrentSet(1)
    }
    setState('exercise')
  }

  const submitFeedback = () => {
    setState('complete')
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Calculate HR zone
  const getHRZone = (hr: number): { zone: string; color: string } => {
    const hrMax = 192 // Example HRmax
    const percentage = (hr / hrMax) * 100
    if (percentage < 60) return { zone: "1 - Yengil", color: "text-emerald-500" }
    if (percentage < 70) return { zone: "2 - O'rtacha", color: "text-cyan-500" }
    if (percentage < 80) return { zone: "3 - Faol", color: "text-yellow-500" }
    if (percentage < 90) return { zone: "4 - Yuqori", color: "text-orange-500" }
    return { zone: "5 - Maksimal", color: "text-red-500" }
  }

  const hrZone = getHRZone(heartRate)

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{todayWorkout.title}</h1>
          <p className="text-muted-foreground">Bugungi mashg'ulot</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Volume2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Maximize2 className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <Card className="bg-card/50 border-border/50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Umumiy progress</span>
            <span className="text-sm font-medium">{completedSetsTotal}/{totalSets} set</span>
          </div>
          <Progress value={progress} className="h-3" />
        </CardContent>
      </Card>

      {/* Ready State */}
      {state === 'ready' && (
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Mashg'ulotni boshlashga tayyormisiz?</CardTitle>
            <CardDescription>
              {todayWorkout.exercises.length} mashq, taxminan {todayWorkout.totalDuration} daqiqa
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-background/50">
                <Clock className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
                <p className="text-xl font-bold">{todayWorkout.totalDuration}</p>
                <p className="text-xs text-muted-foreground">daqiqa</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50">
                <Flame className="h-6 w-6 mx-auto text-orange-500 mb-2" />
                <p className="text-xl font-bold">{todayWorkout.calories}</p>
                <p className="text-xs text-muted-foreground">kaloriya</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50">
                <CheckCircle2 className="h-6 w-6 mx-auto text-primary mb-2" />
                <p className="text-xl font-bold">{totalSets}</p>
                <p className="text-xs text-muted-foreground">set</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm text-muted-foreground">Mashqlar:</h4>
              {todayWorkout.exercises.map((ex, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                  <span>{ex.name}</span>
                  <span className="text-sm text-muted-foreground">{ex.sets} x {ex.reps}</span>
                </div>
              ))}
            </div>

            <Button onClick={startWorkout} className="w-full" size="lg">
              <Play className="mr-2 h-5 w-5" />
              Boshlash
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Exercise State */}
      {state === 'exercise' && (
        <div className="space-y-6">
          {/* HR Monitor */}
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500/10">
                    <Heart className="h-5 w-5 text-red-500 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{Math.round(heartRate)} <span className="text-sm font-normal text-muted-foreground">bpm</span></p>
                    <p className={`text-sm ${hrZone.color}`}>Zona {hrZone.zone}</p>
                  </div>
                </div>
                {heartRate > 170 && (
                  <Badge className="bg-red-500/10 text-red-500 gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    Yuqori HR
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Current Exercise */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline">
                  Mashq {currentExerciseIndex + 1}/{todayWorkout.exercises.length}
                </Badge>
                <Badge className="bg-primary/10 text-primary">
                  Set {currentSet}/{currentExercise.sets}
                </Badge>
              </div>
              <CardTitle className="text-3xl mt-4">{currentExercise.name}</CardTitle>
              <CardDescription>{currentExercise.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-8">
                <p className="text-6xl font-bold text-primary">{currentExercise.reps}</p>
                <p className="text-lg text-muted-foreground mt-2">takrorlash</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentExercise.targetMuscles.map((muscle, i) => (
                  <Badge key={i} variant="secondary">{muscle}</Badge>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm">
                  <strong className="text-primary">Maslahat:</strong> {currentExercise.tips}
                </p>
              </div>

              <Button onClick={completeSet} className="w-full" size="lg">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Set bajarildi
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Rest State */}
      {state === 'rest' && (
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-muted-foreground">Dam olish</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-48 h-48 transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-muted/20"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={553}
                  strokeDashoffset={553 - (553 * (timer / currentExercise.rest))}
                  className="text-primary transition-all duration-1000"
                />
              </svg>
              <span className="absolute text-5xl font-bold">{formatTime(timer)}</span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsTimerRunning(!isTimerRunning)}
              >
                {isTimerRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button variant="outline" onClick={skipRest}>
                <SkipForward className="mr-2 h-4 w-4" />
                O'tkazib yuborish
              </Button>
            </div>

            <div className="p-4 rounded-lg bg-background/50">
              <p className="text-sm text-muted-foreground">
                Keyingi: <strong className="text-foreground">
                  {currentSet < currentExercise.sets 
                    ? `${currentExercise.name} - Set ${currentSet + 1}`
                    : currentExerciseIndex < todayWorkout.exercises.length - 1
                      ? todayWorkout.exercises[currentExerciseIndex + 1].name
                      : "Yakunlash"
                  }
                </strong>
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Feedback State */}
      {state === 'feedback' && (
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="text-center">
            <div className="mx-auto p-4 rounded-full bg-emerald-500/10 w-fit mb-4">
              <CheckCircle2 className="h-12 w-12 text-emerald-500" />
            </div>
            <CardTitle className="text-2xl">Mashg'ulot yakunlandi!</CardTitle>
            <CardDescription>Iltimos, o'z holatgizni baholang</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Qiyinlik darajasi</span>
                  <span className="text-primary">{difficulty}/5</span>
                </div>
                <Slider
                  value={[difficulty]}
                  onValueChange={([v]) => setDifficulty(v)}
                  min={1}
                  max={5}
                  step={1}
                />
                <p className="text-xs text-muted-foreground">1 = juda oson, 5 = juda qiyin</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Charchoq darajasi</span>
                  <span className="text-primary">{fatigue}/5</span>
                </div>
                <Slider
                  value={[fatigue]}
                  onValueChange={([v]) => setFatigue(v)}
                  min={1}
                  max={5}
                  step={1}
                />
                <p className="text-xs text-muted-foreground">1 = tuzuk, 5 = juda charchadim</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Og'riq yoki noqulaylik</span>
                  <span className="text-primary">{pain}/5</span>
                </div>
                <Slider
                  value={[pain]}
                  onValueChange={([v]) => setPain(v)}
                  min={1}
                  max={5}
                  step={1}
                />
                <p className="text-xs text-muted-foreground">1 = yo'q, 5 = juda og'riyapti</p>
              </div>
            </div>

            {pain >= 4 && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-400">Ogohlantirish</p>
                    <p className="text-sm text-muted-foreground">
                      Og'riq darajasi yuqori. Keyingi mashg'ulotda ehtiyot bo'ling yoki shifokorga murojaat qiling.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <Button onClick={submitFeedback} className="w-full" size="lg">
              Saqlash va yakunlash
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Complete State */}
      {state === 'complete' && (
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="text-center">
            <div className="mx-auto p-4 rounded-full bg-primary/10 w-fit mb-4">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl">Ajoyib ish!</CardTitle>
            <CardDescription>Bugungi mashg'ulotingiz muvaffaqiyatli yakunlandi</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-background/50">
                <Clock className="h-5 w-5 mx-auto text-muted-foreground mb-2" />
                <p className="text-xl font-bold">{todayWorkout.totalDuration}</p>
                <p className="text-xs text-muted-foreground">daqiqa</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50">
                <Flame className="h-5 w-5 mx-auto text-orange-500 mb-2" />
                <p className="text-xl font-bold">{todayWorkout.calories}</p>
                <p className="text-xs text-muted-foreground">kaloriya</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50">
                <CheckCircle2 className="h-5 w-5 mx-auto text-emerald-500 mb-2" />
                <p className="text-xl font-bold">{totalSets}</p>
                <p className="text-xs text-muted-foreground">set</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" asChild>
                <a href="/dashboard">
                  Dashboardga
                </a>
              </Button>
              <Button className="flex-1" asChild>
                <a href="/dashboard/progress">
                  Progressni ko'rish
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
