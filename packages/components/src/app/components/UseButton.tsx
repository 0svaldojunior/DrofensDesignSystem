'use client'

import { Button } from './Button'

export function UseButton() {
  function click() {
    console.log('click')
  }
  return (
    <Button onClick={click} variant="blue" width={14}>
      Blue
    </Button>
  )
}
