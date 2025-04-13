import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-blue-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 leading-tight">
              Transforma videos de YouTube en segundos
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Convierte cualquier video de YouTube en archivos descargables de audio o video con un simple clic.
              <span className="font-semibold block mt-2">Tu formato, tus reglas.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 shadow-lg">
                <Link href="/convert">
                  Convertir ahora <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-300 hover:bg-blue-50">
                <Link href="#features">Ver características</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 transform hover:scale-105 transition-transform duration-300">
              <Image src="/images/logo.png" alt="MediaDropper Logo" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
