"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-zinc-50 py-16 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
          <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-2">
            ¿Quieres novedades de Línea?
          </h2>
          <p className="text-gray-600 mb-6">
            Recibe ofertas exclusivas al instante.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              required
            />
            <button
              type="submit"
              className="bg-zinc-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-zinc-800 transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Suscribirme
            </button>
          </form>

          {subscribed && (
            <div className="mt-4 text-zinc-700 font-medium animate-pulse">
              ¡Gracias por suscribirte! Revisa tu correo.
            </div>
          )}

          <p className="text-xs text-gray-500 mt-4">
            Puedes cancelar tu suscripción cuando quieras.
          </p>
        </div>
      </div>
    </div>
  );
}
