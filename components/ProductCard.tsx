"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
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

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 overflow-hidden transition-all duration-500 hover:shadow-lg hover:bg-white/60">
      {/* Enlace a detalle - Contenedor de imagen */}
      <Link
        href={`/productos/${product.id}`}
        className="block overflow-hidden bg-gray-50"
      >
        <div className="relative aspect-square w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </Link>

      {/* Contenido de texto - limpio y elegante */}
      <div className="p-5 text-center space-y-2">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-400 text-xs uppercase tracking-wide">
          {product.category}
        </p>
        <p className="text-xl font-light text-gray-900">
          {formatCLP(product.price)}
        </p>

        {/* Botón de agregar - estilo consistente con Hero */}
        <button
          onClick={handleAddToCart}
          className="mt-3 w-full py-2 border border-gray-200 text-gray-600 text-xs uppercase tracking-[0.15em] bg-white/50 hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          {isAdded ? "Agregado" : "Agregar al carro"}
        </button>
      </div>
    </div>
  );
}
