import React, { useState, useEffect } from 'react';
import { Menu, X, Waves, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-md py-3'
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 text-white hover:text-sky-400 transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-lg bg-sky-600/20 border border-sky-500/40 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:border-sky-400 transition-all">
              <Waves className="w-5 h-5 text-sky-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white leading-tight font-sans">
                WRE Consultoría SAS
              </span>
              <span className="text-[10px] text-sky-400/80 font-medium tracking-wider uppercase leading-none hidden sm:block">
                Recursos Hídricos & Ambiente
              </span>
            </div>
          </a>

          {/* Zone 2: 5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#inicio"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Inicio
            </a>
            <a
              href="#quienes-somos"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Quienes Somos
            </a>
            <a
              href="#servicios"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Servicios
            </a>
            <a
              href="#recursos"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Recursos Técnicos
            </a>
            <a
              href="#contacto"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Contacto
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/80 rounded-lg transition-colors border border-transparent hover:border-emerald-500/30"
              title="Chat directo por WhatsApp"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
            </a>

            <a
              href="#cotizador"
              onClick={(e) => {
                if (onOpenEstimator) {
                  e.preventDefault();
                  onOpenEstimator();
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm hover:shadow-sky-500/20 transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span>Cotizar Proyecto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-400 bg-slate-900 border border-slate-800 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-900 min-h-[44px] flex items-center"
            >
              Inicio
            </a>
            <a
              href="#quienes-somos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-900 min-h-[44px] flex items-center"
            >
              Quienes Somos
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-900 min-h-[44px] flex items-center"
            >
              Servicios
            </a>
            <a
              href="#recursos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-900 min-h-[44px] flex items-center"
            >
              Recursos Técnicos
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-900 min-h-[44px] flex items-center"
            >
              Contacto
            </a>

            <div className="pt-3 border-t border-slate-800 mt-2 space-y-2">
              <a
                href="#cotizador"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEstimator) onOpenEstimator();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm min-h-[44px]"
              >
                <span>Cotizar Proyecto</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-lg min-h-[44px]"
              >
                <span>Llamar al {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
