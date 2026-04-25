import { MapPin, Phone, Mail, CreditCard } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 mt-32">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* About */}
          <div className="space-y-6">
            <h3 className="text-white text-sm uppercase tracking-[0.3em] font-bold">
              Línea
            </h3>
            <p className="text-sm leading-relaxed font-light">
              Soluciones mobiliarias profesionales y a la medida.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-white text-sm uppercase tracking-[0.3em] font-bold">
              Contacto
            </h3>
            <div className="space-y-4 text-xs tracking-wider font-medium">
              <p className="flex items-center gap-3">
                <MapPin className="w-3.5 h-3.5 text-stone-500" /> Santiago,
                Chile
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-stone-500" /> +56 2 1234 5678
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-stone-500" />{" "}
                contacto@linea.cl
              </p>
            </div>
          </div>

          {/* Products hint */}
          <div className="space-y-6">
            <h3 className="text-white text-sm uppercase tracking-[0.3em] font-bold">
              Servicios
            </h3>
            <div className="space-y-4 text-xs tracking-wider font-medium">
              <p className="hover:text-white transition-colors cursor-pointer">
                Adquisición
              </p>
              <p className="hover:text-white transition-colors cursor-pointer">
                Instalación
              </p>
              <p className="hover:text-white transition-colors cursor-pointer">
                Proyectos a Medida
              </p>
            </div>
          </div>

          {/* Newsletter teaser */}
          <div className="space-y-6">
            <h3 className="text-white text-sm uppercase tracking-[0.3em] font-bold">
              Ecosistema
            </h3>
            <div className="space-y-4 text-xs tracking-wider font-medium">
              <p className="flex items-center gap-3">
                <CreditCard className="w-3.5 h-3.5 text-stone-500" /> Pagos
                Flexibles
              </p>
              <p>Facturación Electrónica</p>
              <p>Logística Nacional</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-medium">
          <p>
            © {new Date().getFullYear()} LÍNEA MOBILIARIO. TODOS LOS DERECHOS
            RESERVADOS.
          </p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-white transition-colors">
              Privacidad
            </span>
            <span className="cursor-pointer hover:text-white transition-colors">
              Términos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
