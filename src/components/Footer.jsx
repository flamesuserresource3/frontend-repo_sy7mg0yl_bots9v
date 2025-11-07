import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#f8f5ec] text-[#1c1b1a] border-t border-[#d6c8a8]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          <div className="text-sm text-neutral-700">
            <p className="tracking-widest uppercase">Consulta privada de Cardiología</p>
            <p className="mt-1">© {new Date().getFullYear()} Dr. Rodrigo Soria García</p>
          </div>
          <div className="flex items-center gap-6 opacity-70">
            {/* Simplified grayscale placeholders inspired by institutional seals */}
            <div className="w-16 h-16 border border-neutral-400 rounded-sm grid place-content-center text-[10px] text-neutral-500">UNAM</div>
            <div className="w-16 h-16 border border-neutral-400 rounded-sm grid place-content-center text-[10px] text-neutral-500">INCICH</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
