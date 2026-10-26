import React from 'react';
import { Waves, Mail, Phone, MapPin, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-850 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-sky-600/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                <Waves className="w-4 h-4 text-sky-400" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Empresa líder en consultoría de recursos hídricos y estudios ambientales. Modelación hidrológica, hidráulica 2D, hidrogeología de acuíferos y licenciamiento ambiental en Colombia.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Página de Inicio
                </a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-white transition-colors">
                  Quienes Somos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios Técnicos
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-white transition-colors">
                  Recursos Bibliográficos
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-white transition-colors">
                  Cotizador & Diagnóstico
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Áreas de Práctica
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Estudios de Hidrología
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Modelación Hidráulica 2D (Iber)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Aguas Subterráneas & Acuíferos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Calidad del Agua & Vertimientos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Riego y Drenaje Agrícola
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Estudios Ambientales (EIA / PMA)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Atención en Colombia
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white break-all">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px] text-center sm:text-left">
            Copyright © 2026 {COMPANY_INFO.name}. Todos los derechos reservados. Consultoría en Recursos Hídricos y Estudios Ambientales.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
          >
            <span>Subir al inicio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Action Pill for Quick Access */}
      <a
        href={COMPANY_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-500/20 transition-all flex items-center gap-2 group hover:scale-105 active:scale-95"
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="text-xs font-semibold hidden sm:inline">WhatsApp Asesoría</span>
      </a>
    </footer>
  );
};
