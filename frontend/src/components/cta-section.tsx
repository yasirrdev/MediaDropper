import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <div className="w-full py-20 bg-gradient-to-r from-blue-700 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para convertir tus videos favoritos?</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
          Comienza a descargar tus videos de YouTube en el formato que prefieras. Rápido, sencillo y sin complicaciones.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg"
        >
          <Link href="/convert">
            Convertir ahora <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
