"use client"

import { useState } from "react"
import { Menu, X, Shield, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

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

  const isHomePage = pathname === "/"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-blue-600" />
          <Link href="/" className="text-lg font-bold">
            SocialDetector
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {isHomePage ? (
            <>
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
                onClick={() => scrollToSection("detection-tools")}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Outils
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </>
          ) : (
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Accueil
            </Link>
          )}
          <Link
            href="/detection/twitter"
            className={`text-sm font-medium ${pathname === "/detection/twitter" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"} transition-colors`}
          >
            Twitter
          </Link>
          <Link
            href="/detection/facebook"
            className={`text-sm font-medium ${pathname === "/detection/facebook" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"} transition-colors`}
          >
            Facebook
          </Link>
          <Link
            href="/detection/instagram"
            className={`text-sm font-medium ${pathname === "/detection/instagram" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"} transition-colors`}
          >
            Instagram
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex space-x-2">
          {isHomePage ? (
            <Button onClick={() => scrollToSection("contact")} className="bg-blue-600 hover:bg-blue-700" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              Nous contacter
            </Button>
          ) : (
            <Link href="/#contact">
              <Button className="bg-blue-600 hover:bg-blue-700" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Nous contacter
              </Button>
            </Link>
          )}
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
            {isHomePage ? (
              <>
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
                  onClick={() => scrollToSection("detection-tools")}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Outils
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
              </>
            ) : (
              <Link
                href="/"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
            )}
            <Link
              href="/detection/twitter"
              className={`text-sm font-medium ${pathname === "/detection/twitter" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"} transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Twitter
            </Link>
            <Link
              href="/detection/facebook"
              className={`text-sm font-medium ${pathname === "/detection/facebook" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"} transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Facebook
            </Link>
            <Link
              href="/detection/instagram"
              className={`text-sm font-medium ${pathname === "/detection/instagram" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"} transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Instagram
            </Link>
            <div className="pt-2">
              {isHomePage ? (
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 w-full"
                  size="sm"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Nous contacter
                </Button>
              ) : (
                <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Nous contacter
                  </Button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
