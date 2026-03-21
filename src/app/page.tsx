"use client"
import { useState } from "react"
import Link from 'next/link'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-teal-400">Berentsen</span>
            <span className="text-white">Labs</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="/agenter" className="hover:text-teal-400 transition-colors">Agenter</a>
          </div>
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
          <button 
            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="text-center space-y-8">
            <a href="/" className="block text-3xl font-bold hover:text-teal-400 transition-colors" onClick={() => setMenuOpen(false)}>Hjem</a>
            <a href="/agenter" className="block text-3xl font-bold text-teal-400" onClick={() => setMenuOpen(false)}>Agenter</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
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
            <a href="#contact" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-lg transition-all hover:scale-105">
              Start a Project
            </a>
            <a href="#projects" className="px-8 py-4 border border-white/20 hover:border-teal-400 rounded-lg transition-all hover:bg-white/5">
              View Our Work →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
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
              {
                icon: '🤖',
                title: 'AI Assistants',
                desc: 'Custom OpenClaw and AI assistants tailored to your workflow. Automation, reminders, and intelligent responses.'
              },
              {
                icon: '🌐',
                title: 'Web Development',
                desc: 'Modern websites and web apps built with Next.js, React, and cutting-edge technologies.'
              },
              {
                icon: '📱',
                title: 'Mobile Apps',
                desc: 'Native and cross-platform mobile applications for iOS and Android.'
              },
              {
                icon: '🔧',
                title: 'System Integration',
                desc: 'Connect your tools and automate workflows with custom integrations.'
              },
              {
                icon: '🎨',
                title: 'UI/UX Design',
                desc: 'Beautiful, intuitive interfaces that engage users and enhance experience.'
              },
              {
                icon: '🚀',
                title: 'Deployment',
                desc: 'From development to production. We deploy and maintain your applications.'
              }
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

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-teal-400">Featured</span> Projects
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
            Real-world applications we've built and deployed
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://costofliving.no" target="_blank" className="group relative rounded-2xl overflow-hidden border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-teal-900 to-black p-8 flex flex-col justify-end">
                <div className="absolute top-4 right-4 text-sm text-teal-400">Travel & Lifestyle</div>
                <h3 className="text-3xl font-bold mb-2">Cost of Living</h3>
                <p className="text-gray-400">Comprehensive guide to cost of living in 50+ European countries and 210+ cities.</p>
              </div>
            </a>
            <a href="https://designr.pro" target="_blank" className="group relative rounded-2xl overflow-hidden border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-purple-900 to-black p-8 flex flex-col justify-end">
                <div className="absolute top-4 right-4 text-sm text-purple-400">Portfolio</div>
                <h3 className="text-3xl font-bold mb-2">Designr.Pro</h3>
                <p className="text-gray-400">Personal portfolio showcasing apps, web projects, and creative initiatives.</p>
              </div>
            </a>
            <a href="https://wikits.net" target="_blank" className="group relative rounded-2xl overflow-hidden border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-black p-8 flex flex-col justify-end">
                <div className="absolute top-4 right-4 text-sm text-blue-400">Education</div>
                <h3 className="text-3xl font-bold mb-2">Wikits</h3>
                <p className="text-gray-400">The Operating System for Learning - AI-powered personalized education platform.</p>
              </div>
            </a>
            <div className="group relative rounded-2xl overflow-hidden border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-orange-900 to-black p-8 flex flex-col justify-end">
                <div className="absolute top-4 right-4 text-sm text-orange-400">Coming Soon</div>
                <h3 className="text-3xl font-bold mb-2">Your Project</h3>
                <p className="text-gray-400">Let's build something amazing together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-teal-400">About</span> Us
          </h2>
          <div className="text-xl text-gray-300 space-y-6">
            <p>
              <span className="text-teal-400 font-bold">Berentsen Labs</span> is a digital development studio 
              founded on the belief that technology should empower everyone.
            </p>
            <p>
              We specialize in <span className="text-white">AI assistants</span>, 
              <span className="text-white"> web development</span>, and 
              <span className="text-white"> digital innovation</span>. 
              Our founder has years of experience building apps, websites, and AI solutions 
              for businesses and individuals.
            </p>
            <p>
              Based in <span className="text-white">Østerås, Norway</span>, we work with clients 
              globally to bring their digital visions to life.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8">
            {[
              { number: '50+', label: 'Projects' },
              { number: '210+', label: 'Cities Covered' },
              { number: '∞', label: 'Possibilities' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-400">{stat.number}</div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-t from-teal-950/30 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-teal-400">Let's</span> Connect
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            Have a project in mind? We'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:vegarberentsen@gmail.com" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-lg transition-all hover:scale-105 inline-flex items-center gap-2">
              <span>📧</span> Email Us
            </a>
            <a href="tel:+4748596755" className="px-8 py-4 border border-white/20 hover:border-teal-400 rounded-lg transition-all hover:bg-white/5 inline-flex items-center gap-2">
              <span>📱</span> Call Us
            </a>
          </div>
          
          <div className="mt-16 text-gray-500">
            <p>Østerås, Norway</p>
            <p className="mt-2">+47 485 96 755</p>
          </div>
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
