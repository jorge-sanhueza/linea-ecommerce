import { CreditCard, Award, Calendar } from "lucide-react";

export function PaymentPlaceholder() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg my-6">
      <div className="flex items-start gap-3">
        <CreditCard className="w-6 h-6 text-yellow-600 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">
            🚧 Próximamente — Sistema de Pago
          </h3>
          <p className="text-sm text-gray-700 mt-1">
            Este sitio está en fase de demostración. El sistema de pago con
            Webpay, tarjetas y facturación SII estará disponible próximamente.
          </p>
          <div className="flex gap-4 mt-3 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <Award className="w-3 h-3" /> Webpay Plus
            </span>
            <span className="flex items-center gap-1">
              <CreditCard className="w-3 h-3" /> Débito / Crédito
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> Facturación SII
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
