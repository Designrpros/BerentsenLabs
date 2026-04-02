"use client"

import { useLanguage } from './LanguageProvider'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  
  return (
    <div className="fixed top-16 right-4 z-40 flex border border-zinc-200">
      <button 
        onClick={() => setLang('no')}
        className={`px-3 py-1.5 text-xs font-medium transition-colors ${
          lang === 'no' 
            ? 'bg-zinc-950 text-zinc-50' 
            : 'bg-zinc-50 text-zinc-500 hover:bg-zinc-100'
        }`}
      >
        NO
      </button>
      <button 
        onClick={() => setLang('en')}
        className={`px-3 py-1.5 text-xs font-medium transition-colors ${
          lang === 'en' 
            ? 'bg-zinc-950 text-zinc-50' 
            : 'bg-zinc-50 text-zinc-500 hover:bg-zinc-100'
        }`}
      >
        EN
      </button>
    </div>
  )
}
