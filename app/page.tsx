
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Instagram, ArrowRight, Search, Shield, Users } from "lucide-react"
import "./globals.css"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/About"
import Footer from "@/components/Footer"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <section id="detection-tools" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-4">
                <Search className="h-4 w-4 mr-2" />
                <span>Outils de détection</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Analysez n'importe quel profil</h2>
              <p className="text-gray-600 md:text-lg max-w-[700px] mx-auto">
                Choisissez la plateforme et commencez à détecter les faux profils avec notre technologie basée sur un F1
                Score supérieur à 90%
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Twitter Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                <div className="h-3 bg-[#1DA1F2]"></div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <Twitter className="h-8 w-8 text-[#1DA1F2]" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Twitter</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Analysez un profil Twitter en utilisant 15 caractéristiques clés pour détecter les faux comptes.
                  </p>
                  <div className="flex flex-col space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Shield className="h-4 w-4 text-green-500 mr-2" />
                      <span>F1 Score: 93%</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 text-green-500 mr-2" />
                      <span>5M+ profils analysés</span>
                    </div>
                  </div>
                  <Link href="/detection/twitter" className="block">
                    <Button className="w-full bg-[#1DA1F2] hover:bg-[#1a94df] group-hover:shadow-md transition-all">
                      Détecter un profil Twitter
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Facebook Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                <div className="h-3 bg-[#4267B2]"></div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <Facebook className="h-8 w-8 text-[#4267B2]" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Facebook</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Analysez un profil Facebook en utilisant 13 caractéristiques clés pour détecter les faux comptes.
                  </p>
                  <div className="flex flex-col space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Shield className="h-4 w-4 text-green-500 mr-2" />
                      <span>F1 Score: 91%</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 text-green-500 mr-2" />
                      <span>3M+ profils analysés</span>
                    </div>
                  </div>
                  <Link href="/detection/facebook" className="block">
                    <Button className="w-full bg-[#4267B2] hover:bg-[#3b5998] group-hover:shadow-md transition-all">
                      Détecter un profil Facebook
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                <div className="h-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]"></div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <Instagram className="h-8 w-8 text-[#E1306C]" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Instagram</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Analysez un profil Instagram en utilisant 10 caractéristiques clés pour détecter les faux comptes.
                  </p>
                  <div className="flex flex-col space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Shield className="h-4 w-4 text-green-500 mr-2" />
                      <span>F1 Score: 92%</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 text-green-500 mr-2" />
                      <span>2M+ profils analysés</span>
                    </div>
                  </div>
                  <Link href="/detection/instagram" className="block">
                    <Button className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 group-hover:shadow-md transition-all">
                      Détecter un profil Instagram
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-6">
                Besoin d'analyser plusieurs profils ou d'intégrer notre API à votre plateforme ?
              </p>
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                Contactez-nous pour une solution personnalisée
              </Button>
            </div>
          </div>
        </section>
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
