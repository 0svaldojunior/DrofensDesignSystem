'use client'

import Cookies from 'js-cookie'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  theme: boolean
  handleSwitchTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(true)

  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + 365)

  useEffect(() => {
    setTheme(Cookies.get('_theme') === 'dark')
  }, [])

  useEffect(() => {
    Cookies.set('_theme', theme ? 'dark' : '', { expires: currentDate })
  }, [theme])

  const handleSwitchTheme = () => {
    setTheme((stateTheme) => !stateTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, handleSwitchTheme }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
