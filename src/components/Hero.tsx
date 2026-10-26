import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronDown, FileCheck, Layers, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onExploreServices: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onOpenEstimator }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="inicio" className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 bg-slate-950 overflow-hidden">
      {/* Background with real corporate image and measured dark contrast scrim */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <img
            src="/images/hero_water.jpg"
            alt="Ingeniería de recursos hídricos WRE Consultoría"
            className="w-full h-full object-cover object-center opacity-35 scale-105 transform animate-in fade-in duration-700"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 opacity-90" />
        )}
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.15),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Top Lead */}
        <div className="max-w-3xl pt-8 sm:pt-12">
          {/* Unboxed clean text metadata / kicker without pills */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-sky-400 mb-4 uppercase">
            <span>Consultoría Especializada</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Recursos Hídricos</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Estudios Ambientales</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
            Ingeniería del agua para un futuro sostenible
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
            Modelación hidrodinámica 2D, estudios hidrológicos, hidrogeología de acuíferos y licenciamiento ambiental riguroso para infraestructura, agroindustria y entidades públicas en Colombia.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12">
            <button
              onClick={onOpenEstimator}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-lg shadow-lg shadow-sky-950/50 transition-all hover:-translate-y-0.5 whitespace-nowrap min-h-[48px]"
            >
              <span>Diagnóstico & Cotización Técnica</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all min-h-[48px] whitespace-nowrap"
            >
              <span>Explorar Servicios</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Key Trust Signals unboxed */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Modelación Numérica Iber 2D & HEC-RAS</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Apegado al Decreto 1076/2015 & Guías ANLA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Sede en Bogotá con cobertura en toda Colombia</span>
            </div>
          </div>
        </div>

        {/* 4-Column Adjacency Trust Strip (Full-width row below hero split) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-2 text-sky-400 mb-2">
              <Layers className="w-5 h-5" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">+10 Años</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">Experiencia Multidisciplinaria</p>
            <p className="text-xs text-slate-400 mt-1">Ingeniería hidráulica, hidrológica y ambiental aplicada.</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-2 text-sky-400 mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">100%</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">Rigor Técnico y Legal</p>
            <p className="text-xs text-slate-400 mt-1">Conforme a términos de referencia CARs y ANLA.</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-2 text-sky-400 mb-2">
              <FileCheck className="w-5 h-5" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">1D / 2D</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">Modelación Computacional</p>
            <p className="text-xs text-slate-400 mt-1">Iber, HEC-HMS, HEC-RAS, MODFLOW y QUAL2K.</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-2 text-sky-400 mb-2">
              <MapPin className="w-5 h-5" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">Nacional</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">Cobertura en Colombia</p>
            <p className="text-xs text-slate-400 mt-1">Atención directa a proyectos en todos los departamentos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
