"use client";

import { useRef, useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";
import productsData from "@/data/products.json";
import Newsletter from "@/components/Newsletter";

export default function ProductsPage() {
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
  };

  return (
    <main className="relative bg-linear-to-br from-white via-blue-50/30 to-[#f0f9ff] min-h-screen pt-12">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold">
            Catálogo Completo
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-800 mt-4">
            Nuestros Productos
          </h1>
          <div className="w-20 h-[1px] bg-blue-200 mx-auto mt-8"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 bg-white/60 backdrop-blur-sm focus:outline-none focus:border-blue-300 transition w-full md:w-auto"
          >
            <option value="default">Ordenar por</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
            <option value="name-asc">Nombre: A a Z</option>
          </select>
        </div>

        {/* Product Grid */}
        <div ref={gridRef} className="relative min-h-[400px]">
          {sortedProducts.length > 0 ? (
            <div className="animate-fade-in">
              <ProductGrid products={sortedProducts} />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-20 bg-white/40 backdrop-blur-sm rounded-2xl border border-blue-100 animate-fade-in">
              <div className="w-16 h-16 mb-4 rounded-full bg-blue-50 flex items-center justify-center">
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
              <button 
                onClick={() => setSelectedCategory("todos")}
                className="mt-4 text-blue-500 hover:underline text-sm"
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </div>
      </div>
      <Newsletter />
    </main>
  );
}
