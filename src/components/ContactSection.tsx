import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle, AlertCircle, Linkedin, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';

interface ContactSectionProps {
  initialService?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialMessage,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || '',
    message: initialMessage || '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Update formData when props change
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialService, initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Por favor ingrese su nombre completo o razón social.');
      return;
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Por favor ingrese un correo electrónico válido.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 7) {
      setStatus('error');
      setErrorMessage('Por favor ingrese un número de teléfono o celular válido.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleSendWhatsAppDirect = () => {
    const text = `Hola WRE Consultoría SAS,%0A%0A*Solicitud de Cotización Técnica:*%0A- *Nombre:* ${formData.name || 'Cliente'}%0A- *Correo:* ${formData.email || 'No especificado'}%0A- *Teléfono:* ${formData.phone || 'No especificado'}%0A- *Estudio Requerido:* ${formData.service || 'General'}%0A- *Mensaje:* ${formData.message || 'Deseo recibir asesoría técnica para un proyecto en Colombia.'}`;
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <span>Contacto Directo</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Atención Personalizada</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Inicie su Proyecto con WRE Consultoría
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Contáctenos para estructurar la propuesta técnica y económica de sus estudios hidrológicos, hidráulicos o ambientales. Respuesta ágil y confidencialidad garantizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Canales de Atención
              </h3>

              <div className="space-y-4 text-sm">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-400 font-semibold block">Sede Principal</span>
                    <span className="text-white font-medium">{COMPANY_INFO.address}</span>
                    <span className="text-xs text-slate-400 block mt-0.5">Cobertura de proyectos a nivel nacional</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-400 font-semibold block">Correo Electrónico</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-white hover:text-sky-400 font-medium transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp & Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-400 font-semibold block">Línea Directa / WhatsApp</span>
                    <a
                      href={COMPANY_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-emerald-400 font-semibold font-mono text-base transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-xs text-emerald-400 block mt-0.5">Atención inmediata por chat</span>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-400 font-semibold block">Horario de Oficina</span>
                    <span className="text-slate-300">{COMPANY_INFO.schedule}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-850 flex items-center gap-3">
                <a
                  href={COMPANY_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>Perfil en LinkedIn</span>
                </a>

                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/40 text-xs text-emerald-400 border border-emerald-500/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Oficial</span>
                </a>
              </div>
            </div>

            {/* Quick Guarantees Card */}
            <div className="p-5 rounded-2xl bg-slate-950/40 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <p>
                Todos los proyectos se entregan con memorias de cálculo auditables, archivos digitales de modelación (Iber, HEC, MODFLOW) y soporte técnico ante observaciones de las CARs.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-1">
              Formulario de Solicitud de Consultoría
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Complete los campos a continuación y nuestro equipo técnico se comunicará en un plazo máximo de 24 horas hábiles.
            </p>

            {status === 'success' ? (
              <div className="p-8 text-center bg-slate-900/80 border border-emerald-500/40 rounded-xl animate-in fade-in duration-300">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  ¡Mensaje Recibido Correctamente!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                  Gracias por contactar a <strong>WRE Consultoría SAS</strong>. Un especialista técnico revisará sus requerimientos y se comunicará a la brevedad.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg"
                  >
                    Enviar otro mensaje
                  </button>
                  <button
                    onClick={handleSendWhatsAppDirect}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir en WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-3.5 rounded-lg bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Nombre Completo / Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Juan Pérez / Constructora SAS"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-white text-sm focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: +57 310 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-white text-sm focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-white text-sm focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Tipo de Estudio Requerido
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-white text-sm focus:border-sky-500 focus:outline-none transition-colors"
                    >
                      <option value="">Seleccione un servicio...</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Licenciamiento Ambiental Integral (EIA / PMA)">
                        Licenciamiento Ambiental Integral (EIA / PMA)
                      </option>
                      <option value="Otro Requerimiento Especial">Otro Requerimiento Especial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Descripción del Proyecto y Localización *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describa el objetivo del estudio, municipio, cuerpo de agua o autoridad ambiental involucrada (CAR, ANLA, etc.)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-750 text-white text-sm focus:border-sky-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-xl transition-all shadow-md min-h-[46px] disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? 'Enviando...' : 'Enviar Solicitud'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-emerald-400 hover:text-white bg-emerald-950/30 hover:bg-emerald-600/80 border border-emerald-500/30 rounded-xl transition-colors min-h-[46px]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar también por WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
