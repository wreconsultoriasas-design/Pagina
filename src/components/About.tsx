import React from 'react';
import { Target, Compass, Award, ShieldCheck, Leaf, Users, CheckCircle } from 'lucide-react';
import { TECHNICAL_PILLARS } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <span>Identidad Corporativa</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Experiencia & Compromiso</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Quienes Somos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            <strong className="text-white font-semibold">WRE Consultoría S.A.S.</strong> es una empresa líder especializada en consultoría de recursos hídricos y estudios ambientales, integrada por un equipo multidisciplinario de expertos comprometidos con la excelencia técnica y la sostenibilidad.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Nuestra experiencia abarca desde la hidrología, la hidráulica y la gestión de aguas subterráneas, hasta la evaluación de la calidad del agua y el desarrollo de estudios ambientales integrales. Nos especializamos en el diseño de soluciones personalizadas para proyectos de riego y drenaje agrícola, garantizando siempre un equilibrio entre la eficiencia productiva y la preservación del entorno. Basamos nuestra gestión en pilares de integridad y profesionalismo, transformando los desafíos del recurso hídrico en oportunidades sostenibles para nuestros clientes.
          </p>
        </div>

        {/* Misión y Visión Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Misión */}
          <div className="relative p-7 sm:p-8 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Misión</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Proveer soluciones integrales en consultoría de recursos hídricos y estudios ambientales a través de una ingeniería de excelencia y un equipo multidisciplinario altamente calificado. Nos enfocamos en satisfacer las necesidades específicas de nuestros clientes mediante la innovación y el rigor técnico, promoviendo siempre el desarrollo sostenible y la preservación de los ecosistemas para garantizar la disponibilidad y calidad del agua para las futuras generaciones.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-850 flex items-center gap-2 text-xs font-medium text-sky-400">
              <CheckCircle className="w-4 h-4 text-sky-400" />
              <span>Ingeniería orientada a resultados técnicos comprobables</span>
            </div>
          </div>

          {/* Visión */}
          <div className="relative p-7 sm:p-8 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Visión 2030</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Para el año 2030, consolidarnos como la consultora referente a nivel regional en la gestión estratégica del agua y el medio ambiente, siendo reconocidos por nuestra integridad y capacidad técnica. Aspiramos a ser aliados clave en la transformación hacia modelos productivos y de infraestructura que integren el desarrollo sostenible como eje central, liderando proyectos que armonicen el progreso económico con el equilibrio ambiental.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-850 flex items-center gap-2 text-xs font-medium text-emerald-400">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Liderazgo en gestión hídrica y ambiental en Colombia</span>
            </div>
          </div>
        </div>

        {/* 4 Technical Pillars */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Nuestros Pilares de Actuación Profesional
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Principios que sustentan cada memoria técnica, cálculo y estudio que entregamos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TECHNICAL_PILLARS.map((pillar, idx) => {
              const icons = [Award, Leaf, ShieldCheck, Users];
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 flex items-center justify-center text-sky-400 mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
