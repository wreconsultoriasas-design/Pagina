import React, { useState } from 'react';
import { BIBLIOGRAPHIC_RESOURCES, BibliographicResource } from '../data/content';
import { BookOpen, ExternalLink, GraduationCap, ChevronRight } from 'lucide-react';

interface ResourcesSectionProps {
  onSelectResource: (resource: BibliographicResource) => void;
  onInquire: (title: string) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  onSelectResource,
  onInquire
}) => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="recursos" className="py-20 bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Fundamentos Científicos</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Rigor Académico</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Recursos Bibliográficos y Modelación Especializada
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            No improvisamos. Nuestros modelos, memorias de cálculo y diseños hidráulicos se sustentan en los textos clásicos de ingeniería hidrológica y manuales de modelación numérica más respetados a nivel mundial.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BIBLIOGRAPHIC_RESOURCES.map((book) => {
            const hasError = imgErrors[book.id];
            return (
              <div
                key={book.id}
                className="flex flex-col bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/40 transition-all group"
              >
                {/* Book Cover Frame */}
                <div className="relative aspect-[3/2] bg-slate-850 p-4 flex items-center justify-center overflow-hidden border-b border-slate-800">
                  {!hasError ? (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="max-h-full max-w-full object-contain rounded shadow-lg group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(book.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900 text-center">
                      <BookOpen className="w-8 h-8 text-sky-400 mb-2" />
                      <span className="text-xs font-medium text-slate-300 line-clamp-2">{book.title}</span>
                      <span className="text-[11px] text-slate-500 mt-1">{book.author}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                    {book.author}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors mb-3 line-clamp-2">
                    {book.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 flex-1 line-clamp-4">
                    {book.coreApplication}
                  </p>

                  {/* Key Topics Tags */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {book.keyTopics.slice(0, 2).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] rounded bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-850 flex items-center justify-between mt-auto">
                    <button
                      onClick={() => onSelectResource(book)}
                      className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 min-h-[36px]"
                    >
                      <span>Ver Ficha Metodológica</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onInquire(book.title)}
                      className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-slate-800 min-h-[36px] flex items-center"
                    >
                      Consultar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
