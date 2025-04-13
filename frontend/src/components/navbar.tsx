"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <Image src="/images/logo.png" alt="MediaDropper Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-xl text-blue-700">MediaDropper</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-700 transition-colors">
              Inicio
            </Link>
            <Button asChild variant="default" className="bg-blue-700 hover:bg-blue-800">
              <Link href="/convert">Convertir</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Button
              asChild
              variant="default"
              className="w-full bg-blue-700 hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/convert">Convertir</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
