"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

export default function Navbar() {
  const totalItems = useCartStore((state) => state.totalItems);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - cambiado a Línea */}
          <Link
            href="/"
            className="text-2xl font-serif font-semibold text-gray-800 tracking-wide"
          >
            Línea
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Inicio
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-gray-900"
            >
              Productos
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              Nosotros
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contacto
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            <Link
              href="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-gray-700 hover:text-gray-900 py-2">
                Inicio
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-gray-900 py-2"
              >
                Productos
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 py-2"
              >
                Nosotros
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 py-2"
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
