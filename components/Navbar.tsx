"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

export default function Navbar() {
  const totalItems = useCartStore((state) => state.totalItems);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="group flex flex-col">
            <span className="text-xl font-medium text-stone-900 tracking-[0.4em] uppercase">
              Línea
            </span>
            <span className="text-[8px] uppercase tracking-[0.6em] text-stone-400 font-bold -mt-1 group-hover:text-sky-400 transition-colors">
              Soluciones
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {[
              { href: "/", label: "Inicio" },
              { href: "/products", label: "Catalogo" },
              { href: "/contact", label: "Contacto" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="group relative text-[10px] uppercase tracking-[0.25em] text-stone-600 hover:text-stone-900 font-bold transition-all duration-300"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-sky-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="p-2 text-stone-500 hover:text-stone-900 transition-colors duration-300">
              <Search className="w-4 h-4" />
            </button>

            <Link
              href="/cart"
              className="relative p-2 text-stone-500 hover:text-stone-900 transition-colors duration-300"
            >
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-stone-900 text-white text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-stone-500 hover:text-stone-900 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-8 border-t border-stone-100 animate-fade-in-up">
            <div className="flex flex-col gap-6 items-center">
              {[
                { href: "/", label: "Inicio" },
                { href: "/products", label: "Colecciones" },
                { href: "/about", label: "Estudio" },
                { href: "/contact", label: "Contacto" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[10px] uppercase tracking-[0.25em] text-stone-600 hover:text-sky-400 font-bold transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
