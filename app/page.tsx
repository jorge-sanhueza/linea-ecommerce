"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";
import Newsletter from "@/components/Newsletter";
import productsData from "@/data/products.json";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [sortBy, setSortBy] = useState("default");

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
    return 0; // default - by id
  });

  return (
    <main>
      <Hero />

      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Section header */}
        <div className="text-center md:text-left md:flex md:justify-between md:items-end mb-12 gap-8">
          <div className="animate-fade-in-up">
            <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-medium">
              Catálogo
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-800 mt-2">
              Nuestros productos
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-md">
              Selección de equipamiento profesional para tu negocio
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-0 animate-fade-in-up-delay">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
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

        {/* Product Grid */}
        {sortedProducts.length > 0 ? (
          <ProductGrid products={sortedProducts} />
        ) : (
          <div className="text-center py-20 bg-white/40 backdrop-blur-sm rounded-2xl border border-blue-100">
            <p className="text-gray-400">No hay productos en esta categoría</p>
          </div>
        )}
      </div>

      <Newsletter />
    </main>
  );
}
