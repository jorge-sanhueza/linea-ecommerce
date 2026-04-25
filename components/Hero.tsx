"use client";

import Image from "next/image";
import { TrendingUp, Truck } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative z-10">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Columna de texto */}
          <div className="animate-fade-in-up">
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
          <div className="relative animate-fade-in-up-delay">
            {/* Marco decorativo */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-blue-200 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-100/30 rounded-2xl -z-10" />

            <div className="relative w-full h-125 overflow-hidden bg-gray-100 rounded-2xl">
              <Image
                src="/sillas.jpg"
                alt="Sillas profesionales para eventos y espacios"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
                placeholder="blur"
                blurDataURL="data:image/png;base64,..."
                priority
              />
            </div>

            {/* Mini badge flotante */}
            <div className="absolute -bottom-3 -right-3 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-blue-100">
              <p className="text-xs text-gray-500">
                + <span className="font-semibold text-gray-900">200</span>{" "}
                productos en stock
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
