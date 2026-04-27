"use client";

import { ArrowRight, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-md bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />

        <div className="relative z-10 px-6 md:px-12 py-12 md:py-16 text-center md:text-left">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Columna de texto */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Package className="w-4 h-4 text-blue-300" />
                <span className="text-xs uppercase tracking-wider text-blue-200 font-medium">
                  ¿Necesitas una cotización?
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
                Ventas por volumen y <br />
                <span className="font-serif italic text-blue-300">
                  proyectos especiales
                </span>
              </h2>

              <p className="text-gray-300 text-base mt-4 mb-8 max-w-md leading-relaxed">
                Contáctanos directamente para consultas sobre ventas por
                volumen, proyectos personalizados, o cualquier otra necesidad
                especial. Ofrecemos precios por cantidad y tiempos de entrega.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2 group"
                >
                  Solicitar cotización
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Second Button -> /productos */}
                <Link
                  href="/productos"
                  className="border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition inline-block text-center"
                >
                  Ver productos
                </Link>
              </div>
            </div>

            {/* Columna visual (opcional) */}
            <div className="hidden md:flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-transparent rounded-full blur-2xl" />
                <ShoppingBag className="w-24 h-24 text-white/10 mx-auto mt-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
