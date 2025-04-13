import Link from "next/link"
import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} MediaDropper. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/yasirrdev/MediaDropper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link href="/convert" className="text-gray-600 hover:text-blue-700 transition-colors text-sm">
              Convertir
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
