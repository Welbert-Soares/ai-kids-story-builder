"use client"
import { HeroUIProvider } from '@heroui/react'

interface ProviderProps {
  children: React.ReactNode
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}

export default Provider