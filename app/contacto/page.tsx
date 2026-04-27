"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Mensaje enviado con éxito. Nos pondremos en contacto pronto.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="relative bg-linear-to-br from-white via-blue-50/30 to-[#f0f9ff] min-h-screen pt-12">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold">
            Estamos para ayudarte
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-800 mt-4">
            Contacto
          </h1>
          <div className="w-20 h-[1px] bg-blue-200 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-2xl font-light text-gray-800 mb-6">
                Información de contacto
              </h2>
              <p className="text-gray-500 font-light mb-8 max-w-md leading-relaxed">
                ¿Tiene alguna duda sobre nuestros productos o servicios? No dude
                en contactarnos a través de cualquiera de estos canales.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-400 shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                      Teléfono
                    </p>
                    <p className="text-gray-700">+56 9 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-400 shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                      Email
                    </p>
                    <p className="text-gray-700">contacto@lineasoluciones.cl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-400 shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                      Ubicación
                    </p>
                    <p className="text-gray-700">
                      Av. Principal 1234, Vitacura
                      <br />
                      Santiago, Chile
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Horario de atención
              </h3>
              <p className="text-gray-500 text-sm font-light">
                Lunes a Viernes: 09:00 - 18:30
                <br />
                Sábado: 10:00 - 14:00
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white shadow-xl shadow-blue-500/5 animate-fade-in-up">
            <h2 className="text-2xl font-light text-gray-800 mb-8 text-center">
              Envíenos un mensaje
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-100 rounded-xl focus:outline-none focus:border-blue-300 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-100 rounded-xl focus:outline-none focus:border-blue-300 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/50 border border-gray-100 rounded-xl focus:outline-none focus:border-blue-300 transition-colors"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/50 border border-gray-100 rounded-xl focus:outline-none focus:border-blue-300 transition-colors resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gray-900 text-white rounded-xl font-medium tracking-widest text-xs uppercase hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Enviar Mensaje
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
