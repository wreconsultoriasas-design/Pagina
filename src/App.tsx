/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { ServiceModal } from './components/ServiceModal';
import { ResourcesSection } from './components/ResourcesSection';
import { ResourceModal } from './components/ResourceModal';
import { ProjectEstimator } from './components/ProjectEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceItem, BibliographicResource } from './data/content';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedResource, setSelectedResource] = useState<BibliographicResource | null>(null);
  const [contactServicePrefill, setContactServicePrefill] = useState<string>('');
  const [contactMessagePrefill, setContactMessagePrefill] = useState<string>('');

  const handleSelectForQuote = (serviceTitle: string) => {
    setContactServicePrefill(serviceTitle);
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResourceInquire = (title: string) => {
    setContactServicePrefill('Consulta de Metodología');
    setContactMessagePrefill(`Deseo información técnica sobre la aplicación de la metodología: ${title}`);
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTransferFromEstimator = (data: {
    service: string;
    region: string;
    scope: string;
    estimatedWeeks: string;
    details: string;
  }) => {
    setContactServicePrefill(data.service);
    const msg = `Diagnóstico estimado para ${data.service} en ${data.region}. Escala: ${data.scope}. Plazo preliminar: ${data.estimatedWeeks}. ${data.details ? `Notas: ${data.details}` : ''}`;
    setContactMessagePrefill(msg);
  };

  const scrollToServices = () => {
    const el = document.getElementById('servicios');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEstimator = () => {
    const el = document.getElementById('cotizador');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onOpenEstimator={scrollToEstimator} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreServices={scrollToServices}
          onOpenEstimator={scrollToEstimator}
        />

        {/* Quienes Somos, Misión & Visión */}
        <About />

        {/* Specialized Services & Environmental Instruments */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onSelectForQuote={handleSelectForQuote}
        />

        {/* Interactive Estimator / Diagnostic Calculator */}
        <ProjectEstimator onTransferToContact={handleTransferFromEstimator} />

        {/* Bibliographic Resources & Numerical Modeling Standards */}
        <ResourcesSection
          onSelectResource={(res) => setSelectedResource(res)}
          onInquire={handleResourceInquire}
        />

        {/* Direct Contact & Quote Form */}
        <ContactSection
          initialService={contactServicePrefill}
          initialMessage={contactMessagePrefill}
        />
      </main>

      {/* Quiet Corporate Footer */}
      <Footer />

      {/* Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForQuote={handleSelectForQuote}
      />

      <ResourceModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
        onInquire={handleResourceInquire}
      />
    </div>
  );
}
