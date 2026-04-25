"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { useState } from "react";
import { formatCLP } from "@/app/lib/utils";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
    image: string;
    category: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group relative bg-white border border-stone-100/50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1">
      {/* Enlace a detalle - Contenedor de imagen */}
      <Link
        href={`/products/${product.id}`}
        className="block overflow-hidden bg-stone-50"
      >
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-700" />
          
          {/* Quick add button floating */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 w-10 h-10 bg-white shadow-xl flex items-center justify-center rounded-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-stone-900 hover:text-white"
          >
            {isAdded ? (
              <span className="text-[10px] font-bold">✓</span>
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </button>
        </div>
      </Link>

      {/* Contenido de texto - limpio y elegante */}
      <div className="p-6 text-left">
        <div className="flex justify-between items-start mb-1">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-medium text-stone-900 text-sm tracking-tight group-hover:text-stone-600 transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-stone-900 font-medium text-sm">
            {formatCLP(product.price)}
          </p>
        </div>
        <p className="text-stone-400 text-[10px] uppercase tracking-[0.15em] font-medium">
          {product.category}
        </p>
      </div>
    </div>
  );
}
