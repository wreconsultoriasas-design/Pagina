import React from 'react';
import { X, BookCheck, Bookmark, ArrowRight, Building2 } from 'lucide-react';
import { BibliographicResource } from '../data/content';

interface ResourceModalProps {
  resource: BibliographicResource | null;
  onClose: () => void;
  onInquire: (bookTitle: string) => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({
  resource,
  onClose,
  onInquire
}) => {
  if (!resource) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-750 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resource-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
          <span>Fundamento Técnico</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Metodología WRE</span>
        </div>

        <h3 id="resource-modal-title" className="text-xl sm:text-2xl font-bold text-white mb-1">
          {resource.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-2">
          Autor: <span className="text-white font-medium">{resource.author}</span>
        </p>
        {resource.institution && (
          <p className="text-xs text-slate-400 mb-5 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-slate-500" />
            <span>{resource.institution}</span>
          </p>
        )}

        {/* Application at WRE */}
        <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 mb-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-300 mb-1.5 flex items-center gap-1.5">
            <Bookmark className="w-4 h-4 text-sky-400" />
            <span>Aplicación Práctica en Nuestros Proyectos</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {resource.coreApplication}
          </p>
        </div>

        {/* Detailed Scope */}
        <div className="mb-5 pb-5 border-b border-slate-800">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Detalles Técnicos & Alcance
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {resource.fullDetails}
          </p>
        </div>

        {/* Key Topics */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <BookCheck className="w-4 h-4 text-emerald-400" />
            <span>Tópicos & Ecuaciones Clave</span>
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {resource.keyTopics.map((topic, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs rounded bg-slate-800 text-slate-300 border border-slate-700/60"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={() => {
              onInquire(`Metodología basada en ${resource.title} (${resource.author})`);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors min-h-[44px]"
          >
            <span>Consultar sobre este Estándar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
