import Navbar from "@/components/Navbar"
import "./globals.css"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/About"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {" "}
        {/* Ajout de pt-16 pour compenser la hauteur de la navbar */}
        <HeroSection />
        <AboutSection />
        <div id="detection-form" className="min-h-screen w-full flex items-center justify-center bg-white">
          <div className="container px-4 md:px-6 py-12 md:py-24 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Détection de faux profils</h2>
            <p className="text-gray-500 md:text-xl max-w-[700px] mx-auto mb-8">
              Prêt à analyser un profil Twitter ? Utilisez notre outil de détection avancé.
            </p>
            <Link href="/detection">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Accéder à l'outil de détection
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
