import { ReactNode } from 'react'
import { HTMLDiv } from '../../types'

interface BoxProps extends HTMLDiv {
  children?: ReactNode
}

export function Box({ children, ...rest }: BoxProps) {
  return (
    <div
      className={`rounded border-[1px] border-solid border-gray-50 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-800`}
      {...rest}
    >
      {children}
    </div>
  )
}
