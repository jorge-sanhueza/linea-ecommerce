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
    <main className="relative min-h-screen">
      <Hero />

      <div
        ref={gridRef}
        className="container mx-auto px-6 lg:px-12 py-24 md:py-32 scroll-mt-24"
      >
        {/* Section header - Editorial Style */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-10 border-b border-stone-100 pb-12 animate-fade-in-up">
          <div className="max-w-xl">
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

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />

            <div className="relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-stone-50 border border-stone-200 text-stone-600 text-[10px] uppercase tracking-widest px-6 py-3 pr-10 rounded-sm focus:outline-none focus:border-stone-900 transition-all cursor-pointer"
              >
                <option value="default">Ordenar por</option>
                <option value="price-asc">Menor precio</option>
                <option value="price-desc">Mayor precio</option>
                <option value="name-asc">Nombre A-Z</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid con altura consistente */}
        <div className="relative min-h-[400px]">
          {/* Grid - always rendered, hidden when empty */}
          <div
            className={`transition-all duration-700 ease-in-out ${sortedProducts.length > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
          >
            <ProductGrid products={sortedProducts} />
          </div>

          {/* Empty state - overlaid on top */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-500 ${sortedProducts.length > 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <div className="p-12 max-w-sm">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-stone-50 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-stone-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p className="text-stone-600 text-lg font-light mb-2">
                Sin resultados
              </p>
              <p className="text-stone-400 text-sm font-light">
                No hemos encontrado productos que coincidan con su selección
                actual.
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
