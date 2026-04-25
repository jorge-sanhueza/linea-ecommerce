"use client";

import { ArrowRight, MoveRight } from "lucide-react";

export default function CTASection() {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-24 md:py-32">
      <div className="relative overflow-hidden bg-stone-900 py-20 px-8 md:px-20 text-center md:text-left">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/30 skew-x-[-20deg] translate-x-1/4" />

        <div className="relative z-10">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-600 font-bold mb-6 block">
              Proyectos a Medida
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
              Soluciones para espacios <br />
              <span className="font-serif italic text-sky-400">
                publicos y privados
              </span>
            </h2>

            <p className="text-stone-300 text-lg mt-8 mb-12 max-w-xl leading-relaxed font-normal">
              Ofrecemos asesoría personalizada y asistencia para
              equipamiento. Transformamos su visión en realidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-12 justify-center">
              <button className="px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white border border-stone-700 hover:border-stone-500 transition-colors">
                Contactar
              </button>
              <button className="px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white border border-stone-700 hover:border-stone-500 transition-colors">
                Ver Catálogo
              </button>
            </div>
          </div>
        </div>

        {/* Vertical text accent */}
        <div className="absolute right-8 bottom-8 hidden lg:block">
          <span className="text-[10px] uppercase tracking-[0.5em] text-stone-800 font-bold rotate-90 inline-block transform-gpu origin-right">
            LÍNEA PRO
          </span>
        </div>
      </div>
    </div>
  );
}
