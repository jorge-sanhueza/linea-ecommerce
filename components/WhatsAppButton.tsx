const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20sus%20productos"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-white/80 backdrop-blur-md hover:bg-white transition-all px-5 py-3 rounded-full border border-green-100 shadow-lg hover:shadow-xl group"
    >
      {/* Logo de WhatsApp */}
      <div className="relative">
        <svg
          className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.27.625 4.398 1.714 6.235L.18 23.82l5.738-1.497C7.639 22.419 9.78 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6c-1.875 0-3.632-.513-5.143-1.4l-.37-.22-3.405.89.905-3.318-.24-.38C3.38 16.212 2.4 14.198 2.4 12c0-5.29 4.31-9.6 9.6-9.6s9.6 4.31 9.6 9.6-4.31 9.6-9.6 9.6z" />
        </svg>

        {/* Indicador de estado "En línea" */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </div>

      <span className="text-xs uppercase tracking-[0.15em] font-medium text-gray-700 font-sans">
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
