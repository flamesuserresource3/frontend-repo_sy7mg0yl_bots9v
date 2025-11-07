import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full bg-[#f8f5ec] text-[#1c1b1a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.08em] uppercase leading-tight">
            Dr. Rodrigo Soria García
          </h1>
          <p className="mt-4 text-base sm:text-lg tracking-wide text-neutral-700">
            Cardiología y Ecocardiografía — atención con precisión clínica y calidez humana.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold uppercase tracking-wide rounded border border-[#b89a5a] text-[#1c1b1a] hover:bg-[#efe9d8]"
            >
              Agendar cita
            </a>
            <a
              href="#especialidad"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium uppercase tracking-wide text-neutral-700 hover:opacity-80"
            >
              Conocer más
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 h-[360px] sm:h-[420px] md:h-[520px] rounded-md overflow-hidden border border-neutral-300/50 bg-white">
          <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
