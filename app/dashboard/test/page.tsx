"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  ClipboardCheck, 
  Heart, 
  Timer, 
  Activity,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Target,
  Zap,
  Wind
} from "lucide-react"

type TestStep = 'intro' | 'basic' | 'cardio' | 'strength' | 'flexibility' | 'wellbeing' | 'results'

interface TestResults {
  // Basic metrics
  restingHR: number
  weight: number
  height: number
  age: number
  // Cardio test (Cooper 12-minute)
  cooperDistance: number
  postExerciseHR: number
  recoveryHR: number
  // Strength
  pushups: number
  situps: number
  squats: number
  // Flexibility
  sitAndReach: number
  // Wellbeing
  sleepQuality: number
  stressLevel: number
  energyLevel: number
  motivation: number
}

const initialResults: TestResults = {
  restingHR: 72,
  weight: 75,
  height: 178,
  age: 28,
  cooperDistance: 2400,
  postExerciseHR: 165,
  recoveryHR: 95,
  pushups: 25,
  situps: 30,
  squats: 40,
  sitAndReach: 5,
  sleepQuality: 3,
  stressLevel: 2,
  energyLevel: 4,
  motivation: 4
}

// Calculate VO2 Max using Cooper formula
function calculateVO2Max(distance: number): number {
  return parseFloat(((distance - 504.9) / 44.73).toFixed(1))
}

// Calculate BMI
function calculateBMI(weight: number, height: number): number {
  return parseFloat((weight / Math.pow(height / 100, 2)).toFixed(1))
}

// Calculate HRmax
function calculateHRMax(age: number): number {
  return 220 - age
}

// Calculate Recovery Index
function calculateRecoveryIndex(postHR: number, recoveryHR: number, hrMax: number): number {
  return parseFloat((((postHR - recoveryHR) / hrMax) * 100).toFixed(1))
}

// Calculate fitness level category
function getFitnessLevel(vo2Max: number, age: number, gender: string = 'male'): { level: string; color: string } {
  // Simplified categorization
  if (vo2Max >= 50) return { level: "Juda yaxshi", color: "text-emerald-400" }
  if (vo2Max >= 42) return { level: "Yaxshi", color: "text-cyan-400" }
  if (vo2Max >= 35) return { level: "O'rtacha", color: "text-yellow-400" }
  if (vo2Max >= 28) return { level: "Past", color: "text-orange-400" }
  return { level: "Juda past", color: "text-red-400" }
}

// Calculate Health Index (Apanasenko simplified)
function calculateHealthIndex(bmi: number, restingHR: number, vo2Max: number): number {
  let score = 0
  
  // BMI score (max 25)
  if (bmi >= 18.5 && bmi <= 24.9) score += 25
  else if (bmi >= 17 && bmi < 18.5 || bmi > 24.9 && bmi <= 27) score += 15
  else score += 5
  
  // Resting HR score (max 25)
  if (restingHR < 60) score += 25
  else if (restingHR < 70) score += 20
  else if (restingHR < 80) score += 15
  else score += 10
  
  // VO2 Max score (max 50)
  if (vo2Max >= 50) score += 50
  else if (vo2Max >= 42) score += 40
  else if (vo2Max >= 35) score += 30
  else if (vo2Max >= 28) score += 20
  else score += 10
  
  return score
}

export default function TestPage() {
  const [step, setStep] = useState<TestStep>('intro')
  const [results, setResults] = useState<TestResults>(initialResults)

  const steps: TestStep[] = ['intro', 'basic', 'cardio', 'strength', 'flexibility', 'wellbeing', 'results']
  const currentIndex = steps.indexOf(step)
  const progress = (currentIndex / (steps.length - 1)) * 100

  const nextStep = () => {
    const nextIndex = currentIndex + 1
    if (nextIndex < steps.length) {
      setStep(steps[nextIndex])
    }
  }

  const prevStep = () => {
    const prevIndex = currentIndex - 1
    if (prevIndex >= 0) {
      setStep(steps[prevIndex])
    }
  }

  // Calculated values
  const vo2Max = calculateVO2Max(results.cooperDistance)
  const bmi = calculateBMI(results.weight, results.height)
  const hrMax = calculateHRMax(results.age)
  const recoveryIndex = calculateRecoveryIndex(results.postExerciseHR, results.recoveryHR, hrMax)
  const fitnessLevel = getFitnessLevel(vo2Max, results.age)
  const healthIndex = calculateHealthIndex(bmi, results.restingHR, vo2Max)

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dastlabki Test</h1>
          <p className="text-muted-foreground">Jismoniy tayyorgarlik darajangizni aniqlash</p>
        </div>
        <Badge variant="outline" className="text-primary border-primary/50">
          {currentIndex + 1} / {steps.length}
        </Badge>
      </div>

      {/* Progress */}
      <Progress value={progress} className="h-2" />

      {/* Intro Step */}
      {step === 'intro' && (
        <Card className="bg-card/50 border-border/50">
          <CardHeader className="text-center">
            <div className="mx-auto p-4 rounded-full bg-primary/10 w-fit mb-4">
              <ClipboardCheck className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl">Jismoniy tayyorgarlik testi</CardTitle>
            <CardDescription className="text-base max-w-lg mx-auto">
              Bu test sizning jismoniy holatni baholaydi va AI tizimiga shaxsiylashtirilgan mashg'ulot rejasi tuzishda yordam beradi.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="font-medium">Kardio test</span>
                </div>
                <p className="text-sm text-muted-foreground">Cooper 12 daqiqa yugurish testi orqali VO2 Max aniqlanadi</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">Kuch testi</span>
                </div>
                <p className="text-sm text-muted-foreground">Push-up, sit-up va squat testlari</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <Wind className="h-5 w-5 text-cyan-500" />
                  <span className="font-medium">Egiluvchanlik</span>
                </div>
                <p className="text-sm text-muted-foreground">Sit-and-reach testi</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <Activity className="h-5 w-5 text-emerald-500" />
                  <span className="font-medium">Umumiy holat</span>
                </div>
                <p className="text-sm text-muted-foreground">Uyqu, stress va energiya darajasi</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-400">Muhim eslatma</p>
                  <p className="text-sm text-muted-foreground">
                    Agar sizda yurak kasalliklari yoki boshqa jiddiy sog'liq muammolari bo'lsa, testdan oldin shifokor bilan maslahatlashing.
                  </p>
                </div>
              </div>
            </div>

            <Button onClick={nextStep} className="w-full" size="lg">
              Testni boshlash
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Basic Metrics Step */}
      {step === 'basic' && (
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Asosiy ko'rsatkichlar
            </CardTitle>
            <CardDescription>Antropometrik va asosiy fiziologik ma'lumotlar</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Yosh</Label>
                <Input 
                  type="number" 
                  value={results.age}
                  onChange={(e) => setResults({...results, age: parseInt(e.target.value) || 0})}
                />
              </div>
              <div className="space-y-2">
                <Label>Tinch holat yurak urishi (bpm)</Label>
                <Input 
                  type="number" 
                  value={results.restingHR}
                  onChange={(e) => setResults({...results, restingHR: parseInt(e.target.value) || 0})}
                  placeholder="60-100"
                />
              </div>
              <div className="space-y-2">
                <Label>Bo'y (sm)</Label>
                <Input 
                  type="number" 
                  value={results.height}
                  onChange={(e) => setResults({...results, height: parseInt(e.target.value) || 0})}
                />
              </div>
              <div className="space-y-2">
                <Label>Vazn (kg)</Label>
                <Input 
                  type="number" 
                  value={results.weight}
                  onChange={(e) => setResults({...results, weight: parseInt(e.target.value) || 0})}
                />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">BMI (hisoblangan)</span>
                <span className="text-lg font-bold text-primary">{calculateBMI(results.weight, results.height)}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-muted-foreground">HRmax (hisoblangan)</span>
                <span className="text-lg font-bold text-primary">{calculateHRMax(results.age)} bpm</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={prevStep} className="flex-1">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Orqaga
              </Button>
              <Button onClick={nextStep} className="flex-1">
                Keyingi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Cardio Test Step */}
      {step === 'cardio' && (
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Kardio test (Cooper 12 daqiqa)
            </CardTitle>
            <CardDescription>
              12 daqiqa davomida imkon qadar ko'proq masofa bosing (yugurish yoki tez yurish)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 rounded-lg bg-background/50 border border-border/50">
              <h4 className="font-medium mb-2">Test qoidalari:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>1. 12 daqiqa davomida yuguring yoki tez yuring</li>
                <li>2. Bosgan masofangizni metrda yozing</li>
                <li>3. Testdan so'ng darhol yurak urishini o'lchang</li>
                <li>4. 1 daqiqadan keyin yana o'lchang (tiklanish)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Bosgan masofa (metr)</Label>
                <Input 
                  type="number" 
                  value={results.cooperDistance}
                  onChange={(e) => setResults({...results, cooperDistance: parseInt(e.target.value) || 0})}
                  placeholder="1600-3200"
                />
                <p className="text-xs text-muted-foreground">O'rtacha: erkaklar 2400m, ayollar 2000m</p>
              </div>
              <div className="space-y-2">
                <Label>Testdan so'ng yurak urishi (bpm)</Label>
                <Input 
                  type="number" 
                  value={results.postExerciseHR}
                  onChange={(e) => setResults({...results, postExerciseHR: parseInt(e.target.value) || 0})}
                />
              </div>
              <div className="space-y-2">
                <Label>1 daqiqadan keyin yurak urishi (bpm)</Label>
                <Input 
                  type="number" 
                  value={results.recoveryHR}
                  onChange={(e) => setResults({...results, recoveryHR: parseInt(e.target.value) || 0})}
                />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">VO2 Max (hisoblangan)</span>
                <span className="text-lg font-bold text-cyan-400">{calculateVO2Max(results.cooperDistance)} ml/kg/min</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Formula: (masofa - 504.9) / 44.73</p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={prevStep} className="flex-1">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Orqaga
              </Button>
              <Button onClick={nextStep} className="flex-1">
                Keyingi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Strength Test Step */}
      {step === 'strength' && (
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              Kuch testlari
            </CardTitle>
            <CardDescription>Har bir mashqdan maksimal sonni bajaring</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Push-up (otjimanie) - 1 daqiqada</Label>
                <Input 
                  type="number" 
                  value={results.pushups}
                  onChange={(e) => setResults({...results, pushups: parseInt(e.target.value) || 0})}
                />
                <p className="text-xs text-muted-foreground">To'g'ri texnika bilan, tanangiz to'g'ri chiziqda</p>
              </div>
              <div className="space-y-2">
                <Label>Sit-up (press) - 1 daqiqada</Label>
                <Input 
                  type="number" 
                  value={results.situps}
                  onChange={(e) => setResults({...results, situps: parseInt(e.target.value) || 0})}
                />
                <p className="text-xs text-muted-foreground">Oyoqlar bukilgan, qo'llar boshda</p>
              </div>
              <div className="space-y-2">
                <Label>Squat (o'tirib turish) - 1 daqiqada</Label>
                <Input 
                  type="number" 
                  value={results.squats}
                  onChange={(e) => setResults({...results, squats: parseInt(e.target.value) || 0})}
                />
                <p className="text-xs text-muted-foreground">To'liq amplituda, tizzalar to'g'ri</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={prevStep} className="flex-1">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Orqaga
              </Button>
              <Button onClick={nextStep} className="flex-1">
                Keyingi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Flexibility Test Step */}
      {step === 'flexibility' && (
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wind className="h-5 w-5 text-cyan-500" />
              Egiluvchanlik testi
            </CardTitle>
            <CardDescription>Sit-and-Reach testi</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 rounded-lg bg-background/50 border border-border/50">
              <h4 className="font-medium mb-2">Test qoidalari:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>1. Polda o'tiring, oyoqlarni oldinga to'g'ri cho'zing</li>
                <li>2. Qo'llaringizni oldinga cho'zing va panjalaringizga yeching</li>
                <li>3. Panja o'tib ketgan masofani o'lchang (sm)</li>
                <li>4. Agar panjalarga yetmasangiz, manfiy qiymat yozing</li>
              </ul>
            </div>

            <div className="space-y-2">
              <Label>Panjadan o'tgan masofa (sm)</Label>
              <Input 
                type="number" 
                value={results.sitAndReach}
                onChange={(e) => setResults({...results, sitAndReach: parseInt(e.target.value) || 0})}
                placeholder="-10 dan +20 gacha"
              />
              <p className="text-xs text-muted-foreground">Ijobiy = panjadan o'tdi, salbiy = yetmadi</p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={prevStep} className="flex-1">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Orqaga
              </Button>
              <Button onClick={nextStep} className="flex-1">
                Keyingi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Wellbeing Step */}
      {step === 'wellbeing' && (
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-emerald-500" />
              Umumiy holat baholash
            </CardTitle>
            <CardDescription>So'nggi hafta davomidagi o'rtacha holatni baholang</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <Label>Uyqu sifati</Label>
                <RadioGroup 
                  value={results.sleepQuality.toString()}
                  onValueChange={(v) => setResults({...results, sleepQuality: parseInt(v)})}
                  className="flex gap-2"
                >
                  {[1,2,3,4,5].map((n) => (
                    <div key={n} className="flex items-center">
                      <RadioGroupItem value={n.toString()} id={`sleep-${n}`} className="peer sr-only" />
                      <Label
                        htmlFor={`sleep-${n}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-muted peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground cursor-pointer"
                      >
                        {n}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <p className="text-xs text-muted-foreground">1 = juda yomon, 5 = juda yaxshi</p>
              </div>

              <div className="space-y-3">
                <Label>Stress darajasi</Label>
                <RadioGroup 
                  value={results.stressLevel.toString()}
                  onValueChange={(v) => setResults({...results, stressLevel: parseInt(v)})}
                  className="flex gap-2"
                >
                  {[1,2,3,4,5].map((n) => (
                    <div key={n} className="flex items-center">
                      <RadioGroupItem value={n.toString()} id={`stress-${n}`} className="peer sr-only" />
                      <Label
                        htmlFor={`stress-${n}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-muted peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground cursor-pointer"
                      >
                        {n}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <p className="text-xs text-muted-foreground">1 = juda past, 5 = juda yuqori</p>
              </div>

              <div className="space-y-3">
                <Label>Energiya darajasi</Label>
                <RadioGroup 
                  value={results.energyLevel.toString()}
                  onValueChange={(v) => setResults({...results, energyLevel: parseInt(v)})}
                  className="flex gap-2"
                >
                  {[1,2,3,4,5].map((n) => (
                    <div key={n} className="flex items-center">
                      <RadioGroupItem value={n.toString()} id={`energy-${n}`} className="peer sr-only" />
                      <Label
                        htmlFor={`energy-${n}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-muted peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground cursor-pointer"
                      >
                        {n}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <p className="text-xs text-muted-foreground">1 = juda past, 5 = juda yuqori</p>
              </div>

              <div className="space-y-3">
                <Label>Motivatsiya darajasi</Label>
                <RadioGroup 
                  value={results.motivation.toString()}
                  onValueChange={(v) => setResults({...results, motivation: parseInt(v)})}
                  className="flex gap-2"
                >
                  {[1,2,3,4,5].map((n) => (
                    <div key={n} className="flex items-center">
                      <RadioGroupItem value={n.toString()} id={`motivation-${n}`} className="peer sr-only" />
                      <Label
                        htmlFor={`motivation-${n}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-muted peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground cursor-pointer"
                      >
                        {n}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <p className="text-xs text-muted-foreground">1 = juda past, 5 = juda yuqori</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={prevStep} className="flex-1">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Orqaga
              </Button>
              <Button onClick={nextStep} className="flex-1">
                Natijalarni ko'rish
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results Step */}
      {step === 'results' && (
        <div className="space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader className="text-center">
              <div className="mx-auto p-4 rounded-full bg-emerald-500/10 w-fit mb-4">
                <CheckCircle2 className="h-12 w-12 text-emerald-500" />
              </div>
              <CardTitle className="text-2xl">Test yakunlandi!</CardTitle>
              <CardDescription>Sizning jismoniy tayyorgarlik natijalari</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3 mb-6">
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Umumiy indeks</p>
                  <p className="text-4xl font-bold text-primary">{healthIndex}%</p>
                  <Badge className="mt-2 bg-primary/10 text-primary">Apanasenko</Badge>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">VO2 Max</p>
                  <p className="text-4xl font-bold text-cyan-400">{vo2Max}</p>
                  <Badge className={`mt-2 ${fitnessLevel.color} bg-cyan-500/10`}>{fitnessLevel.level}</Badge>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Tiklanish indeksi</p>
                  <p className="text-4xl font-bold text-emerald-400">{recoveryIndex}%</p>
                  <Badge className="mt-2 bg-emerald-500/10 text-emerald-400">
                    {recoveryIndex > 30 ? "Yaxshi" : "O'rtacha"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Kardio natijalar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cooper masofa</span>
                  <span className="font-medium">{results.cooperDistance} m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">VO2 Max</span>
                  <span className="font-medium text-cyan-400">{vo2Max} ml/kg/min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">HRmax</span>
                  <span className="font-medium">{hrMax} bpm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tiklanish tezligi</span>
                  <span className="font-medium text-emerald-400">{results.postExerciseHR - results.recoveryHR} bpm/min</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  Kuch natijalari
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Push-up</span>
                  <span className="font-medium">{results.pushups} ta</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sit-up</span>
                  <span className="font-medium">{results.situps} ta</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Squat</span>
                  <span className="font-medium">{results.squats} ta</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Egiluvchanlik</span>
                  <span className="font-medium">{results.sitAndReach > 0 ? '+' : ''}{results.sitAndReach} sm</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                AI tavsiyasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm">
                  Sizning natijalaringiz asosida, AI tizimi sizga <strong className="text-primary">o'rtacha intensivlikdagi</strong> mashg'ulot rejasini tavsiya qiladi. 
                  Kardio chidamliligingiz yaxshi ({fitnessLevel.level}), lekin kuch ko'rsatkichlarini oshirish tavsiya etiladi. 
                  Haftada 3-4 marta mashg'ulot, har biri 45-60 daqiqa davomida optimal natija beradi.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setStep('intro')} className="flex-1">
              Qayta test qilish
            </Button>
            <Button className="flex-1" asChild>
              <a href="/dashboard">
                Dashboardga o'tish
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
