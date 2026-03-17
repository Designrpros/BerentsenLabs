import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Berentsen Labs | AI & Web Development Studio',
  description: 'Building intelligent AI assistants and stunning web experiences. From concept to deployment, we bring your digital vision to life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
