"use client"

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { LanguageProvider, useLanguage } from '@/components/LanguageProvider'

const agenterData = {
  no: [
    {
      id: "frontend-developer",
      emoji: "🎨",
      navn: "Frontend Utvikler",
      beskrivelse: "Spesialist på moderne webteknologier, React, Vue, CSS og responsiv design.",
      kompetanse: ["React", "Vue", "TypeScript", "CSS", "Tailwind", "Responsivt Design"],
      Arbeidsmetode: ["Analyse av krav", "Valg av teknologistakk", "Komponentbasert arkitektur", "Testing", "Optimalisering"]
    },
    {
      id: "backend-architect",
      emoji: "🏗️",
      navn: "Backend Arkitekt",
      beskrivelse: "Ekspert på API-er, databaser, serverlogikk og systemarkitektur.",
      kompetanse: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Docker"],
      Arbeidsmetode: ["Systemanalyse", "API-arkitektur", "Databasemodellering", "Sikkerhet", "Skalering"]
    },
    {
      id: "ui-designer",
      emoji: "✨",
      navn: "UI/UX Designer",
      beskrivelse: "Skapende designer med fokus på brukeropplevelse og visuell kommunikasjon.",
      kompetanse: ["Figma", "Brukerresearch", "Prototyping", "Design Systems", "WCAG"],
      Arbeidsmetode: ["Brukerresearch", "Wireframing", "Visuelt design", "Design systems", "Brukertesting"]
    },
    {
      id: "data-analyst",
      emoji: "📊",
      navn: "Dataanalytiker",
      beskrivelse: "Ekspert på dataanalyse, visualisering og innsiktsutvinning.",
      kompetanse: ["Python", "SQL", "Tableau", "Pandas", "Statistikk"],
      Arbeidsmetode: ["Datainnsamling", "Eksplorativ analyse", "Statistisk modellering", "Visualisering", "Rapportering"]
    },
    {
      id: "devops-automator",
      emoji: "🔧",
      navn: "DevOps Automator",
      beskrivelse: "Automatiserer arbeidsflyter, CI/CD og infrastrukturoppsett.",
      kompetanse: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "AWS"],
      Arbeidsmetode: ["Infrastrukturgjennomgang", "CI/CD pipeline", "Automatisering", "Overvåkning", "Dokumentasjon"]
    },
    {
      id: "ai-engineer",
      emoji: "🤖",
      navn: "AI-Ingeniør",
      beskrivelse: "Bygger og integrerer AI-løsninger og intelligente systemer.",
      kompetanse: ["Python", "TensorFlow", "LangChain", "OpenAI API", "Vector DB"],
      Arbeidsmetode: ["Behovsanalyse", "Modellvalg", "Integrasjon", "Testing", "Deployment"]
    },
    {
      id: "code-reviewer",
      emoji: "🔍",
      navn: "Kodegransker",
      beskrivelse: "Kvalitetssikrer kode og identifiserer forbedringer.",
      kompetanse: ["Code Analysis", "Testing", "Security", "Best Practices"],
      Arbeidsmetode: ["Kodegjennomgang", "Bug-identifisering", "Sikkerhetsanalyse", "Forbedringsforslag"]
    },
    {
      id: "product-manager",
      emoji: "🎯",
      navn: "Produktleder",
      beskrivelse: "Leder produktutvikling fra konsept til lansering.",
      kompetanse: ["Roadmapping", "Agile", "Scrum", "Brukerstories", "KPI-er"],
      Arbeidsmetode: ["Markedsresearch", "Kravinnsamling", "Prioritering", "Sprintplanlegging", "Lansering"]
    }
  ],
  en: [
    {
      id: "frontend-developer",
      emoji: "🎨",
      navn: "Frontend Developer",
      beskrivelse: "Expert in modern web technologies, React, Vue, CSS and responsive design.",
      kompetanse: ["React", "Vue", "TypeScript", "CSS", "Tailwind", "Responsive Design"],
      Arbeidsmetode: ["Requirements analysis", "Tech stack selection", "Component architecture", "Testing", "Optimization"]
    },
    {
      id: "backend-architect",
      emoji: "🏗️",
      navn: "Backend Architect",
      beskrivelse: "Expert in APIs, databases, server logic and system architecture.",
      kompetanse: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Docker"],
      Arbeidsmetode: ["System analysis", "API architecture", "Database modeling", "Security review", "Scaling"]
    },
    {
      id: "ui-designer",
      emoji: "✨",
      navn: "UI/UX Designer",
      beskrivelse: "Creative designer focused on user experience and visual communication.",
      kompetanse: ["Figma", "User Research", "Prototyping", "Design Systems", "WCAG"],
      Arbeidsmetode: ["User research", "Wireframing", "Visual design", "Design systems", "User testing"]
    },
    {
      id: "data-analyst",
      emoji: "📊",
      navn: "Data Analyst",
      beskrivelse: "Expert in data analysis, visualization and insight extraction.",
      kompetanse: ["Python", "SQL", "Tableau", "Pandas", "Statistics"],
      Arbeidsmetode: ["Data collection", "Exploratory analysis", "Statistical modeling", "Visualization", "Reporting"]
    },
    {
      id: "devops-automator",
      emoji: "🔧",
      navn: "DevOps Automator",
      beskrivelse: "Automates workflows, CI/CD pipelines and infrastructure.",
      kompetanse: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "AWS"],
      Arbeidsmetode: ["Infrastructure review", "CI/CD setup", "Automation", "Monitoring", "Documentation"]
    },
    {
      id: "ai-engineer",
      emoji: "🤖",
      navn: "AI Engineer",
      beskrivelse: "Builds and integrates AI solutions and intelligent systems.",
      kompetanse: ["Python", "TensorFlow", "LangChain", "OpenAI API", "Vector DB"],
      Arbeidsmetode: ["Requirements analysis", "Model selection", "Integration", "Testing", "Deployment"]
    },
    {
      id: "code-reviewer",
      emoji: "🔍",
      navn: "Code Reviewer",
      beskrivelse: "Ensures code quality and identifies improvements.",
      kompetanse: ["Code Analysis", "Testing", "Security", "Best Practices"],
      Arbeidsmetode: ["Code review", "Bug identification", "Security analysis", "Improvement suggestions"]
    },
    {
      id: "product-manager",
      emoji: "🎯",
      navn: "Product Manager",
      beskrivelse: "Leads product development from concept to launch.",
      kompetanse: ["Roadmapping", "Agile", "Scrum", "User Stories", "KPIs"],
      Arbeidsmetode: ["Market research", "Requirements gathering", "Prioritization", "Sprint planning", "Launch"]
    }
  ]
}

function AgenterContent() {
  const { lang, setLang, t } = useLanguage()
  const [valgtAgent, setValgtAgent] = useState<typeof agenterData.no[0] | null>(null)
  
  const agenter = agenterData[lang]

  const lastNedAgent = (agent: typeof agenterData.no[0]) => {
    const content = `---
name: ${agent.id}
emoji: ${agent.emoji}
version: 1.0.0
language: ${lang === 'no' ? 'norsk' : 'english'}
---

# ${agent.emoji} ${agent.navn}

${lang === 'no' ? `Du er en erfaren ${agent.navn}.` : `You are an experienced ${agent.navn}.`}

## ${lang === 'no' ? 'Kjernekompetanse' : 'Core Skills'}

${agent.kompetanse.map(k => `- ${k}`).join('\n')}

## ${lang === 'no' ? 'Arbeidsmetode' : 'Work Method'}

${agent.Arbeidsmetode.map((steg, i) => `${i + 1}. ${steg}`).join('\n')}

---

*Generated by Berentsen Labs AI Agent System*
`
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${agent.id}-${lang}.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Language Toggle */}
      <div className="fixed top-20 right-4 z-40 flex gap-2">
        <button 
          onClick={() => setLang('no')}
          className={`px-3 py-1 rounded-full text-sm ${lang === 'no' ? 'bg-teal-500 text-black' : 'bg-white/10 text-gray-400'}`}
        >
          NO
        </button>
        <button 
          onClick={() => setLang('en')}
          className={`px-3 py-1 rounded-full text-sm ${lang === 'en' ? 'bg-teal-500 text-black' : 'bg-white/10 text-gray-400'}`}
        >
          EN
        </button>
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm">
            🤖 {t('heroBadge')}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-teal-400">{t('heroTitle1')}</span> {t('heroTitle2')}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            {t('heroDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full border border-white/10 text-gray-400 text-sm">
              {lang === 'no' ? '🇳🇴 Norsk versjon' : '🇬🇧 English version'}
            </span>
            <span className="px-4 py-2 rounded-full border border-white/10 text-gray-400 text-sm">
              8 {lang === 'no' ? 'Agenter' : 'Agents'}
            </span>
          </div>
        </div>
      </section>

      {/* Agenter Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t('allAgents')} <span className="text-teal-400">{lang === 'no' ? 'Agenter' : 'Agents'}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agenter.map((agent) => (
              <div 
                key={agent.id}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-teal-500/50 transition-all hover:scale-[1.02] cursor-pointer"
                onClick={() => setValgtAgent(agent)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{agent.emoji}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{agent.navn}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{agent.beskrivelse}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.kompetanse.slice(0, 3).map(k => (
                    <span key={k} className="px-2 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                      {k}
                    </span>
                  ))}
                </div>
                
                <button 
                  className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold text-sm rounded-lg transition-all"
                  onClick={(e) => {
                    e.stopPropagation()
                    lastNedAgent(agent)
                  }}
                >
                  📥 {t('download')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {valgtAgent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setValgtAgent(null)}
        >
          <div 
            className="bg-gray-900 border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gray-900 border-b border-white/10 p-6 flex items-start justify-between">
              <div>
                <div className="text-5xl mb-2">{valgtAgent.emoji}</div>
                <h2 className="text-2xl font-bold">{valgtAgent.navn}</h2>
              </div>
              <button 
                onClick={() => setValgtAgent(null)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-300">{t('description')}</h3>
                <p className="text-gray-400">{valgtAgent.beskrivelse}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-300">{t('skills')}</h3>
                <div className="flex flex-wrap gap-2">
                  {valgtAgent.kompetanse.map(k => (
                    <span key={k} className="px-3 py-2 rounded-lg bg-teal-500/10 text-teal-400 text-sm border border-teal-500/20">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-300">{t('method')}</h3>
                <div className="space-y-2">
                  {valgtAgent.Arbeidsmetode.map((steg, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-gray-400 pt-1">{steg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="sticky bottom-0 bg-gray-900 border-t border-white/10 p-6 flex gap-4">
              <button 
                className="flex-1 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-lg transition-all"
                onClick={() => {
                  lastNedAgent(valgtAgent)
                  setValgtAgent(null)
                }}
              >
                📥 {t('downloadMd')}
              </button>
              <button 
                className="px-6 py-3 border border-white/20 hover:border-teal-400 rounded-lg transition-all"
                onClick={() => setValgtAgent(null)}
              >
                {t('close')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-t from-teal-950/30 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('needHelp')} <span className="text-teal-400">{t('help')}</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            {t('helpDesc')}
          </p>
          <a 
            href="mailto:vegarberentsen@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-lg transition-all"
          >
            {t('contact')}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold">
            <span className="text-teal-400">Berentsen</span>
            <span className="text-white">Labs</span>
          </div>
          <div className="text-gray-500">
            © {new Date().getFullYear()} Berentsen Labs. {t('rights')}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function AgenterPage() {
  return (
    <LanguageProvider>
      <AgenterContent />
    </LanguageProvider>
  )
}
