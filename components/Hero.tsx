"use client";

import Image from "next/image";
import { TrendingUp, Truck, MapPin, Phone } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative z-10">
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Columna de texto */}
          <div className="animate-fade-in-up">
            {/* Badge de contacto */}
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-100">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Av. Providencia 1234, Of. 56</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-100">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+56 2 1234 5678</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-700 leading-[1.2]">
              Soluciones <br />
              <span className="relative inline-block">
                <span className="relative z-10 font-serif font-medium italic text-blue-400">
                  prácticas
                </span>
                <svg
                  className="absolute bottom-2 left-0 w-full h-3 z-0"
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
              </span>
              <br />
              para tu negocio
            </h1>

            <div className="animate-fade-in-up-delay">
              <p className="text-gray-500 text-lg mt-6 mb-8 leading-relaxed max-w-md">
                Revise nuestro catálogo y encuentre una solución para sus
                espacios.
              </p>
            </div>

            {/* Mini-features */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span>Precios por volumen</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="w-4 h-4 text-blue-500" />
                <span>Envíos a regiones</span>
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
                  strokeWidth="1.2"
                  d="M17 12H7M17 12L13 8M17 12L13 16"
                />
              </svg>
            </button>
          </div>

          {/* Columna de imagen */}
          <div className="relative h-150 w-full animate-fade-in-up-delay">
            {/* 1. The "Base" Image (Top Right) */}
            <div className="absolute top-0 right-0 w-[65%] h-[60%] overflow-hidden bg-gray-100 rounded-2xl shadow-sm">
              <Image
                src="/decoracion.jpg"
                alt="Ambiente de sillas"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                priority
              />
            </div>

            {/* 2. The "Subject" Image (Bottom Left) */}
            {/* Lowered z-index slightly to let the 3rd image pop */}
            <div className="absolute bottom-10 left-0 w-[55%] h-[50%] overflow-hidden bg-white rounded-2xl shadow-xl border-4 border-white z-10">
              <Image
                src="/sillas.jpg"
                alt="Sillas profesionales"
                fill
                className="object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
              />
            </div>

            {/* 3. The "Detail" Image (Floating Right/Center) */}
            {/* A vertical, smaller accent that creates the 'chic' editorial look */}
            <div className="absolute bottom-0 right-12 w-[30%] h-[40%] overflow-hidden bg-white rounded-2xl shadow-2xl border-4 border-white z-20 translate-y-4">
              <Image
                src="/silla.jpg"
                alt="Detalle de material"
                fill
                className="object-cover hover:scale-125 transition-transform duration-[3s] ease-out"
              />
            </div>

            {/* Subtle decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-50 rounded-full -z-10 blur-3xl opacity-40" />
          </div>
        </div>
      </div>
    </div>
  );
}
