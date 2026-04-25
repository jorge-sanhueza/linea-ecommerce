"use client";

import Image from "next/image";
import { MoveRight, MapPin, Phone } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[1000px] h-[1000px] bg-stone-100/50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Columna de texto */}
          <div className="lg:col-span-6 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium bg-stone-100/80 backdrop-blur-sm px-4 py-2 rounded-sm border border-stone-200/50">
                <MapPin className="w-3 h-3" />
                <span>Santiago, Chile</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium">
                <Phone className="w-3 h-3" />
                <span>+56 2 1234 5678</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-normal tracking-tight text-stone-700 leading-[1.1] mb-8">
              Catalogo de
              <br />
              <span className="font-serif italic text-sky-400">soluciones</span>
            </h1>

            <div className="animate-fade-in-up-delay">
              <p className="text-stone-600 text-lg md:text-xl mt-6 mb-12 leading-relaxed max-w-lg font-normal">
                Revise nuestro catalogo y descrubra soluciones para sus espacios
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in-up-delay">
              <button className="btn-primary group px-10">
                Explorar Catálogo
                <MoveRight className="ml-4 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-secondary">Nosotros</button>
            </div>
          </div>

          {/* Columna de imagen - Composición Editorial */}
          <div className="lg:col-span-6 relative h-150 w-full animate-fade-in-up-delay">
            {/* 1. The Main Architectural Image */}
            <div className="absolute top-0 right-0 w-[65%] h-[60%] overflow-hidden bg-gray-100 rounded-2xl shadow-sm">
              <Image
                src="/decoracion.jpg"
                alt="Ambiente de sillas"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                priority
              />
            </div>

            {/* 2. The Detail/Focus Image */}
            <div className="absolute bottom-10 left-0 w-[55%] h-[50%] overflow-hidden bg-white rounded-2xl shadow-xl border-4 border-white z-10">
              <Image
                src="/sillas.jpg"
                alt="Sillas profesionales"
                fill
                className="object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
              />
            </div>

            <div className="absolute bottom-0 right-12 w-[30%] h-[40%] overflow-hidden bg-white rounded-2xl shadow-2xl border-4 border-white z-20 translate-y-4">
              <Image
                src="/silla.jpg"
                alt="Detalle de material"
                fill
                className="object-cover hover:scale-125 transition-transform duration-[3s] ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
