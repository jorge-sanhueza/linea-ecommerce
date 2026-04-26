"use client";

import Image from "next/image";
import { TrendingUp, Truck, MapPin, Phone, Globe } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative z-10">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Columna de texto */}
          <div className="animate-fade-in-up space-y-8">
            {/* === BLOQUE 1: Contacto Destacado (más visible) === */}
            <div className="space-y-4">
              {/* Título del bloque de contacto */}
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-linear-to-r from-transparent to-blue-200" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-medium">
                  Contacto directo
                </span>
                <div className="h-px flex-1 bg-linear-to-l from-transparent to-blue-200" />
              </div>

              {/* Badges de contacto (más prominentes) */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-md border border-blue-100 shadow-sm hover:shadow-md transition">
                  <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 tracking-wider">
                      Ubicación
                    </p>
                    <p className="text-sm font-medium text-gray-800">
                      Av. Providencia 1234, Of. 56
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-md border border-blue-100 shadow-sm hover:shadow-md transition">
                  <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 tracking-wider">
                      Contacto
                    </p>
                    <p className="text-sm font-medium text-gray-800">
                      +56 2 1234 5678
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* === TÍTULO === */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-800 leading-[1.15]">
                Soluciones{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-serif font-medium italic text-blue-400">
                    prácticas
                  </span>
                  <svg
                    className="absolute bottom-1 left-0 w-full h-3 z-0"
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10, 100 5 T 200 5"
                      stroke="#93c5fd"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                <br />
                para tu negocio
              </h1>

              <p className="text-gray-500 text-base mt-4 max-w-md leading-relaxed">
                Revise nuestros productos y encuentre soluciones para sus
                espacios.
              </p>
            </div>

            {/* === BLOQUE 2: Cobertura Destacada === */}
            <div className="bg-linear-to-r from-blue-50/50 to-transparent rounded-md p-4 border-l-4 border-blue-200">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    Cobertura Nacional
                  </h4>
                  <p className="text-sm text-gray-600">
                    Operamos en{" "}
                    <span className="font-medium">Región Metropolitana</span>{" "}
                    con{" "}
                    <span className="italic">
                      envíos a todas las regiones de Chile
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* === BLOQUE 3: Features + CTA === */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  <span>Precios por volumen</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="w-4 h-4 text-blue-400" />
                  <span>Stock directo</span>
                </div>
              </div>

              <button className="btn-primary group gap-8">
                Ver catálogo
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M17 12H7M17 12L13 8M17 12L13 16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Columna de imagen (se mantiene igual) */}
          <div className="relative h-120 md:h-137.5 w-full animate-fade-in-up-delay">
            <div className="absolute top-0 right-0 w-[65%] h-[60%] overflow-hidden bg-gray-100 rounded-2xl shadow-sm">
              <Image
                src="/decoracion.jpg"
                alt="Ambiente de sillas"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                priority
              />
            </div>

            <div className="absolute bottom-8 left-0 w-[55%] h-[48%] overflow-hidden bg-white rounded-2xl shadow-xl border-4 border-white z-10">
              <Image
                src="/sillas.jpg"
                alt="Sillas profesionales"
                fill
                className="object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
              />
            </div>

            <div className="absolute bottom-0 right-8 w-[28%] h-[35%] overflow-hidden bg-white rounded-2xl shadow-2xl border-4 border-white z-20 translate-y-3 hidden lg:block">
              <Image
                src="/silla.jpg"
                alt="Detalle de material"
                fill
                className="object-cover hover:scale-125 transition-transform duration-[3s] ease-out"
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-50 rounded-full -z-10 blur-3xl opacity-40" />
          </div>
        </div>
      </div>
    </div>
  );
}
