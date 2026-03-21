"use client"

import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'no' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  no: {
    // Navbar
    home: 'Hjem',
    agents: 'Agenter',
    
    // Hero
    heroBadge: '🤖 AI Agent Bibliotek',
    heroTitle1: 'Nedlastbare',
    heroTitle2: 'AI Agenter',
    heroDesc: 'Ferdige AI-agent-promptes for OpenClaw og andre plattformer. Last ned, tilpass og implementer på minutter.',
    heroCta: 'Se alle agenter ↓',
    
    // Info
    norwegianVersion: 'Norsk Versjon',
    norwegianDesc: 'Optimalisert for norske bedrifter og team.',
    englishVersion: 'English Version',
    englishDesc: 'Original English versions for international use.',
    
    // Agents Grid
    allAgents: 'Alle',
    download: 'Last ned',
    viewDetails: 'Vis detaljer',
    
    // CTA
    needHelp: 'Trenger du',
    help: 'hjelp',
    helpDesc: 'Vi hjelper deg med å sette opp og tilpasse agenter for din bedrift.',
    contact: 'Kontakt oss →',
    
    // Footer
    rights: 'Alle rettigheter reservert.',
    
    // Detail Modal
    description: 'Beskrivelse',
    skills: 'Kjernekompetanse',
    method: 'Arbeidsmetode',
    example: 'Eksempel',
    downloadMd: 'Last ned som .md',
    close: 'Lukk',
    
    // Landing page
    ourServices: 'Våre Tjenester',
    servicesDesc: 'Helhetlige løsninger for din digitale tilstedeværelse',
    featuredProjects: 'Utvalgte Prosjekter',
    projectsDesc: 'Virkelige applikasjoner vi har bygget og deployet',
    about: 'Om Oss',
    contactTitle: 'Ta Kontakt',
    contactDesc: 'Har du et prosjekt i tankene? Vi vil gjerne høre fra deg.',
    emailUs: '📧 Send e-post',
    callUs: '📱 Ring oss',
    location: 'Østerås, Norge',
  },
  en: {
    // Navbar
    home: 'Home',
    agents: 'Agents',
    
    // Hero
    heroBadge: '🤖 AI Agent Library',
    heroTitle1: 'Downloadable',
    heroTitle2: 'AI Agents',
    heroDesc: 'Ready-to-use AI agent prompts for OpenClaw and other platforms. Download, customize, and implement in minutes.',
    heroCta: 'View all agents ↓',
    
    // Info
    norwegianVersion: 'Norwegian Version',
    norwegianDesc: 'Optimized for Norwegian businesses and teams.',
    englishVersion: 'English Version',
    englishDesc: 'Original English versions for international use.',
    
    // Agents Grid
    allAgents: 'All',
    download: 'Download',
    viewDetails: 'View details',
    
    // CTA
    needHelp: 'Need',
    help: 'help',
    helpDesc: 'We help you set up and customize agents for your business.',
    contact: 'Contact us →',
    
    // Footer
    rights: 'All rights reserved.',
    
    // Detail Modal
    description: 'Description',
    skills: 'Core Skills',
    method: 'Work Method',
    example: 'Example',
    downloadMd: 'Download as .md',
    close: 'Close',
    
    // Landing page
    ourServices: 'Our Services',
    servicesDesc: 'Comprehensive solutions for your digital presence',
    featuredProjects: 'Featured Projects',
    projectsDesc: 'Real-world applications we have built and deployed',
    about: 'About Us',
    contactTitle: 'Get in Touch',
    contactDesc: 'Have a project in mind? We would love to hear from you.',
    emailUs: '📧 Email Us',
    callUs: '📱 Call Us',
    location: 'Østerås, Norway',
  }
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('no')
  
  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('no')) {
      setLang('no')
    } else {
      setLang('en')
    }
  }, [])
  
  const t = (key: string) => translations[lang][key] || key
  
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
