import { MapPin, Phone, Mail, CreditCard } from "lucide-react";
import Link from "next/link";

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

          {/* Quick Links */}
          <div>
            <h3 className="footer-title mb-4 text-white">Enlaces</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Inicio
              </Link>
              <Link
                href="/productos"
                className="hover:text-blue-400 transition-colors"
              >
                Productos
              </Link>
              <Link
                href="/contacto"
                className="hover:text-blue-400 transition-colors"
              >
                Contacto
              </Link>
              <Link
                href="/carro"
                className="hover:text-blue-400 transition-colors"
              >
                Mi Carro
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-title mb-4 text-white">Contacto</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400" /> Santiago, Chile
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" /> +56 9 1234 5678
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />{" "}
                contacto@lineasoluciones.cl
              </p>
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
