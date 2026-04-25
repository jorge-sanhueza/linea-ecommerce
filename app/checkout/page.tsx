"use client";

import { useCartStore } from "@/store/cartStore";
import { PaymentPlaceholder } from "@/components/PaymentPlaceholder";
import { formatCLP } from "../lib/utils";

export default function CheckoutPage() {
  const { items, totalPrice } = useCartStore();

  if (items.length === 0) {
    return <div className="text-center py-20">Carrito vacío</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Finalizar Compra</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulario de contacto (mock) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Datos de contacto</h2>
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full border rounded-lg p-3"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border rounded-lg p-3"
          />
          <input
            type="text"
            placeholder="RUT (opcional para factura)"
            className="w-full border rounded-lg p-3"
          />

          {/* Payment placeholder - easy to replace later */}
          <PaymentPlaceholder />

          <button
            disabled
            className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg cursor-not-allowed"
          >
            Procesar Pago (Demo)
          </button>
          <p className="text-xs text-center text-gray-500 mt-2">
            Demo — El pago real estará disponible en la versión final
          </p>
        </div>

        {/* Order summary */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="font-semibold mb-4">Resumen del pedido</h2>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between py-2">
              <span>
                {item.name} x{item.quantity}
              </span>
              <span>{formatCLP(item.price * item.quantity)}</span>
            </div>
          ))}
          <div className="border-t pt-4 font-bold flex justify-between">
            <span>Total</span>
            <span>{formatCLP(totalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
