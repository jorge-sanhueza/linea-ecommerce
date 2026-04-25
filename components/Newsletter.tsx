"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

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
    <div className="bg-stone-100/50 py-32 border-y border-stone-100">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 font-bold mb-6 block">Boletín Exclusivo</span>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-stone-900 mb-6">
            Manténgase conectado con la <br />
            <span className="font-serif italic text-sky-400">vanguardia del diseño</span>
          </h2>
          <p className="text-stone-600 mb-12 font-normal leading-relaxed">
            Suscríbase para recibir actualizaciones sobre nuevas colecciones, visiones de diseño y propuestas exclusivas para proyectos profesionales.
          </p>

          <form
            onSubmit={handleSubmit}
            className="relative max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Su dirección de correo electrónico"
              className="w-full bg-transparent border-b border-stone-300 py-4 px-2 text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-stone-900 transition-all font-light text-sm"
              required
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-900 transition-colors p-2"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {subscribed && (
            <div className="mt-8 text-stone-800 text-[10px] uppercase tracking-widest font-bold animate-fade-in-up">
              Registro completado con éxito.
            </div>
          )}

          <p className="text-[10px] uppercase tracking-[0.15em] text-stone-300 mt-12">
            Respetamos su privacidad. Cancele en cualquier momento.
          </p>
        </div>
      </div>
    </div>
  );
}
