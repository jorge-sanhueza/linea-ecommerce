import Image from "next/image";
import Link from "next/link";

export default function FeaturedCollection() {
  return (
    <div className="container my-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-125 order-2 md:order-1">
          <Image
            src="/featured-set.jpg" // Tu imagen
            alt="Colección terraza"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6 text-center md:text-left order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Colección Terraza
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Diseñados para resistir el exterior sin perder la elegancia.
            Materiales de primera calidad para tus momentos al aire libre.
          </p>
          <Link href="/coleccion/terraza" className="btn-outline inline-block">
            Explorar Colección
          </Link>
        </div>
      </div>
    </div>
  );
}
