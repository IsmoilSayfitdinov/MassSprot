import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,   // 5 daqiqa — qayta fetch qilmaydi
      retry: 2,                    // Xato bo'lsa 2 marta qayta urinadi
      refetchOnWindowFocus: false, // Oyna fokusda qayta fetch yo'q
    },
    mutations: {
      retry: 0,                    // Mutation qayta urinmaydi
    },
  },
})
