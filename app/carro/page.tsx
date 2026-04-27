"use client";

import { useCartStore } from "@/store/cartStore";
import { formatCLP } from "@/app/lib/utils";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <main className="relative bg-linear-to-br from-white via-blue-50/30 to-[#f0f9ff] min-h-screen pt-12">
        <div className="container mx-auto px-6 lg:px-12 py-24 text-center">
          <div className="max-w-md mx-auto bg-white/40 backdrop-blur-sm p-12 rounded-3xl border border-white/50 shadow-sm animate-fade-in">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-blue-300" />
            </div>
            <h1 className="text-3xl font-light text-gray-800 mb-4">Tu carro está vacío</h1>
            <p className="text-gray-500 font-light mb-8">
              Parece que aún no has añadido ningún producto a tu carrito de compras.
            </p>
            <Link
              href="/productos"
              className="inline-block px-8 py-4 bg-gray-900 text-white rounded-xl font-medium tracking-widest text-xs uppercase hover:bg-blue-600 transition-all duration-300"
            >
              Explorar productos
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative bg-linear-to-br from-white via-blue-50/30 to-[#f0f9ff] min-h-screen pt-12">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Page Header */}
        <div className="mb-16 text-center lg:text-left">
          <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold">
            Tu Selección
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-800 mt-4">
            Carro de Compras
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4 animate-fade-in">
            {items.map((item) => (
              <div
                key={item.id}
                className="group bg-white/60 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white flex flex-col md:flex-row items-center gap-6 transition-all duration-300 hover:shadow-md"
              >
                {/* Product Image */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                  <p className="text-blue-500 font-light mt-1">
                    {formatCLP(item.price)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4 bg-white/50 rounded-xl border border-gray-100 p-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium text-gray-700">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Total per Item & Remove */}
                <div className="flex items-center gap-6 min-w-[120px] justify-end">
                  <p className="text-lg font-medium text-gray-900">
                    {formatCLP(item.price * item.quantity)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-300 hover:text-red-400 transition-colors p-2"
                    aria-label="Eliminar producto"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-xl shadow-blue-500/5 sticky top-32 animate-fade-in-up">
            <h2 className="text-xl font-light text-gray-800 mb-8">Resumen del pedido</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-500 font-light">
                <span>Subtotal</span>
                <span>{formatCLP(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-gray-500 font-light">
                <span>Envío</span>
                <span className="text-xs uppercase tracking-wider text-blue-400 font-bold">Por calcular</span>
              </div>
              <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                <span className="text-gray-800 font-medium">Total estimado</span>
                <span className="text-2xl font-light text-gray-900">
                  {formatCLP(totalPrice)}
                </span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full py-4 bg-gray-900 text-white rounded-xl font-medium tracking-widest text-xs uppercase hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              Finalizar Compra
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="mt-6 text-center">
              <Link
                href="/productos"
                className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-gray-600 transition-colors font-bold"
              >
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
