import React from 'react';
import { X, CheckCircle, Cpu, FileText, ArrowRight, Shield } from 'lucide-react';
import { ServiceItem, COMPANY_INFO } from '../data/content';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForQuote
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-750 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
          aria-label="Cerrar ventana de detalle"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
          <span>{service.badge}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>WRE Consultoría SAS</span>
        </div>

        <h3 id="service-modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {service.title}
        </h3>
        <p className="text-sm font-medium text-sky-300 mb-6">
          {service.tagline}
        </p>

        {/* Full Description */}
        <div className="mb-6 pb-6 border-b border-slate-800">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Descripción Técnica del Alcance
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {service.fullDesc}
          </p>
        </div>

        {/* Deliverables List */}
        <div className="mb-6 pb-6 border-b border-slate-800">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-sky-400" />
            <span>Productos & Memorias Técnicas Entregables</span>
          </h4>
          <ul className="space-y-2">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Software & Normative Framework */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <h5 className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>Software & Modelación</span>
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {service.software.map((sw, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/80 text-sky-300 border border-slate-700/60"
                >
                  {sw}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <h5 className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Marco Normativo Aplicable</span>
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {service.regulations.map((reg, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/80 text-emerald-300 border border-slate-700/60"
                >
                  {reg}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
              `Hola WRE Consultoría, requiero información técnica sobre: ${service.title}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-emerald-400 text-center sm:text-left py-2"
          >
            ¿Prefiere consultar por WhatsApp? Clic aquí
          </a>

          <button
            onClick={() => {
              onSelectForQuote(service.title);
              onClose();
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm transition-colors whitespace-nowrap min-h-[44px]"
          >
            <span>Cotizar este Estudio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
