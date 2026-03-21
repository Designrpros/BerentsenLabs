"use client"

import { useState } from 'react'

const agenter = [
  {
    id: "frontend-developer",
    emoji: "🎨",
    navn: "Frontend Utvikler",
    engelsk: "Frontend Developer",
    beskrivelse: "Spesialist på moderne webteknologier, React, Vue, CSS og responsiv design. Bygger vakre, funksjonelle brukergrensesnitt.",
    category: "engineering",
    kompetanse: ["React", "Vue", "TypeScript", "CSS", "Tailwind", "Responsivt Design", "Web Performance"],
    Arbeidsmetode: [
      "Analyse av kravspesifikasjoner",
      "Valg av teknologistakk",
      "Komponentbasert arkitektur",
      "Testing på tvers av nettlesere",
      "Optimalisering for hastighet"
    ]
  },
  {
    id: "backend-architect",
    emoji: "🏗️",
    navn: "Backend Arkitekt",
    engelsk: "Backend Architect",
    beskrivelse: "Ekspert på API-er, databaser, serverlogikk og systemarkitektur. Designer skalerbare backend-løsninger.",
    category: "engineering",
    kompetanse: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST API", "Docker"],
    Arbeidsmetode: [
      "Systemanalyse og design",
      "API-arkitektur",
      "Databasemodellering",
      "Sikkerhetsgjennomgang",
      "Skalering og monitoring"
    ]
  },
  {
    id: "ui-designer",
    emoji: "✨",
    navn: "UI/UX Designer",
    engelsk: "UI/UX Designer",
    beskrivelse: "Skapende designer med fokus på brukeropplevelse, interaksjonsdesign og visuell kommunikasjon.",
    category: "design",
    kompetanse: ["Figma", "Adobe XD", "Brukerresearch", "Prototyping", "Design Systems", "WCAG"],
    Arbeidsmetode: [
      "Brukerresearch og innsikt",
      "Wireframing og prototyping",
      "Visuelt design",
      "Design systems",
      "Brukertesting"
    ]
  },
  {
    id: "data-analyst",
    emoji: "📊",
    navn: "Dataanalytiker",
    engelsk: "Data Analyst",
    beskrivelse: "Ekspert på dataanalyse, visualisering og innsiktsutvinning fra komplekse datasett.",
    category: "engineering",
    kompetanse: ["Python", "SQL", "Tableau", "Power BI", "Pandas", "Statistikk", "Machine Learning"],
    Arbeidsmetode: [
      "Datainnsamling og rensing",
      "Eksplorativ analyse",
      "Statistisk modellering",
      "Visualisering",
      "Innsiktsrapportering"
    ]
  },
  {
    id: "devops-automator",
    emoji: "🔧",
    navn: "DevOps Automator",
    engelsk: "DevOps Automator",
    beskrivelse: "Automatiserer arbeidsflyter, CI/CD pipelines og infrastrukturoppsett for sømløs drift.",
    category: "engineering",
    kompetanse: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "AWS", "Azure", "Monitoring"],
    Arbeidsmetode: [
      "Infrastrukturgjennomgang",
      "CI/CD pipeline-oppsett",
      "Automatisering",
      "Overvåkning",
      "Dokumentasjon"
    ]
  },
  {
    id: "ai-engineer",
    emoji: "🤖",
    navn: "AI-Ingeniør",
    engelsk: "AI Engineer",
    beskrivelse: "Bygger og integrerer AI-løsninger, maskinlæringsmodeller og intelligente systemer.",
    category: "engineering",
    kompetanse: ["Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI API", "Vector DB", "RAG"],
    Arbeidsmetode: [
      "Behovsanalyse",
      "Modellvalg og trenng",
      "Integrasjon",
      "Testing og evaluering",
      "Deployment og monitoring"
    ]
  },
  {
    id: "code-reviewer",
    emoji: "🔍",
    navn: "Kodegransker",
    engelsk: "Code Reviewer",
    beskrivelse: "Kvalitetssikrer kode, identifiserer bugs og foreslår forbedringer for optimal kodekvalitet.",
    category: "engineering",
    kompetanse: ["Code Analysis", "Testing", "Security", "Performance", "Best Practices", "Documentation"],
    Arbeidsmetode: [
      "Kodegjennomgang",
      "Bug-identifisering",
      "Sikkerhetsanalyse",
      "Prestasjonsvurdering",
      "Forbedringsforslag"
    ]
  },
  {
    id: "product-manager",
    emoji: "🎯",
    navn: "Produktleder",
    engelsk: "Product Manager",
    beskrivelse: "Leder produktutvikling fra konsept til lansering med fokus på brukerbehov og forretningsmål.",
    category: "other",
    kompetanse: ["Roadmapping", "Agile", "Scrum", "Brukerstories", "KPI-er", "Markedsanalyse"],
    Arbeidsmetode: [
      "Markedsresearch",
      "Kravinnsamling",
      "Prioritering",
      "Sprintplanlegging",
      "Lanseringsoppfølging"
    ]
  }
]

export default function Agenter() {
  const [valgtAgent, setValgtAgent] = useState<typeof agenter[0] | null>(null)

  const lastNedAgent = (agent: typeof agenter[0]) => {
    const content = `---
name: ${agent.id}
emoji: ${agent.emoji}
category: ${agent.category}
version: 1.0.0
language: norsk
description: ${agent.beskrivelse}
---

# ${agent.emoji} ${agent.navn}

Du er en erfaren ${agent.navn} med ekspertise i ${agent.beskrivelse}

## Kjernekompetanse

${agent.kompetanse.map(k => `- ${k}`).join('\n')}

## Arbeidsmetode

${agent.Arbeidsmetode.map((steg, i) => `${i + 1}. ${steg}`).join('\n')}

## Ansvar

- Delta aktivt i teammøter
- Kommuniser tydelig med stakeholders
- Dokumenter beslutninger og arkitekturvalg
- Bidra til kodekvalitet og best practices
- Kontinuerlig læring og forbedring

## Samhandling

Som ${agent.navn} samarbeider du tett med:
- Andre utviklere og designere
- Produktleder for kravavklaring
- QA for testing
- DevOps for infrastruktur

---

*Generert av Berentsen Labs AI Agent System*
*For bruk med OpenClaw og lignende AI-plattformer*
`
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${agent.id}-norsk.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <span className="text-teal-400">Berentsen</span>
              <span className="text-white">Labs</span>
            </a>
          </div>
          <div className="flex gap-6 items-center">
            <a href="/" className="text-gray-400 hover:text-teal-400 transition-colors">Hjem</a>
            <span className="text-teal-400 font-semibold">Agenter</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm">
            🤖 AI Agent Bibliotek
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-teal-400">Nedlastbare</span> AI Agenter
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Ferdige AI-agent-promptes for OpenClaw og andre plattformer. 
            Last ned, tilpass og implementer på minutter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full border border-white/10 text-gray-400 text-sm">
              🇳🇴 Norsk versjon
            </span>
            <span className="px-4 py-2 rounded-full border border-white/10 text-gray-400 text-sm">
              8 Agenter
            </span>
            <span className="px-4 py-2 rounded-full border border-white/10 text-gray-400 text-sm">
              Gratis nedlasting
            </span>
          </div>
        </div>
      </section>

      {/* Agenter Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agenter.map((agent) => (
              <div 
                key={agent.id}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-teal-500/50 transition-all hover:transform hover:scale-[1.02] cursor-pointer group"
                onClick={() => setValgtAgent(agent)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{agent.emoji}</div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {agent.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{agent.navn}</h3>
                <p className="text-sm text-teal-400 mb-4">{agent.engelsk}</p>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{agent.beskrivelse}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.kompetanse.slice(0, 3).map(k => (
                    <span key={k} className="px-2 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                      {k}
                    </span>
                  ))}
                  {agent.kompetanse.length > 3 && (
                    <span className="px-2 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                      +{agent.kompetanse.length - 3}
                    </span>
                  )}
                </div>
                
                <button 
                  className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold text-sm rounded-lg transition-all"
                  onClick={(e) => {
                    e.stopPropagation()
                    lastNedAgent(agent)
                  }}
                >
                  📥 Last ned
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
            {/* Header */}
            <div className="sticky top-0 bg-gray-900 border-b border-white/10 p-6 flex items-start justify-between">
              <div>
                <div className="text-5xl mb-2">{valgtAgent.emoji}</div>
                <h2 className="text-2xl font-bold">{valgtAgent.navn}</h2>
                <p className="text-teal-400">{valgtAgent.engelsk}</p>
              </div>
              <button 
                onClick={() => setValgtAgent(null)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-2xl"
              >
                ×
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-300">Beskrivelse</h3>
                <p className="text-gray-400">{valgtAgent.beskrivelse}</p>
              </div>
              
              {/* Kompetanse */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Kjernekompetanse</h3>
                <div className="flex flex-wrap gap-2">
                  {valgtAgent.kompetanse.map(k => (
                    <span key={k} className="px-3 py-2 rounded-lg bg-teal-500/10 text-teal-400 text-sm border border-teal-500/20">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Arbeidsmetode */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Arbeidsmetode</h3>
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
              
              {/* Preview */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Eksempel</h3>
                <pre className="bg-black/50 rounded-lg p-4 text-sm text-gray-400 overflow-x-auto">
{`# ${valgtAgent.emoji} ${valgtAgent.navn}

Du er en erfaren ${valgtAgent.navn.toLowerCase()}.

## Oppgave

[Beskriv din oppgave her]

## Kontekst

[Legg til relevant kontekst]`}
                </pre>
              </div>
            </div>
            
            {/* Footer */}
            <div className="sticky bottom-0 bg-gray-900 border-t border-white/10 p-6 flex gap-4">
              <button 
                className="flex-1 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-lg transition-all"
                onClick={() => {
                  lastNedAgent(valgtAgent)
                  setValgtAgent(null)
                }}
              >
                📥 Last ned som .md
              </button>
              <button 
                className="px-6 py-3 border border-white/20 hover:border-teal-400 rounded-lg transition-all"
                onClick={() => setValgtAgent(null)}
              >
                Lukk
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-t from-teal-950/30 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trenger du <span className="text-teal-400">hjelp</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            Vi hjelper deg med å sette opp og tilpasse agenter for din bedrift.
          </p>
          <a 
            href="mailto:vegarberentsen@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-lg transition-all"
          >
            Kontakt oss →
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
            © {new Date().getFullYear()} Berentsen Labs. Alle rettigheter reservert.
          </div>
        </div>
      </footer>
    </div>
  )
}
