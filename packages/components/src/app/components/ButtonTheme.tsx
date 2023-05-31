'use client'

import { MoonStar, SunMoon } from 'lucide-react'
import { useTheme } from '../../context'
import { HTMLButton } from '../../types'
import { Button } from './Button'

interface ButtonThemeProps extends HTMLButton {}

export function ButtonTheme({ ...rest }: ButtonThemeProps) {
  const { handleSwitchTheme, theme } = useTheme()

  return (
    <Button onClick={handleSwitchTheme} variant="OutlineNone" width={14} {...rest}>
      {theme ? <SunMoon size={45} /> : <MoonStar size={45} />}
    </Button>
  )
}
