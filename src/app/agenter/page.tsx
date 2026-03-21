"use client"

export default function Agenter() {
  const agenter = [
    {
      id: "frontend-developer",
      emoji: "🎨",
      navn: "Frontend Utvikler",
      engelsk: "Frontend Developer",
      beskrivelse: "Spesialist på moderne webteknologier, React, Vue, CSS og responsiv design. Bygger vakre, funksjonelle brukergrensesnitt.",
      category: "engineering"
    },
    {
      id: "backend-architect",
      emoji: "🏗️",
      navn: "Backend Arkitekt",
      engelsk: "Backend Architect",
      beskrivelse: "Ekspert på API-er, databaser, serverlogikk og systemarkitektur. Designere skalerbare backend-løsninger.",
      category: "engineering"
    },
    {
      id: "ui-designer",
      emoji: "✨",
      navn: "UI/UX Designer",
      engelsk: "UI/UX Designer",
      beskrivelse: "Skapende designer med fokus på brukeropplevelse, interaksjonsdesign og visuell kommunikasjon.",
      category: "design"
    },
    {
      id: "data-analyst",
      emoji: "📊",
      navn: "Dataanalytiker",
      engelsk: "Data Analyst",
      beskrivelse: "Ekspert på dataanalyse, visualisering og innsiktsutvinning fra komplekse datasett.",
      category: "engineering"
    },
    {
      id: "devops-automator",
      emoji: "🔧",
      navn: "DevOps Automator",
      engelsk: "DevOps Automator",
      beskrivelse: "Automatiserer arbeidsflyter, CI/CD pipelines og infrastrukturoppsett for sømløs drift.",
      category: "engineering"
    },
    {
      id: "ai-engineer",
      emoji: "🤖",
      navn: "AI-Ingeniør",
      engelsk: "AI Engineer",
      beskrivelse: "Bygger og integrerer AI-løsninger, maskinlæringsmodeller og intelligente systemer.",
      category: "engineering"
    },
    {
      id: "code-reviewer",
      emoji: "🔍",
      navn: "Kodegransker",
      engelsk: "Code Reviewer",
      beskrivelse: "Kvalitetssikrer kode, identifiserer bugs og foreslår forbedringer for optimal kodekvalitet.",
      category: "engineering"
    },
    {
      id: "product-manager",
      emoji: "🎯",
      navn: "Produktleder",
      engelsk: "Product Manager",
      beskrivelse: "Leder produktutvikling fra konsept til lansering med fokus på brukerbehov og forretningsmål.",
      category: "other"
    }
  ]

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
            <a href="/agenter" className="text-teal-400 font-semibold">Agenter</a>
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
          <a 
            href="#agenter" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-lg transition-all"
          >
            Se alle agenter ↓
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-3xl mb-4">🇳🇴</div>
              <h3 className="text-xl font-bold mb-3">Norsk Versjon</h3>
              <p className="text-gray-400">
                Optimalisert for norske bedrifter og team. Alle agenter er oversatt til norsk med lokale tilpasninger.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-3xl mb-4">🇬🇧</div>
              <h3 className="text-xl font-bold mb-3">English Version</h3>
              <p className="text-gray-400">
                Original English versions preserved for international use. Based on agency-agents library.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agenter Grid */}
      <section id="agenter" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Alle <span className="text-teal-400">Agenter</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agenter.map((agent) => (
              <div 
                key={agent.id}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-teal-500/50 transition-all hover:transform hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{agent.emoji}</div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {agent.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{agent.navn}</h3>
                <p className="text-sm text-teal-400 mb-4">{agent.engelsk}</p>
                
                <p className="text-gray-400 text-sm mb-6">{agent.beskrivelse}</p>
                
                <div className="flex gap-2">
                  <button 
                    className="flex-1 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold text-sm rounded-lg transition-all"
                    onClick={() => {
                      const noContent = `---
name: ${agent.id}
description: ${agent.beskrivelse}
emoji: ${agent.emoji}
---

# ${agent.navn}

Du er en ekspert ${agent.navn.toLowerCase()} som spesialiserer seg på ${agent.beskrivelse}

## Din rolle

## Best practices

## Eksempler
`
                      const blob = new Blob([noContent], { type: 'text/markdown' })
                      const url = URL.createObjectURL(blob)
                      const a = document.createElement('a')
                      a.href = url
                      a.download = `${agent.id}-norsk.md`
                      a.click()
                    }}
                  >
                    🇳🇴 Norsk
                  </button>
                  <button 
                    className="flex-1 px-4 py-2 border border-white/20 hover:border-teal-400 text-sm rounded-lg transition-all"
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = `https://github.com/Designrpros/agency-agents/blob/main/${agent.category === 'design' ? 'design' : 'engineering'}/${agent.category === 'design' ? 'design-' : 'engineering-'}${agent.id.replace('-', '-')}.md`
                      link.target = '_blank'
                      link.click()
                    }}
                  >
                    🇬🇧 Engelsk
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
