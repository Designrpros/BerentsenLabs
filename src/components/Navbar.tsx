"use client"

import { useState } from 'react'
import Link from 'next/link'

interface NavbarProps {
  showBack?: boolean
}

export default function Navbar({ showBack = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <span className="text-teal-400">Berentsen</span>
              <span className="text-white">Labs</span>
            </Link>
          </div>
          <div className="hidden md:flex gap-8">
            <Link href="/agenter" className="hover:text-teal-400 transition-colors">
              Agenter
            </Link>
          </div>
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
          <button 
            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="text-center space-y-8">
            <Link href="/" className="block text-3xl font-bold hover:text-teal-400 transition-colors" onClick={() => setMenuOpen(false)}>
              Hjem
            </Link>
            <Link href="/agenter" className="block text-3xl font-bold text-teal-400" onClick={() => setMenuOpen(false)}>
              Agenter
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
