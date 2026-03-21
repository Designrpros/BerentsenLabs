"use client"

import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Language Toggle */}
      <div className="fixed top-20 right-4 z-40 flex gap-2">
        <a 
          href="/agenter"
          className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-400 hover:bg-teal-500 hover:text-black transition-all"
        >
          🌐 NO/EN
        </a>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-teal-950/20 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 text-center px-6">
          <div className="mb-6 inline-block px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm">
            🤖 AI & Web Development Studio
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Building
            </span>
            <br />
            <span className="text-white">Tomorrow</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
            We craft intelligent AI assistants and stunning web experiences. 
            From concept to deployment, we bring your digital vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/agenter" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-lg transition-all hover:scale-105">
              View Agents →
            </a>
            <a href="mailto:vegarberentsen@gmail.com" className="px-8 py-4 border border-white/20 hover:border-teal-400 rounded-lg transition-all hover:bg-white/5">
              Contact Us
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-teal-400">Our</span> Services
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
            Comprehensive solutions for your digital presence
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🤖', title: 'AI Assistants', desc: 'Custom OpenClaw and AI assistants tailored to your workflow.' },
              { icon: '🌐', title: 'Web Development', desc: 'Modern websites and web apps built with Next.js.' },
              { icon: '📱', title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications.' },
              { icon: '🔧', title: 'System Integration', desc: 'Connect tools and automate workflows.' },
              { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces.' },
              { icon: '🚀', title: 'Deployment', desc: 'From development to production.' }
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-teal-500/50 transition-all hover:transform hover:scale-[1.02] group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-teal-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-t from-teal-950/30 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get <span className="text-teal-400">Started</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Have a project in mind? Let's build something amazing together.
          </p>
          <a 
            href="mailto:vegarberentsen@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-lg transition-all"
          >
            Contact Us →
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
            © {new Date().getFullYear()} Berentsen Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
