import React from 'react';

function HeartMonogram({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M32 54c-1.5 0-3-.5-4.2-1.6L14.7 40.3C9.9 35.9 8 31 8 25.8 8 17.6 14.3 12 21.5 12c4.4 0 8 2 10.5 5.4C34.6 14 38.2 12 42.5 12 49.7 12 56 17.6 56 25.8c0 5.2-1.9 10.1-6.7 14.5L36.2 52.4C35 53.5 33.5 54 32 54Z"
        stroke="#1c1b1a"
        strokeWidth="1.5"
      />
      <path d="M24 26l8 10 8-10" stroke="#1c1b1a" strokeWidth="1.5"/>
    </svg>
  );
}

export default function Header() {
  return (
    <header className="w-full bg-[#f8f5ec] text-[#1c1b1a] border-b border-[#d6c8a8]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <HeartMonogram className="w-8 h-8" />
          <div className="leading-none">
            <span className="block text-sm tracking-[0.14em] font-semibold uppercase">Dr. Rodrigo Soria García</span>
            <span className="block text-[11px] tracking-widest text-neutral-600 uppercase">Cardiología • Ecocardiografía</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wider uppercase">
          <a href="#inicio" className="hover:opacity-80">Inicio</a>
          <a href="#especialidad" className="hover:opacity-80">Especialidad</a>
          <a href="#servicios" className="hover:opacity-80">Servicios</a>
          <a href="#contacto" className="hover:opacity-80">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
