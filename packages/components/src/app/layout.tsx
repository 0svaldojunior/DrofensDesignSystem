import { Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import { ThemeProvider } from '../context'
import { ThemeLayout } from './components/ThemeLayout'
import './globals.css'

interface RootLayoutProps {
  children: ReactNode
}

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'Server Components',
  description: 'Server Components Created by Drofens',
}

export default function Layout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider>
      <html lang="en">
        <ThemeLayout otherClass={`${roboto.variable} dark:bg-gray-900`}>{children}</ThemeLayout>
      </html>
    </ThemeProvider>
  )
}
