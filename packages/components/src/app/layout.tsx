import { ChildrenReactNode } from '@/interface/ChildrenReactNode'
import './globals.css'

export const metadata = {
  title: 'Server Components',
  description: 'Server Components Created by Drofens',
}

export default function RootLayout({ children }: ChildrenReactNode) {
  return (
    <html lang="en">
      <body className={`font-default`}>{children}</body>
    </html>
  )
}
