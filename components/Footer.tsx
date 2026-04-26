import { MapPin, Phone, Mail, CreditCard } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="footer-title mb-4 text-white">Línea</h3>

            <p className="text-sm">
              Soluciones y equipamiento para tus espacios.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-title mb-4 text-white">Contacto</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Santiago, Chile
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +56 2 1234 5678
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> hola@linea.cl
              </p>
            </div>
          </div>

          {/* Products hint */}
          <div>
            <h3 className="footer-title mb-4 text-white">Productos</h3>
            <div className="space-y-2 text-sm">
              <p>Sillas</p>
              <p>Mesas</p>
              <p>Contenedores de basura</p>
            </div>
          </div>

          {/* Newsletter teaser */}
          <div>
            <h3 className="footer-title mb-4 text-white">Próximamente</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" /> Webpay Plus
              </p>
              <p>Facturación SII</p>
              <p>Presupuestos para negocios</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="mt-1">© {new Date().getFullYear()} Nombre comercial.</p>
        </div>
      </div>
    </footer>
  );
}
