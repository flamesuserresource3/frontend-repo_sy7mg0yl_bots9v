import React from 'react';

export function AboutSection() {
  return (
    <section id="especialidad" className="bg-[#f8f5ec] text-[#1c1b1a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 border-t border-[#d6c8a8]">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.12em] uppercase">Formación y trayectoria</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Egresa­do de la Universidad Nacional Autónoma de México (UNAM) y formado en el Instituto Nacional de Cardiología Ignacio Chávez. Certificado por el Consejo Mexicano de Cardiología. Experiencia en diagnóstico cardiovascular integral y ecocardiografía con enfoque en prevención y cuidado longitudinal del paciente.
        </p>
        <div className="mt-6 grid sm:grid-cols-3 gap-6 text-sm">
          <div className="p-4 border border-neutral-300/60 rounded">
            <p className="uppercase tracking-widest text-neutral-600">Universidad</p>
            <p className="mt-1 font-medium">UNAM — Facultad de Medicina</p>
          </div>
          <div className="p-4 border border-neutral-300/60 rounded">
            <p className="uppercase tracking-widest text-neutral-600">Institución</p>
            <p className="mt-1 font-medium">Instituto Nacional de Cardiología I. Chávez</p>
          </div>
          <div className="p-4 border border-neutral-300/60 rounded">
            <p className="uppercase tracking-widest text-neutral-600">Cédulas</p>
            <p className="mt-1 font-medium">Profesional y especialidad — vigentes</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: 'Consulta de Cardiología',
      desc: 'Valoración clínica integral, control de factores de riesgo y tratamiento personalizado.'
    },
    {
      title: 'Ecocardiografía',
      desc: 'Ecocardiograma transtorácico para evaluación estructural y funcional del corazón.'
    },
    {
      title: 'Evaluación de salud cardiovascular',
      desc: 'Chequeos preventivos, pruebas complementarias y planes de seguimiento.'
    }
  ];
  return (
    <section id="servicios" className="bg-[#f8f5ec] text-[#1c1b1a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 border-t border-[#d6c8a8]">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.12em] uppercase">Servicios</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-5 border border-neutral-300/60 rounded bg-white/60">
              <h3 className="font-semibold tracking-wide uppercase text-sm">{s.title}</h3>
              <p className="mt-2 text-neutral-700 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contacto" className="bg-[#f8f5ec] text-[#1c1b1a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 border-t border-[#d6c8a8]">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.12em] uppercase">Contacto</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-5 border border-neutral-300/60 rounded bg-white/60">
            <p className="uppercase tracking-widest text-neutral-600 text-xs">Dirección</p>
            <p className="mt-1 font-medium">Hospital Mac Periférico Sur, Consultorio 701</p>
          </div>
          <div className="p-5 border border-neutral-300/60 rounded bg-white/60">
            <p className="uppercase tracking-widest text-neutral-600 text-xs">Teléfono</p>
            <a href="tel:5533323087" className="mt-1 block font-medium hover:opacity-80">5533323087</a>
          </div>
          <div className="p-5 border border-neutral-300/60 rounded bg-white/60">
            <p className="uppercase tracking-widest text-neutral-600 text-xs">Correo</p>
            <a href="mailto:contacto@rodrigosoria.com" className="mt-1 block font-medium hover:opacity-80">contacto@rodrigosoria.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
