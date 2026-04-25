"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

export default function Navbar() {
  const totalItems = useCartStore((state) => state.totalItems);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-blue-100/60">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-serif font-semibold text-gray-800 tracking-wide"
          >
            Línea
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Inicio" },
              { href: "/products", label: "Productos" },
              { href: "/about", label: "Nosotros" },
              { href: "/contact", label: "Contacto" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-gray-500 hover:text-gray-900 tracking-wide transition-colors duration-200 border-b-2 border-transparent hover:border-blue-300 pb-0.5"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-blue-50 rounded-full transition-colors duration-200">
              <Search className="w-4 h-4 text-gray-500" />
            </button>

            <Link
              href="/cart"
              className="relative p-2 hover:bg-blue-50 rounded-full transition-colors duration-200"
            >
              <ShoppingCart className="w-4 h-4 text-gray-500" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-blue-50 rounded-full transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4 text-gray-500" />
              ) : (
                <Menu className="w-4 h-4 text-gray-500" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100/60">
            <div className="flex flex-col gap-1">
              {[
                { href: "/", label: "Inicio" },
                { href: "/products", label: "Productos" },
                { href: "/about", label: "Nosotros" },
                { href: "/contact", label: "Contacto" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-gray-500 hover:text-gray-900 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors duration-200"
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
