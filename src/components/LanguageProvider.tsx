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
    heroBadge: 'AI & Web Development Studio',
    heroTitle1: 'Bygger',
    heroTitle2: 'Fremtiden',
    heroDesc: 'Vi lager intelligente AI-assistenter og fantastiske webopplevelser. Fra konsept til produksjon.',
    heroCta: 'Se Agenter →',
    heroContact: 'Kontakt Oss',
    
    // Projects
    projectsTitle1: 'Våre',
    projectsTitle2: 'Prosjekter',
    projectsDesc: 'Noen av prosjektene vi har bygget',
    project1Category: 'Verktøy',
    project1Desc: 'Levekostnader i 26+ europeiske land',
    project2Category: 'Design',
    project2Desc: 'Profesjonelt webdesign og utvikling',
    project3Category: 'Læring',
    project3Desc: 'AI-drevet læringsplattform',
    project4Category: 'Agent',
    project4Title: 'PeakBrowser',
    project4Desc: 'Desktop AI-agent app',
    
    // About
    aboutTitle: 'Om',
    aboutTitle2: 'Oss',
    aboutP1: 'Vi er et team av dedikerte utviklere og designere som brenner for å bygge innovative digitale løsninger.',
    aboutP2: 'Fra AI-agenter til webapplikasjoner, vi elsker å ta komplekse ideer og gjøre dem enkle og tilgjengelige.',
    aboutP3: 'Vi tror på å bygge ting som hjelper folk og bedrifter å spare tid og øke produktiviteten.',
    stat1: 'Aktive Prosjekter',
    stat2: 'Linjer med Kode',
    stat3: 'Kaffe drukket',
    
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
    
    // Agents page
    heroAgentsBadge: 'AI Agent Bibliotek',
    heroAgentsTitle1: 'Nedlastbare',
    heroAgentsTitle2: 'AI Agenter',
    heroAgentsDesc: 'Ferdige AI-agent-promptes for OpenClaw og andre plattformer. Last ned, tilpass og implementer på minutter.',
    allAgents: 'Alle',
    download: 'Last ned',
    needHelp: 'Trenger du',
    help: 'hjelp',
    helpDesc: 'Vi hjelper deg med å sette opp og tilpasse agenter for din bedrift.',
    contact: 'Kontakt oss →',
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
    heroBadge: 'AI & Web Development Studio',
    heroTitle1: 'Building',
    heroTitle2: 'Tomorrow',
    heroDesc: 'We craft intelligent AI assistants and stunning web experiences. From concept to deployment.',
    heroCta: 'View Agents →',
    heroContact: 'Contact Us',
    
    // Projects
    projectsTitle1: 'Our',
    projectsTitle2: 'Projects',
    projectsDesc: 'Some of the projects we have built',
    project1Category: 'Tool',
    project1Desc: 'Cost of living in 26+ European countries',
    project2Category: 'Design',
    project2Desc: 'Professional web design and development',
    project3Category: 'Learning',
    project3Desc: 'AI-powered learning platform',
    project4Category: 'Agent',
    project4Title: 'PeakBrowser',
    project4Desc: 'Desktop AI agent app',
    
    // About
    aboutTitle: 'About',
    aboutTitle2: 'Us',
    aboutP1: 'We are a team of dedicated developers and designers passionate about building innovative digital solutions.',
    aboutP2: 'From AI agents to web applications, we love taking complex ideas and making them simple and accessible.',
    aboutP3: 'We believe in building things that help people and businesses save time and increase productivity.',
    stat1: 'Active Projects',
    stat2: 'Lines of Code',
    stat3: 'Coffee Consumed',
    
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
    
    // Agents page
    heroAgentsBadge: 'AI Agent Library',
    heroAgentsTitle1: 'Downloadable',
    heroAgentsTitle2: 'AI Agents',
    heroAgentsDesc: 'Ready-to-use AI agent prompts for OpenClaw and other platforms. Download, customize, implement in minutes.',
    allAgents: 'All',
    download: 'Download',
    needHelp: 'Need',
    help: 'help',
    helpDesc: 'We help you set up and customize agents for your business.',
    contact: 'Contact us →',
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
