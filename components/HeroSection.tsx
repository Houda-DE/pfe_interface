import { Twitter, Facebook, Instagram, ShieldCheck, BarChart2, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#0a1929] text-white py-24 md:py-32">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-8 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

        {/* Grille décorative */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-2">
              <BarChart2 className="h-4 w-4 mr-2" />
              <span>F1 Score &gt; 90% sur toutes les plateformes</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Détectez les faux profils
              </span>
              <br />
              sur les réseaux sociaux
            </h1>

            <p className="text-lg md:text-xl text-blue-100/80 max-w-xl">
              Notre technologie avancée d'IA analyse avec précision les profils
              <span className="relative inline-block mx-1">
                <Twitter className="h-5 w-5 inline text-[#1DA1F2]" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DA1F2] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1DA1F2]"></span>
                </span>
              </span>
              <span className="relative inline-block mx-1">
                <Facebook className="h-5 w-5 inline text-[#4267B2]" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4267B2] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4267B2]"></span>
                </span>
              </span>
              <span className="relative inline-block mx-1">
                <Instagram className="h-5 w-5 inline text-[#E1306C]" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E1306C] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E1306C]"></span>
                </span>
              </span>
              pour identifier les comptes frauduleux avec une précision inégalée.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/detection">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-0 rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-700/40 transition-all"
                >
                  <Twitter className="mr-2 h-5 w-5" />
                  Détecter un profil Twitter
                </Button>
              </Link>
              <Link href="/facebook-detection">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 rounded-lg shadow-lg shadow-indigo-600/30 hover:shadow-indigo-700/40 transition-all"
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  Détecter un profil Facebook
                </Button>
              </Link>
              <Link href="/instagram-detection">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0 rounded-lg shadow-lg shadow-purple-600/30 hover:shadow-purple-700/40 transition-all"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Détecter un profil Instagram
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-green-400" />
                <span className="text-sm text-blue-100">Sécurisé</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-sm text-blue-100">F1 Score &gt; 90%</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart2 className="h-5 w-5 text-cyan-400" />
                <span className="text-sm text-blue-100">Haute précision</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-[#0c1f38] rounded-2xl p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Performance des modèles</h3>
                <div className="bg-blue-900/50 px-3 py-1 rounded-full text-xs font-medium text-blue-300">F1 Score</div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Twitter className="h-5 w-5 text-[#1DA1F2] mr-2" />
                      <span className="text-sm font-medium text-blue-100">Twitter</span>
                    </div>
                    <span className="text-sm font-bold text-blue-300">93%</span>
                  </div>
                  <div className="w-full bg-blue-900/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                      style={{ width: "93%" }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Facebook className="h-5 w-5 text-[#4267B2] mr-2" />
                      <span className="text-sm font-medium text-blue-100">Facebook</span>
                    </div>
                    <span className="text-sm font-bold text-blue-300">91%</span>
                  </div>
                  <div className="w-full bg-blue-900/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                      style={{ width: "91%" }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Instagram className="h-5 w-5 text-[#E1306C] mr-2" />
                      <span className="text-sm font-medium text-blue-100">Instagram</span>
                    </div>
                    <span className="text-sm font-bold text-blue-300">92%</span>
                  </div>
                  <div className="w-full bg-blue-900/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-800/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-blue-200">Score moyen</span>
                    <span className="text-lg font-bold text-white">92%</span>
                  </div>
                  <div className="text-xs text-blue-300/70 italic">Basé sur des tests avec plus de 10,000 profils</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vague décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
