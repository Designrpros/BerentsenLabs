"use client"

import { useLanguage } from './LanguageProvider'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  
  return (
    <div className="fixed top-20 right-4 z-40 flex gap-2">
      <button 
        onClick={() => setLang('no')}
        className={`px-3 py-1 rounded-full text-sm transition-all ${
          lang === 'no' 
            ? 'bg-teal-500 text-black font-semibold' 
            : 'bg-white/10 text-gray-400 hover:bg-teal-500/50'
        }`}
      >
        NO
      </button>
      <button 
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded-full text-sm transition-all ${
          lang === 'en' 
            ? 'bg-teal-500 text-black font-semibold' 
            : 'bg-white/10 text-gray-400 hover:bg-teal-500/50'
        }`}
      >
        EN
      </button>
    </div>
  )
}
