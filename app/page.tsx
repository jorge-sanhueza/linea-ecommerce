"use client";

import { useRef, useState } from "react";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";
import Newsletter from "@/components/Newsletter";
import productsData from "@/data/products.json";
import CTASection from "@/components/CTASection";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [sortBy, setSortBy] = useState("default");
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter products by category
  const filteredProducts = productsData.products.filter((product) => {
    if (selectedCategory === "todos") return true;
    return product.category === selectedCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <main className="relative bg-linear-to-br from-white via-blue-50/30 to-[#f0f9ff] min-h-screen">
      <Hero />

      <div
        ref={gridRef}
        className="container mx-auto px-6 lg:px-12 py-16 md:py-24 scroll-mt-24"
      >
        {/* Section header */}
        <div className="text-center md:text-left md:flex md:justify-between md:items-end mb-12 gap-8 scroll-mt-16">
          <div className="animate-fade-in-up">
            <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-medium">
              Catálogo
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-800 mt-2">
              Nuestros productos
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-md">
              Selección de equipamiento y existencias disponibles
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-0 animate-fade-in-up-delay">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 bg-white/60 backdrop-blur-sm focus:outline-none focus:border-blue-300 transition"
            >
              <option value="default">Ordenar por</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="name-asc">Nombre: A a Z</option>
            </select>
          </div>
        </div>

        {/* Product Grid con altura consistente */}
        <div className="relative overflow-anchor-none">
          {/* Grid - always rendered, hidden when empty */}
          <div
            className={`transition-opacity duration-300 ${sortedProducts.length > 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ProductGrid products={sortedProducts} />
          </div>

          {/* Empty state - overlaid on top */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center bg-white/40 backdrop-blur-sm rounded-2xl border border-blue-100 transition-opacity duration-300 ${sortedProducts.length > 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <div className="p-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p className="text-gray-400 text-lg font-light">
                No hay productos en esta categoría
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Prueba con otro filtro
              </p>
            </div>
          </div>
        </div>
      </div>

      <CTASection />

      <Newsletter />
    </main>
  );
}
