"use client";

import { use } from "react";
import productsData from "@/data/products.json";
import { useCartStore } from "@/store/cartStore";
import { formatCLP } from "@/app/lib/utils";
import { ShoppingCart, ArrowLeft, Check, Shield, Truck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const product = productsData.products.find(
    (p) => p.id === parseInt(resolvedParams.id),
  );
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="relative bg-linear-to-br from-white via-blue-50/30 to-[#f0f9ff] min-h-screen pt-12">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white shadow-xl shadow-blue-500/5 animate-fade-in">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-bold">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-800 mt-4">
                {product.name}
              </h1>
              <p className="text-3xl font-light text-gray-900 mt-6">
                {formatCLP(product.price)}
              </p>
            </div>

            <div className="w-20 h-[1px] bg-blue-200"></div>

            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-gray-400 font-bold">
                Descripción
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span>En stock ({product.stock} unidades)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <span>Despacho a todo Chile</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <span>Garantía de calidad</span>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={handleAddToCart}
                className={`w-full md:w-auto px-12 py-5 rounded-xl font-medium tracking-widest text-xs uppercase transition-all duration-300 flex items-center justify-center gap-3 ${
                  isAdded
                    ? "bg-green-500 text-white"
                    : "bg-gray-900 text-white hover:bg-blue-600"
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                {isAdded ? "Agregado al Carro" : "Añadir al Carro"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
