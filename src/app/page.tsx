"use client"

import Navbar from '@/components/Navbar'
import LanguageToggle from '@/components/LanguageToggle'
import { useLanguage } from '@/components/LanguageProvider'

export default function Home() {
  const { lang, t } = useLanguage()
  
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <Navbar />
      <LanguageToggle />

      {/* Hero Section - Brutalist Minimal */}
      <section className="min-h-screen pt-32 px-6 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-xs text-zinc-400 mb-8 tracking-widest uppercase">
            {t('heroBadge')}
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight mb-12">
            <span className="block">{t('heroTitle1')}</span>
            <span className="block text-zinc-400">{t('heroTitle2')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-500 max-w-xl mb-12">
            {t('heroDesc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <a 
              href="/agenter" 
              className="inline-flex items-center gap-2 text-sm font-medium px-0 py-2 border-b border-zinc-950 hover:border-zinc-400 transition-colors"
            >
              {t('heroCta')} →
            </a>
            <a 
              href="mailto:vegarberentsen@gmail.com" 
              className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors"
            >
              {t('heroContact')}
            </a>
          </div>
        </div>
      </section>

      {/* Stats - Grid Brutalist */}
      <section className="py-24 px-6 border-y border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-zinc-200">
            <div className="bg-zinc-50 p-8 md:p-12">
              <div className="text-4xl md:text-5xl font-light mb-2">50+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">{t('stat1')}</div>
            </div>
            <div className="bg-zinc-50 p-8 md:p-12">
              <div className="text-4xl md:text-5xl font-light mb-2">50K+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">{t('stat2')}</div>
            </div>
            <div className="bg-zinc-50 p-8 md:p-12 col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-light mb-2">∞</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">{t('stat3')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs text-zinc-400 mb-16 tracking-widest uppercase">
            {t('servicesTitle1')} {t('servicesTitle2')}
          </div>
          
          <div className="space-y-0">
            {[
              { icon: '01', titleKey: 'aiAssistants', descKey: 'aiAssistantsDesc' },
              { icon: '02', titleKey: 'webDev', descKey: 'webDevDesc' },
              { icon: '03', titleKey: 'mobileApps', descKey: 'mobileAppsDesc' },
              { icon: '04', titleKey: 'systemIntegration', descKey: 'systemIntegrationDesc' },
              { icon: '05', titleKey: 'uiuxDesign', descKey: 'uiuxDesignDesc' },
              { icon: '06', titleKey: 'deployment', descKey: 'deploymentDesc' },
            ].map((service, i) => (
              <div 
                key={i}
                className="py-8 border-t border-zinc-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs text-zinc-400 font-mono">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-medium">{t(service.titleKey)}</h3>
                    <p className="text-sm text-zinc-500 mt-1">{t(service.descKey)}</p>
                  </div>
                </div>
                <span className="text-2xl opacity-20">{['🤖', '🌐', '📱', '🔧', '🎨', '🚀'][i]}</span>
              </div>
            ))}
            <div className="py-8 border-t border-zinc-200" />
          </div>
        </div>
      </section>

      {/* About Section - Dark */}
      <section id="about" className="py-32 px-6 bg-zinc-950 text-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs text-zinc-500 mb-16 tracking-widest uppercase">
            {t('aboutTitle')} {t('aboutTitle2')}
          </div>
          
          <div className="space-y-8 text-lg md:text-xl text-zinc-300 leading-relaxed">
            <p>
              <span className="text-zinc-100 font-medium">Berentsen Labs</span> {t('aboutP1')}
            </p>
            <p>{t('aboutP2')}</p>
            <p>{t('aboutP3')}</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs text-zinc-400 mb-16 tracking-widest uppercase">
            {t('projectsTitle1')} {t('projectsTitle2')}
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-zinc-200">
            <a href="https://costofliving.no" target="_blank" className="bg-zinc-50 p-8 hover:bg-zinc-100 transition-colors">
              <div className="text-xs text-zinc-400 mb-4 uppercase tracking-wider">{t('project1Category')}</div>
              <h3 className="text-2xl font-medium mb-2">Cost of Living</h3>
              <p className="text-sm text-zinc-500">{t('project1Desc')}</p>
            </a>
            <a href="https://designr.pro" target="_blank" className="bg-zinc-50 p-8 hover:bg-zinc-100 transition-colors">
              <div className="text-xs text-zinc-400 mb-4 uppercase tracking-wider">{t('project2Category')}</div>
              <h3 className="text-2xl font-medium mb-2">Designr.Pro</h3>
              <p className="text-sm text-zinc-500">{t('project2Desc')}</p>
            </a>
            <a href="https://wikits.net" target="_blank" className="bg-zinc-50 p-8 hover:bg-zinc-100 transition-colors">
              <div className="text-xs text-zinc-400 mb-4 uppercase tracking-wider">{t('project3Category')}</div>
              <h3 className="text-2xl font-medium mb-2">Wikits</h3>
              <p className="text-sm text-zinc-500">{t('project3Desc')}</p>
            </a>
            <div className="bg-zinc-50 p-8">
              <div className="text-xs text-zinc-400 mb-4 uppercase tracking-wider">{t('project4Category')}</div>
              <h3 className="text-2xl font-medium mb-2">{t('project4Title')}</h3>
              <p className="text-sm text-zinc-500">{t('project4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Dark */}
      <section className="py-24 px-6 bg-zinc-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-3xl md:text-4xl font-light leading-tight mb-6">
            {t('ctaTitle')} <span className="text-zinc-400">{t('ctaTitle2')}</span>
          </div>
          <p className="text-zinc-500 mb-8 max-w-md mx-auto">
            {t('ctaDesc')}
          </p>
          <a 
            href="mailto:vegarberentsen@gmail.com" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 text-zinc-50 text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            {t('ctaButton')} →
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
