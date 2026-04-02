import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'

export const metadata: Metadata = {
  title: 'Berentsen Labs | AI & Web Development Studio',
  description: 'Building intelligent AI assistants and stunning web experiences. From concept to deployment, we build your digital vision to life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M3NJ4MJ8KJ"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M3NJ4MJ8KJ');
          `
        }} />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
