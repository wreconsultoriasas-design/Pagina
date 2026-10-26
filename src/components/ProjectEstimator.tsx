import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldAlert, Clock, Sparkles, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ProjectEstimatorProps {
  onTransferToContact: (data: {
    service: string;
    region: string;
    scope: string;
    estimatedWeeks: string;
    details: string;
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onTransferToContact }) => {
  const [projectType, setProjectType] = useState<string>('ronda-hidrica');
  const [region, setRegion] = useState<string>('cundinamarca');
  const [complexity, setComplexity] = useState<string>('media');
  const [customNotes, setCustomNotes] = useState<string>('');

  const projectTypes = [
    {
      id: 'ronda-hidrica',
      name: 'Delimitación de Ronda Hídrica (2D Iber)',
      baseWeeks: '3 a 5 semanas',
      authority: 'CARs Regionales / MinAmbiente',
      software: 'Iber 2D + Topobatimétrica + QGIS',
      deliverable: 'Memoria hidrológica, cálculo hidráulico bidimensional y mapa de zonificación física y biótica de la ronda hídrica.',
    },
    {
      id: 'permiso-vertimientos',
      name: 'Permiso de Vertimientos (Res. 0631 / QUAL2K)',
      baseWeeks: '4 a 6 semanas',
      authority: 'CARs / SDA Bogotá / ANLA',
      software: 'QUAL2K + Laboratorio Acreditado IDEAM',
      deliverable: 'Caracterización físico-química, modelación de capacidad de asimilación y dilución, y manual de operación de PTAR.',
    },
    {
      id: 'concesion-aguas',
      name: 'Concesión de Aguas (Superficial o Subterránea)',
      baseWeeks: '3 a 5 semanas',
      authority: 'CARs Regionales',
      software: 'Balance Hídrico + Ensayos de Bombeo',
      deliverable: 'Cálculo de oferta hídrica, curvas de duración de caudales, prueba de bombeo o aforos directos y formulación PUEAA.',
    },
    {
      id: 'modelacion-hidraulica-puente',
      name: 'Estudio Hidráulico e Hidrológico para Puentes/Vías',
      baseWeeks: '2 a 4 semanas',
      authority: 'INVÍAS / ANI / Alcaldías',
      software: 'HEC-HMS + HEC-RAS 1D/2D + Civil 3D',
      deliverable: 'Curvas IDF, crecientes para Tr=100 años, cálculo de socavación general y local de pilas y gálibo hidráulico.',
    },
    {
      id: 'eia-pma',
      name: 'Estudio de Impacto Ambiental (EIA) / PMA',
      baseWeeks: '8 a 12 semanas',
      authority: 'ANLA / Corporaciones Regionales',
      software: 'GeoDataBase MinAmbiente + GIS Multi-criterio',
      deliverable: 'Línea base abiótica, biótica y socioeconómica, evaluación de impactos y fichas del Plan de Manejo Ambiental.',
    },
    {
      id: 'riego-drenaje-agro',
      name: 'Diseño de Sistema de Riego y Drenaje Agrícola',
      baseWeeks: '4 a 6 semanas',
      authority: 'ADR / Propietario Privado',
      software: 'CROPWAT + EPANET + AutoCAD Civil 3D',
      deliverable: 'Cálculo de evapotranspiración de cultivos, dimensionamiento de canales, tuberías y red de drenaje para control de salinidad.',
    },
  ];

  const regions = [
    { id: 'bogota-cundinamarca', name: 'Bogotá D.C. & Cundinamarca (SDA / CAR)' },
    { id: 'antioquia', name: 'Antioquia (Corantioquia / Cornare / Corpourabá)' },
    { id: 'valle-cauca', name: 'Valle del Cauca (CVC / Dagma)' },
    { id: 'santanderes', name: 'Santander / Norte de Santander (CDMB / CAS / Corponor)' },
    { id: 'caribe', name: 'Región Caribe (CRA, Cardique, Corpamag, CVS, Corpoguajira)' },
    { id: 'llanos-orinoquia', name: 'Llanos Orientales / Orinoquía (Cormacarena / Corporinoquia)' },
    { id: 'otra-region', name: 'Otro Departamento / Jurisdicción Nacional' },
  ];

  const currentProject = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const currentRegion = regions.find((r) => r.id === region) || regions[0];

  const handleSendToWhatsApp = () => {
    const text = `Hola WRE Consultoría SAS,%0A%0AHe realizado un diagnóstico en su cotizador web:%0A- *Estudio Requerido:* ${currentProject.name}%0A- *Jurisdicción:* ${currentRegion.name}%0A- *Complejidad:* ${complexity}%0A- *Plazo Estimado:* ${currentProject.baseWeeks}%0A- *Detalles Adicionales:* ${customNotes || 'Sin notas adicionales'}.%0A%0A¿Podrían brindarme una cotización formal y asesoría técnica?`;
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  const handleSendToForm = () => {
    onTransferToContact({
      service: currentProject.name,
      region: currentRegion.name,
      scope: complexity,
      estimatedWeeks: currentProject.baseWeeks,
      details: customNotes,
    });
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cotizador" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Herramienta Interactiva</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Diagnóstico Preliminar</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Cotizador & Diagnóstico de Requerimientos Técnicos
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Seleccione el tipo de proyecto hídrico o ambiental y la región de Colombia para conocer las metodologías aplicables, autoridad evaluadora y plazo estimado de ejecución.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                1. Seleccione el Tipo de Estudio o Instrumento
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-750 text-white text-sm focus:border-sky-500 focus:outline-none transition-colors"
              >
                {projectTypes.map((pt) => (
                  <option key={pt.id} value={pt.id}>
                    {pt.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Region */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                2. Departamento / Autoridad Ambiental
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-750 text-white text-sm focus:border-sky-500 focus:outline-none transition-colors"
              >
                {regions.map((reg) => (
                  <option key={reg.id} value={reg.id}>
                    {reg.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Complexity */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                3. Nivel de Complejidad / Escala
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'baja', label: 'Puntual / Local' },
                  { id: 'media', label: 'Intermedio / Cuenca Mediana' },
                  { id: 'alta', label: 'Gran Escala / Complejo' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setComplexity(item.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                      complexity === item.id
                        ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Notes */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                4. Detalles o Municipio Específico (Opcional)
              </label>
              <textarea
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Ejemplo: Quebrada La Honda en Fusagasugá, se requiere estudio para trámite de ocupación de cauce y delimitación de ronda..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-750 text-white text-sm focus:border-sky-500 focus:outline-none transition-colors h-24 resize-none"
              />
            </div>
          </div>

          {/* Results Diagnostic Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-sky-500/30 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-mono font-semibold uppercase text-sky-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Diagnóstico Preliminar</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">
                WRE Consultoría SAS
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                {currentProject.name}
              </h3>
              <p className="text-xs text-slate-400">
                Región objetivo: <span className="text-slate-200">{currentRegion.name}</span>
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Entregable Técnico Principal:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentProject.deliverable}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] uppercase text-slate-500 block mb-0.5">Software Base</span>
                  <span className="font-mono text-sky-300 font-medium text-[11px] block">
                    {currentProject.software}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] uppercase text-slate-500 block mb-0.5">Autoridad Objetivo</span>
                  <span className="text-slate-300 font-medium text-[11px] block">
                    {currentProject.authority}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-lg bg-sky-950/30 border border-sky-900/40 text-xs text-sky-200">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>
                  Tiempo estimado de formulación: <strong className="text-white">{currentProject.baseWeeks}</strong>
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <button
                onClick={handleSendToForm}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-all shadow-md min-h-[46px]"
              >
                <span>Solicitar Propuesta Formal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleSendToWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-emerald-400 hover:text-white bg-emerald-950/40 hover:bg-emerald-600 border border-emerald-500/40 rounded-xl transition-all min-h-[46px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consultar vía WhatsApp (+57 316 438 7493)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
