import React, { useState } from 'react';
import { SERVICES, ENVIRONMENTAL_INSTRUMENTS, ServiceItem } from '../data/content';
import { ArrowRight, CheckCircle2, ChevronRight, Info, Layers, BookOpen } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onSelectForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onSelectForQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedInstrument, setSelectedInstrument] = useState<string | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'todos', label: 'Todos los Servicios' },
    { id: 'hidrologia', label: 'Hidrología' },
    { id: 'hidraulica', label: 'Hidráulica' },
    { id: 'subterraneas', label: 'Aguas Subterráneas' },
    { id: 'calidad', label: 'Calidad del Agua' },
    { id: 'riego', label: 'Riego y Drenaje' },
    { id: 'ambiental', label: 'Estudios Ambientales' },
  ];

  const filteredServices = activeCategory === 'todos'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="servicios" className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <span>Servicios de Consultoría</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Portafolio Técnico Integral</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Soluciones Especializadas en Recursos Hídricos y Medio Ambiente
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Ingeniería de alta fidelidad técnica sustentada en normativas vigentes, modelación computacional avanzada y entregables listos para radicar ante autoridades ambientales y entidades contratantes.
          </p>
        </div>

        {/* Category Filter Bar (Interactive Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 min-h-[40px] ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-sm font-semibold'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredServices.map((service) => {
            const hasError = imgErrors[service.id];
            return (
              <div
                key={service.id}
                className="flex flex-col bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all group hover:shadow-xl hover:shadow-slate-950/60"
              >
                {/* Service Image / Fallback Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-850">
                  {!hasError ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(service.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 to-sky-950 text-slate-400">
                      <Layers className="w-10 h-10 text-sky-400 mb-2 opacity-80" />
                      <span className="text-xs font-mono text-sky-300">{service.badge}</span>
                    </div>
                  )}
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  
                  {/* Category text kicker (unboxed, clean) */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold text-sky-300 bg-slate-950/80 backdrop-blur-sm rounded border border-slate-700/60">
                    {service.badge}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal flex-1">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="mb-5 pt-3 border-t border-slate-800/80">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                      Productos Clave:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 mt-auto">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1.5 py-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded"
                    >
                      <span>Ver Ficha Técnica</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onSelectForQuote(service.title)}
                      className="px-3 py-1.5 text-xs font-medium text-white bg-slate-800 hover:bg-sky-600 rounded-md transition-colors"
                    >
                      Cotizar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Environmental Instruments Explorer */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                <BookOpen className="w-4 h-4" />
                <span>Glosario Técnico de Gestión Ambiental en Colombia</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Instrumentos y Planes Ambientales que Tramitamos
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Haga clic en cualquiera de las siglas para conocer el alcance normativo, entidad evaluadora (ANLA / CARs) y objetivo técnico según la legislación colombiana.
              </p>
            </div>
          </div>

          {/* Acronym Pills Grid */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6">
            {ENVIRONMENTAL_INSTRUMENTS.map((inst) => {
              const isSelected = selectedInstrument === inst.acronym;
              return (
                <button
                  key={inst.acronym}
                  onClick={() => setSelectedInstrument(isSelected ? null : inst.acronym)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-left flex items-center gap-1.5 min-h-[38px] ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                      : 'bg-slate-950 text-slate-200 border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span className="font-mono tracking-wider">{inst.acronym}</span>
                  <span className="text-[11px] text-slate-400 group-hover:text-slate-300 hidden sm:inline">
                    · {inst.name.length > 25 ? inst.name.slice(0, 25) + '...' : inst.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Instrument Detail Card */}
          {selectedInstrument && (() => {
            const current = ENVIRONMENTAL_INSTRUMENTS.find((i) => i.acronym === selectedInstrument);
            if (!current) return null;
            return (
              <div className="p-5 sm:p-6 rounded-xl bg-slate-950/80 border border-emerald-500/30 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded">
                      {current.acronym}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {current.name}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    Autoridad: <span className="text-slate-200 font-medium">{current.entity}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
                  {current.description}
                </p>

                <div className="pt-3 border-t border-slate-850 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <p className="text-slate-400">
                    <strong className="text-slate-200">Objetivo Técnico:</strong> {current.objective}
                  </p>
                  <button
                    onClick={() => onSelectForQuote(`Estudio ${current.acronym}: ${current.name}`)}
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold whitespace-nowrap shrink-0"
                  >
                    <span>Cotizar este Instrumento</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
