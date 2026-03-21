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
    heroBadge: '🤖 AI & Web Development Studio',
    heroTitle1: 'Bygger',
    heroTitle2: 'Fremtiden',
    heroDesc: 'Vi lager intelligente AI-assistenter og fantastiske webopplevelser. Fra konsept til produksjon.',
    heroCta: 'Se Agenter →',
    heroContact: 'Kontakt Oss',
    
    // Services
    servicesTitle1: 'Våre',
    servicesTitle2: 'Tjenester',
    servicesDesc: 'Helhetlige løsninger for din digitale tilstedeværelse',
    aiAssistants: 'AI-Assistenter',
    aiAssistantsDesc: 'Skreddersydde OpenClaw og AI-assistenter for din arbeidsflyt.',
    webDev: 'Webutvikling',
    webDevDesc: 'Moderne nettsider og webapplikasjoner bygget med Next.js.',
    mobileApps: 'Mobilapplikasjoner',
    mobileAppsDesc: 'Native og cross-platform mobilapplikasjoner.',
    systemIntegration: 'Systemintegrasjon',
    systemIntegrationDesc: 'Koble verktøy og automatisere arbeidsflyter.',
    uiuxDesign: 'UI/UX Design',
    uiuxDesignDesc: 'Vakre, intuitive grensesnitt.',
    deployment: 'Deployering',
    deploymentDesc: 'Fra utvikling til produksjon.',
    
    // CTA
    ctaTitle: 'Kom',
    ctaTitle2: 'i gang',
    ctaDesc: 'Har du et prosjekt i tankene? La oss bygge noe fantastisk sammen.',
    ctaButton: 'Kontakt Oss →',
    
    // Footer
    rights: 'Alle rettigheter reservert.',
    
    // Landing page agents section
    viewAgents: 'Se Alle Agenter →',
    
    // Agents page
    heroAgentsBadge: '🤖 AI Agent Bibliotek',
    heroAgentsTitle1: 'Nedlastbare',
    heroAgentsTitle2: 'AI Agenter',
    heroAgentsDesc: 'Ferdige AI-agent-promptes for OpenClaw og andre plattformer. Last ned, tilpass og implementer på minutter.',
    allAgents: 'Alle',
    download: 'Last ned',
    
    // CTA agents
    needHelp: 'Trenger du',
    help: 'hjelp',
    helpDesc: 'Vi hjelper deg med å sette opp og tilpasse agenter for din bedrift.',
    contact: 'Kontakt oss →',
    
    // Detail Modal
    description: 'Beskrivelse',
    skills: 'Kjernekompetanse',
    method: 'Arbeidsmetode',
    downloadMd: 'Last ned som .md',
    close: 'Lukk',
  },
  en: {
    // Navbar
    home: 'Home',
    agents: 'Agents',
    
    // Hero
    heroBadge: '🤖 AI & Web Development Studio',
    heroTitle1: 'Building',
    heroTitle2: 'Tomorrow',
    heroDesc: 'We craft intelligent AI assistants and stunning web experiences. From concept to deployment.',
    heroCta: 'View Agents →',
    heroContact: 'Contact Us',
    
    // Services
    servicesTitle1: 'Our',
    servicesTitle2: 'Services',
    servicesDesc: 'Comprehensive solutions for your digital presence',
    aiAssistants: 'AI Assistants',
    aiAssistantsDesc: 'Custom OpenClaw and AI assistants tailored to your workflow.',
    webDev: 'Web Development',
    webDevDesc: 'Modern websites and web apps built with Next.js.',
    mobileApps: 'Mobile Apps',
    mobileAppsDesc: 'Native and cross-platform mobile applications.',
    systemIntegration: 'System Integration',
    systemIntegrationDesc: 'Connect tools and automate workflows.',
    uiuxDesign: 'UI/UX Design',
    uiuxDesignDesc: 'Beautiful, intuitive interfaces.',
    deployment: 'Deployment',
    deploymentDesc: 'From development to production.',
    
    // CTA
    ctaTitle: 'Get',
    ctaTitle2: 'Started',
    ctaDesc: 'Have a project in mind? Let\'s build something amazing together.',
    ctaButton: 'Contact Us →',
    
    // Footer
    rights: 'All rights reserved.',
    
    // Landing page agents section
    viewAgents: 'View All Agents →',
    
    // Agents page
    heroAgentsBadge: '🤖 AI Agent Library',
    heroAgentsTitle1: 'Downloadable',
    heroAgentsTitle2: 'AI Agents',
    heroAgentsDesc: 'Ready-to-use AI agent prompts for OpenClaw and other platforms. Download, customize, implement in minutes.',
    allAgents: 'All',
    download: 'Download',
    
    // CTA agents
    needHelp: 'Need',
    help: 'help',
    helpDesc: 'We help you set up and customize agents for your business.',
    contact: 'Contact us →',
    
    // Detail Modal
    description: 'Description',
    skills: 'Core Skills',
    method: 'Work Method',
    downloadMd: 'Download as .md',
    close: 'Close',
  }
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('no')
  
  useEffect(() => {
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
