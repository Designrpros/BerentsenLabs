"use client"

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import LanguageToggle from '@/components/LanguageToggle'
import { useLanguage } from '@/components/LanguageProvider'

const agenterData = {
  no: [
    { id: "frontend-developer", emoji: "🎨", navn: "Frontend Utvikler", beskrivelse: "Spesialist på moderne webteknologier, React, Vue, CSS og responsiv design.", kompetanse: ["React", "Vue", "TypeScript", "CSS", "Tailwind"], metode: ["Analyse av krav", "Valg av teknologistakk", "Komponentbasert arkitektur", "Testing", "Optimalisering"] },
    { id: "backend-architect", emoji: "🏗️", navn: "Backend Arkitekt", beskrivelse: "Ekspert på API-er, databaser, serverlogikk og systemarkitektur.", kompetanse: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker"], metode: ["Systemanalyse", "API-arkitektur", "Databasemodellering", "Sikkerhet", "Skalering"] },
    { id: "devops-automator", emoji: "🔧", navn: "DevOps Automator", beskrivelse: "Automatiserer arbeidsflyter, CI/CD pipelines og infrastrukturoppsett.", kompetanse: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "AWS"], metode: ["Infrastrukturgjennomgang", "CI/CD pipeline", "Automatisering", "Overvåkning", "Dokumentasjon"] },
    { id: "ai-engineer", emoji: "🤖", navn: "AI-Ingeniør", beskrivelse: "Bygger og integrerer AI-løsninger, maskinlæringsmodeller og intelligente systemer.", kompetanse: ["Python", "TensorFlow", "LangChain", "OpenAI API", "Vector DB"], metode: ["Behovsanalyse", "Modellvalg", "Integrasjon", "Testing", "Deployment"] },
    { id: "data-engineer", emoji: "📊", navn: "Data-Ingeniør", beskrivelse: "Designe og bygge datarørledninger, data warehouses og ETL-prosesser.", kompetanse: ["Python", "SQL", "Apache Spark", "Airflow", "Snowflake"], metode: ["Dataarkitektur", "Pipeline-utvikling", "Testing", "Monitoring", "Optimalisering"] },
    { id: "security-engineer", emoji: "🔐", navn: "Sikkerhets-Ingeniør", beskrivelse: "Identifisere sårbarheter, implementere sikkerhetstiltak og drive sikkerhetsrevisjoner.", kompetanse: ["Penetrasjonstesting", "SIEM", "OWASP", "IAM", "Kryptografi"], metode: ["Trusselmodellering", "Sikkerhetsgjennomgang", "Implementasjon", "Testing", "Dokumentasjon"] },
    { id: "mobile-developer", emoji: "📱", navn: "Mobil Utvikler", beskrivelse: "Bygge native og cross-platform mobilapplikasjoner for iOS og Android.", kompetanse: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"], metode: ["Kravanalyse", "UI/UX design", "Implementasjon", "Testing", "App Store optimalisering"] },
    { id: "database-administrator", emoji: "🗄️", navn: "Database-Administrator", beskrivelse: "Administrere, optimalisere og sikre bedriftens databaser.", kompetanse: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Backup"], metode: ["Installasjon", "Konfigurasjon", "Backup", "Overvåkning", "Optimalisering"] },
    { id: "cloud-architect", emoji: "☁️", navn: "Sky-Arkitekt", beskrivelse: "Designe og implementere skyløsninger med AWS, Azure eller GCP.", kompetanse: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"], metode: ["Behovsanalyse", "Arkitekturdesign", "Migrering", "Sikkerhet", "Kostnadsoptimalisering"] },
    { id: "systems-programmer", emoji: "⚙️", navn: "Systemprogrammerer", beskrivelse: "Utvikle lav-nivå systemprogramvare, drivere og operasjonssystemer.", kompetanse: ["C", "C++", "Rust", "Linux", "Assembly"], metode: ["Systemsikkerhet", "Driverutvikling", "Optimalisering", "Testing", "Debugging"] },
    { id: "network-engineer", emoji: "🌐", navn: "Nettverks-Ingeniør", beskrivelse: "Designe, implementere og vedlikeholde nettverksinfrastruktur.", kompetanse: ["TCP/IP", "DNS", "VPN", "Firewall", "Cisco"], metode: ["Nettverksdesign", "Konfigurasjon", "Overvåkning", "Feilsøking", "Dokumentasjon"] },
    { id: "code-reviewer", emoji: "🔍", navn: "Kodegransker", beskrivelse: "Kvalitetssikre kode, identifisere bugs og foreslå forbedringer.", kompetanse: ["Code Analysis", "Testing", "Security", "Best Practices", "Refactoring"], metode: ["Kodegjennomgang", "Bug-identifisering", "Sikkerhetsanalyse", "Prestasjonsvurdering"] },
    { id: "test-automation-engineer", emoji: "✅", navn: "Test-Automatiserer", beskrivelse: "Designe og implementere automatiske testløsninger for programvare.", kompetanse: ["Selenium", "Cypress", "JUnit", "Playwright", "CI/CD"], metode: ["Teststrategi", "Testautomatisering", "Integrasjon", "Rapportering"] },
    { id: "platform-engineer", emoji: "🖥️", navn: "Plattform-Ingeniør", beskrivelse: "Bygge og vedlikeholde interne utviklerplattformer og verktøy.", kompetanse: ["Kubernetes", "Docker", "Terraform", "Go", "Python"], metode: ["Plattformdesign", "Verktøyutvikling", "Automatisering", "Dokumentasjon"] },
    { id: "technical-writer", emoji: "📝", navn: "Teknisk Forfatter", beskrivelse: "Produsere klar og konsis teknisk dokumentasjon.", kompetanse: ["Markdown", "API Docs", "GitBook", "DITA", "Adobe FrameMaker"], metode: ["Research", "Strukturering", "Skriving", "Review", "Publisering"] },
    { id: "automation-engineer", emoji: "⚡", navn: "Automatiserings-Ingeniør", beskrivelse: "Automatisere repetitive oppgaver og arbeidsflyter.", kompetanse: ["Python", "PowerShell", "Bash", "Zapier", "n8n"], metode: ["Prosessanalyse", "Løsningsdesign", "Implementasjon", "Testing", "Dokumentasjon"] },
    { id: "iot-engineer", emoji: "📡", navn: "IoT-Ingeniør", beskrivelse: "Utvikle og implementere løsninger for tingenes internett.", kompetanse: ["Arduino", "Raspberry Pi", "MQTT", "ESP32", "Sensorer"], metode: ["Prototyping", "Hardware", "Firmware", "Kommunikasjon", "Testing"] },
    { id: "blockchain-engineer", emoji: "⛓️", navn: "Blockchain-Ingeniør", beskrivelse: "Bygge desentraliserte applikasjoner og smarte kontrakter.", kompetanse: ["Solidity", "Web3.js", "Ethereum", "Hyperledger", "Rust"], metode: ["Smart Kontrakter", "dApp-utvikling", "Testing", "Deployment", "Security Audit"] },
    { id: "machine-learning-engineer", emoji: "🧠", navn: "ML-Ingeniør", beskrivelse: "Utvikle og produksjonssette maskinlæringsmodeller.", kompetanse: ["Python", "TensorFlow", "PyTorch", "MLflow", "SageMaker"], metode: ["Dataforberedelse", "Modelltrening", "Evaluering", "Deployment", "Monitoring"] },
    { id: "sre-engineer", emoji: "📈", navn: "SRE-Ingeniør", beskrivelse: "Sikre høy tilgjengelighet og ytelse for produksjonssystemer.", kompetanse: ["Prometheus", "Grafana", "Kubernetes", "SLO", "On-call"], metode: ["Monitoring", "Incident Response", "Root Cause Analysis", "Automatisering"] },
    { id: "embedded-systems-engineer", emoji: "📟", navn: "Embedded Systems-Ingeniør", beskrivelse: "Utvikle programvare for embeddede systemer og mikrokontrollere.", kompetanse: ["C", "C++", "RTOS", "STM32", "Bare Metal"], metode: ["Requirements", "Design", "Implementation", "Testing", "Debugging"] },
    { id: "qa-engineer", emoji: "🧪", navn: "QA-Ingeniør", beskrivelse: "Planlegge og utføre kvalitetssikringstester for programvare.", kompetanse: ["Selenium", "JIRA", "TestRail", "Cypress", "API Testing"], metode: ["Testplanlegging", "Testutførelse", "Defect Tracking", "Reporting"] },
    { id: "solutions-architect", emoji: "🏛️", navn: "Løsningsarkitekt", beskrivelse: "Designe tekniske løsninger som møter forretningsbehov.", kompetanse: ["AWS", "Azure", "System Design", "Microservices", "API Design"], metode: ["Behovsanalyse", "Arkitekturdesign", "Prototyping", "Review"] },
    { id: "product-engineer", emoji: "🚀", navn: "Produkt-Ingeniør", beskrivelse: "Kombinere utvikling med produktforståelse for rask levering.", kompetanse: ["Full-stack", "Product Sense", "A/B Testing", "Analytics", "SQL"], metode: ["Discovery", "Development", "Launch", "Iteration"] },
    { id: "ui-designer", emoji: "✨", navn: "UI-Designer", beskrivelse: "Skapende designer med fokus på visuelle grensesnitt og interaksjonsdesign.", kompetanse: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Design Systems"], metode: ["Research", "Wireframing", "Visual Design", "Prototyping", "Handoff"] },
    { id: "ux-designer", emoji: "🎯", navn: "UX-Designer", beskrivelse: "Designe brukeropplevelser basert på forskning og brukeratferd.", kompetanse: ["User Research", "Personas", "Journey Mapping", "Usability Testing", "Wireframing"], metode: ["Research", "Analysis", "Design", "Testing", "Iteration"] },
    { id: "brand-designer", emoji: "🎨", navn: "Merke-Designer", beskrivelse: "Utvikle og forvalte merkevareidentitet og visuell profil.", kompetanse: ["Illustrator", "Photoshop", "Brand Strategy", "Typography", "Color Theory"], metode: ["Discovery", "Concept", "Refinement", "Guidelines"] },
    { id: "motion-designer", emoji: "🎬", navn: "Motion-Designer", beskrivelse: "Skape animasjoner og visuelle effekter for digitale opplevelser.", kompetanse: ["After Effects", "Cinema 4D", "Lottie", "GSAP", "3D Animation"], metode: ["Storyboarding", "Animation", "Refinement", "Export"] },
    { id: "design-systems-engineer", emoji: "🧩", navn: "Design Systems-Ingeniør", beskrivelse: "Bygge og vedlikeholde skalerbare designsystemer og komponentbiblioteker.", kompetanse: ["Figma", "Storybook", "React", "CSS", "Documentation"], metode: ["Audit", "Architecture", "Component Dev", "Documentation"] },
    { id: "product-designer", emoji: "💎", navn: "Produkt-Designer", beskrivelse: "Designe digitale produkter fra konsept til ferdig løsning.", kompetanse: ["Figma", "Prototyping", "User Research", "Design Thinking", "Agile"], metode: ["Discovery", "Design", "Testing", "Handoff", "Iteration"] },
    { id: "visual-designer", emoji: "🖼️", navn: "Visuell Designer", beskrivelse: "Skape visuelt tiltalende grafikk og illustrasjoner.", kompetanse: ["Illustrator", "Photoshop", "Figma", "3D", "Illustration"], metode: ["Concept", "Creation", "Refinement", "Delivery"] },
    { id: "design-strategist", emoji: "📊", navn: "Design-Strateg", beskrivelse: "Koble forretningsmål med designbeslutninger for maksimal impact.", kompetanse: ["Design Thinking", "Business Strategy", "User Research", "Facilitation", "Workshops"], metode: ["Analysis", "Strategy", "Facilitation", "Coaching"] }
  ],
  en: [
    { id: "frontend-developer", emoji: "🎨", navn: "Frontend Developer", beskrivelse: "Expert in modern web technologies, React, Vue, CSS and responsive design.", kompetanse: ["React", "Vue", "TypeScript", "CSS", "Tailwind"], metode: ["Requirements analysis", "Tech stack selection", "Component architecture", "Testing", "Optimization"] },
    { id: "backend-architect", emoji: "🏗️", navn: "Backend Architect", beskrivelse: "Expert in APIs, databases, server logic and system architecture.", kompetanse: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker"], metode: ["System analysis", "API architecture", "Database modeling", "Security review", "Scaling"] },
    { id: "devops-automator", emoji: "🔧", navn: "DevOps Automator", beskrivelse: "Automates workflows, CI/CD pipelines and infrastructure setup.", kompetanse: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "AWS"], metode: ["Infrastructure review", "CI/CD pipeline", "Automation", "Monitoring", "Documentation"] },
    { id: "ai-engineer", emoji: "🤖", navn: "AI Engineer", beskrivelse: "Builds and integrates AI solutions, machine learning models and intelligent systems.", kompetanse: ["Python", "TensorFlow", "LangChain", "OpenAI API", "Vector DB"], metode: ["Requirements analysis", "Model selection", "Integration", "Testing", "Deployment"] },
    { id: "data-engineer", emoji: "📊", navn: "Data Engineer", beskrivelse: "Designs and builds data pipelines, warehouses and ETL processes.", kompetanse: ["Python", "SQL", "Apache Spark", "Airflow", "Snowflake"], metode: ["Data architecture", "Pipeline development", "Testing", "Monitoring", "Optimization"] },
    { id: "security-engineer", emoji: "🔐", navn: "Security Engineer", beskrivelse: "Identifies vulnerabilities, implements security measures and conducts audits.", kompetanse: ["Penetration Testing", "SIEM", "OWASP", "IAM", "Cryptography"], metode: ["Threat modeling", "Security review", "Implementation", "Testing", "Documentation"] },
    { id: "mobile-developer", emoji: "📱", navn: "Mobile Developer", beskrivelse: "Builds native and cross-platform mobile apps for iOS and Android.", kompetanse: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"], metode: ["Requirements analysis", "UI/UX design", "Implementation", "Testing", "App Store optimization"] },
    { id: "database-administrator", emoji: "🗄️", navn: "Database Administrator", beskrivelse: "Administrate, optimize and secure company databases.", kompetanse: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Backup"], metode: ["Installation", "Configuration", "Backup", "Monitoring", "Optimization"] },
    { id: "cloud-architect", emoji: "☁️", navn: "Cloud Architect", beskrivelse: "Design and implement cloud solutions with AWS, Azure or GCP.", kompetanse: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"], metode: ["Requirements analysis", "Architecture design", "Migration", "Security", "Cost optimization"] },
    { id: "systems-programmer", emoji: "⚙️", navn: "Systems Programmer", beskrivelse: "Develop low-level system software, drivers and operating systems.", kompetanse: ["C", "C++", "Rust", "Linux", "Assembly"], metode: ["Systems thinking", "Driver development", "Optimization", "Testing", "Debugging"] },
    { id: "network-engineer", emoji: "🌐", navn: "Network Engineer", beskrivelse: "Design, implement and maintain network infrastructure.", kompetanse: ["TCP/IP", "DNS", "VPN", "Firewall", "Cisco"], metode: ["Network design", "Configuration", "Monitoring", "Troubleshooting", "Documentation"] },
    { id: "code-reviewer", emoji: "🔍", navn: "Code Reviewer", beskrivelse: "Ensures code quality, identifies bugs and suggests improvements.", kompetanse: ["Code Analysis", "Testing", "Security", "Best Practices", "Refactoring"], metode: ["Code review", "Bug identification", "Security analysis", "Performance review"] },
    { id: "test-automation-engineer", emoji: "✅", navn: "Test Automation Engineer", beskrivelse: "Design and implement automated testing solutions for software.", kompetanse: ["Selenium", "Cypress", "JUnit", "Playwright", "CI/CD"], metode: ["Test strategy", "Test automation", "Integration", "Reporting"] },
    { id: "platform-engineer", emoji: "🖥️", navn: "Platform Engineer", beskrivelse: "Build and maintain internal developer platforms and tools.", kompetanse: ["Kubernetes", "Docker", "Terraform", "Go", "Python"], metode: ["Platform design", "Tool development", "Automation", "Documentation"] },
    { id: "technical-writer", emoji: "📝", navn: "Technical Writer", beskrivelse: "Produce clear and concise technical documentation.", kompetanse: ["Markdown", "API Docs", "GitBook", "DITA", "Adobe FrameMaker"], metode: ["Research", "Structuring", "Writing", "Review", "Publishing"] },
    { id: "automation-engineer", emoji: "⚡", navn: "Automation Engineer", beskrivelse: "Automate repetitive tasks and workflows.", kompetanse: ["Python", "PowerShell", "Bash", "Zapier", "n8n"], metode: ["Process analysis", "Solution design", "Implementation", "Testing", "Documentation"] },
    { id: "iot-engineer", emoji: "📡", navn: "IoT Engineer", beskrivelse: "Develop and implement Internet of Things solutions.", kompetanse: ["Arduino", "Raspberry Pi", "MQTT", "ESP32", "Sensors"], metode: ["Prototyping", "Hardware", "Firmware", "Communication", "Testing"] },
    { id: "blockchain-engineer", emoji: "⛓️", navn: "Blockchain Engineer", beskrivelse: "Build decentralized applications and smart contracts.", kompetanse: ["Solidity", "Web3.js", "Ethereum", "Hyperledger", "Rust"], metode: ["Smart Contracts", "dApp development", "Testing", "Deployment", "Security Audit"] },
    { id: "machine-learning-engineer", emoji: "🧠", navn: "ML Engineer", beskrivelse: "Develop and productionize machine learning models.", kompetanse: ["Python", "TensorFlow", "PyTorch", "MLflow", "SageMaker"], metode: ["Data preparation", "Model training", "Evaluation", "Deployment", "Monitoring"] },
    { id: "sre-engineer", emoji: "📈", navn: "SRE Engineer", beskrivelse: "Ensure high availability and performance for production systems.", kompetanse: ["Prometheus", "Grafana", "Kubernetes", "SLO", "On-call"], metode: ["Monitoring", "Incident Response", "Root Cause Analysis", "Automation"] },
    { id: "embedded-systems-engineer", emoji: "📟", navn: "Embedded Systems Engineer", beskrivelse: "Develop software for embedded systems and microcontrollers.", kompetanse: ["C", "C++", "RTOS", "STM32", "Bare Metal"], metode: ["Requirements", "Design", "Implementation", "Testing", "Debugging"] },
    { id: "qa-engineer", emoji: "🧪", navn: "QA Engineer", beskrivelse: "Plan and execute quality assurance tests for software.", kompetanse: ["Selenium", "JIRA", "TestRail", "Cypress", "API Testing"], metode: ["Test planning", "Test execution", "Defect Tracking", "Reporting"] },
    { id: "solutions-architect", emoji: "🏛️", navn: "Solutions Architect", beskrivelse: "Design technical solutions that meet business needs.", kompetanse: ["AWS", "Azure", "System Design", "Microservices", "API Design"], metode: ["Requirements analysis", "Architecture design", "Prototyping", "Review"] },
    { id: "product-engineer", emoji: "🚀", navn: "Product Engineer", beskrivelse: "Combine development with product understanding for rapid delivery.", kompetanse: ["Full-stack", "Product Sense", "A/B Testing", "Analytics", "SQL"], metode: ["Discovery", "Development", "Launch", "Iteration"] },
    { id: "ui-designer", emoji: "✨", navn: "UI Designer", beskrivelse: "Creative designer focused on visual interfaces and interaction design.", kompetanse: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Design Systems"], metode: ["Research", "Wireframing", "Visual Design", "Prototyping", "Handoff"] },
    { id: "ux-designer", emoji: "🎯", navn: "UX Designer", beskrivelse: "Design user experiences based on research and user behavior.", kompetanse: ["User Research", "Personas", "Journey Mapping", "Usability Testing", "Wireframing"], metode: ["Research", "Analysis", "Design", "Testing", "Iteration"] },
    { id: "brand-designer", emoji: "🎨", navn: "Brand Designer", beskrivelse: "Develop and manage brand identity and visual profile.", kompetanse: ["Illustrator", "Photoshop", "Brand Strategy", "Typography", "Color Theory"], metode: ["Discovery", "Concept", "Refinement", "Guidelines"] },
    { id: "motion-designer", emoji: "🎬", navn: "Motion Designer", beskrivelse: "Create animations and visual effects for digital experiences.", kompetanse: ["After Effects", "Cinema 4D", "Lottie", "GSAP", "3D Animation"], metode: ["Storyboarding", "Animation", "Refinement", "Export"] },
    { id: "design-systems-engineer", emoji: "🧩", navn: "Design Systems Engineer", beskrivelse: "Build and maintain scalable design systems and component libraries.", kompetanse: ["Figma", "Storybook", "React", "CSS", "Documentation"], metode: ["Audit", "Architecture", "Component Dev", "Documentation"] },
    { id: "product-designer", emoji: "💎", navn: "Product Designer", beskrivelse: "Design digital products from concept to finished solution.", kompetanse: ["Figma", "Prototyping", "User Research", "Design Thinking", "Agile"], metode: ["Discovery", "Design", "Testing", "Handoff", "Iteration"] },
    { id: "visual-designer", emoji: "🖼️", navn: "Visual Designer", beskrivelse: "Create visually appealing graphics and illustrations.", kompetanse: ["Illustrator", "Photoshop", "Figma", "3D", "Illustration"], metode: ["Concept", "Creation", "Refinement", "Delivery"] },
    { id: "design-strategist", emoji: "📊", navn: "Design Strategist", beskrivelse: "Connect business goals with design decisions for maximum impact.", kompetanse: ["Design Thinking", "Business Strategy", "User Research", "Facilitation", "Workshops"], metode: ["Analysis", "Strategy", "Facilitation", "Coaching"] }
  ]
}

export default function AgenterPage() {
  const { lang, t } = useLanguage()
  const [valgtAgent, setValgtAgent] = useState<typeof agenterData.no[0] | null>(null)
  
  const agenter = agenterData[lang]

  const lastNedAgent = (agent: typeof agenterData.no[0]) => {
    const content = `# ${agent.emoji} ${agent.navn}

${lang === 'no' ? `Du er en erfaren ${agent.navn}.` : `You are an experienced ${agent.navn}.`}

## ${lang === 'no' ? 'Kjernekompetanse' : 'Core Skills'}

${agent.kompetanse.map(k => `- ${k}`).join('\n')}

## ${lang === 'no' ? 'Arbeidsmetode' : 'Work Method'}

${agent.metode.map((steg, i) => `${i + 1}. ${steg}`).join('\n')}

---
*Generated by Berentsen Labs*
`
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${agent.id}-${lang}.md`
    a.click()
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <Navbar />
      <LanguageToggle />

      {/* Hero - Brutalist */}
      <section className="pt-32 pb-20 px-6 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs text-zinc-400 mb-8 tracking-widest uppercase">
            {t('heroAgentsBadge')}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight mb-8">
            {t('heroAgentsTitle1')}<br />
            <span className="text-zinc-400">{t('heroAgentsTitle2')}</span>
          </h1>
          <p className="text-lg text-zinc-500 max-w-xl">
            {t('heroAgentsDesc')}
          </p>
        </div>
      </section>

      {/* Agenter Grid - Brutalist */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs text-zinc-400 mb-12 tracking-widest uppercase">
            {t('allAgents')} — 32
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-zinc-200">
            {agenter.map((agent) => (
              <div 
                key={agent.id}
                className="bg-zinc-50 p-6 hover:bg-zinc-100 transition-colors cursor-pointer"
                onClick={() => setValgtAgent(agent)}
              >
                <div className="text-3xl mb-4">{agent.emoji}</div>
                <h3 className="text-base font-medium mb-1">{agent.navn}</h3>
                <p className="text-sm text-zinc-500 mb-4 line-clamp-2">{agent.beskrivelse}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {agent.kompetanse.slice(0, 3).map((k) => (
                    <span key={k} className="px-2 py-0.5 bg-zinc-100 text-zinc-600 text-xs">{k}</span>
                  ))}
                </div>
                <button 
                  className="w-full px-4 py-2 border border-zinc-950 text-sm font-medium hover:bg-zinc-950 hover:text-zinc-50 transition-colors"
                  onClick={(e) => { e.stopPropagation(); lastNedAgent(agent); }}
                >
                  ↓ {t('download')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal - Brutalist */}
      {valgtAgent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm" onClick={() => setValgtAgent(null)}>
          <div className="bg-zinc-50 border border-zinc-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-zinc-50 border-b border-zinc-200 p-6 flex items-start justify-between">
              <div>
                <div className="text-4xl mb-2">{valgtAgent.emoji}</div>
                <h2 className="text-2xl font-medium">{valgtAgent.navn}</h2>
              </div>
              <button onClick={() => setValgtAgent(null)} className="text-2xl text-zinc-400 hover:text-zinc-950 transition-colors">×</button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xs text-zinc-400 uppercase tracking-widest mb-2">{t('description')}</h3>
                <p className="text-zinc-600">{valgtAgent.beskrivelse}</p>
              </div>
              <div>
                <h3 className="text-xs text-zinc-400 uppercase tracking-widest mb-3">{t('skills')}</h3>
                <div className="flex flex-wrap gap-2">
                  {valgtAgent.kompetanse.map((k) => (
                    <span key={k} className="px-3 py-1.5 bg-zinc-950 text-zinc-50 text-sm">{k}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs text-zinc-400 uppercase tracking-widest mb-3">{t('method')}</h3>
                <div className="space-y-2">
                  {valgtAgent.metode.map((steg, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="w-6 h-6 bg-zinc-200 text-zinc-600 flex items-center justify-center text-sm font-medium flex-shrink-0">{i + 1}</span>
                      <span className="text-zinc-600 pt-0.5">{steg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 bg-zinc-50 border-t border-zinc-200 p-6 flex gap-4">
              <button className="flex-1 px-6 py-3 bg-zinc-950 text-zinc-50 font-medium hover:bg-zinc-800 transition-colors" onClick={() => { lastNedAgent(valgtAgent); setValgtAgent(null); }}>
                ↓ {t('downloadMd')}
              </button>
              <button className="px-6 py-3 border border-zinc-300 font-medium hover:border-zinc-950 transition-colors" onClick={() => setValgtAgent(null)}>
                {t('close')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA - Brutalist */}
      <section className="py-24 px-6 bg-zinc-100 border-t border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-3xl md:text-4xl font-light leading-tight mb-6">
            {t('needHelp')} <span className="text-zinc-400">{t('help')}</span>?
          </div>
          <p className="text-zinc-500 mb-8 max-w-md mx-auto">
            {t('helpDesc')}
          </p>
          <a href="mailto:vegarberentsen@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 text-zinc-50 font-medium hover:bg-zinc-800 transition-colors">
            {t('contact')} →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-medium tracking-tight">
            <span className="text-zinc-950">Berentsen</span>
            <span className="text-zinc-400">Labs</span>
          </div>
          <div className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Berentsen Labs. {t('rights')}
          </div>
        </div>
      </footer>
    </div>
  )
}
