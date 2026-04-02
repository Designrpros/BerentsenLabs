"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from './LanguageProvider'

export default function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <span className="text-xl font-light tracking-tight">Berentsen</span>
              <span className="text-xl font-medium">Labs</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
            <Link href="/" className="hover:text-zinc-950 transition-colors">
              {t('navHome')}
            </Link>
            <Link href="/agenter" className="hover:text-zinc-950 transition-colors">
              {t('navAgents')}
            </Link>
          </nav>
          
          <button 
            className="md:hidden text-zinc-950"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-zinc-50 pt-20 px-6">
          <nav className="flex flex-col gap-6 text-2xl font-light">
            <Link href="/" onClick={() => setOpen(false)} className="hover:text-zinc-400 transition-colors">
              {t('navHome')}
            </Link>
            <Link href="/agenter" onClick={() => setOpen(false)} className="hover:text-zinc-400 transition-colors">
              {t('navAgents')}
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
