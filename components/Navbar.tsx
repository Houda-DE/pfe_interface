"use client"

import { useState } from "react"
import { Menu, X, Shield, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-bold">TwitterDetector</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            À propos
          </button>
          <button
            onClick={() => scrollToSection("detection-form")}
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Détection
          </button>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            FAQ
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button onClick={() => scrollToSection("detection-form")} className="bg-blue-600 hover:bg-blue-700" size="sm">
            <Twitter className="mr-2 h-4 w-4" />
            Détecter un profil
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t py-4 px-6 bg-white">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("detection-form")}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Détection
            </button>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              FAQ
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <Button
              onClick={() => scrollToSection("detection-form")}
              className="bg-blue-600 hover:bg-blue-700 w-full mt-2"
              size="sm"
            >
              <Twitter className="mr-2 h-4 w-4" />
              Détecter un profil
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
