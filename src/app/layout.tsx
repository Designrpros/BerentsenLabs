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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SW4YX2E4EY"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SW4YX2E4EY');
          `
        }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
