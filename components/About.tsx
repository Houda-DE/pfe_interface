import { CheckCircle, Twitter, Facebook, Instagram, Shield, Brain, Zap, BarChart2 } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white text-gray-800 py-24 md:py-32">
      {/* Éléments décoratifs subtils pour fond blanc */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-20 left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-4">
            <Shield className="h-4 w-4 mr-2" />
            <span>Notre technologie</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Comment nous détectons les faux profils
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Notre système utilise des algorithmes d'intelligence artificielle avancés pour analyser les caractéristiques
            des profils sur les réseaux sociaux et identifier les comptes frauduleux avec une précision exceptionnelle.
          </p>
        </div>

        {/* Cartes des plateformes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-full bg-white rounded-2xl p-6 shadow-xl flex flex-col border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Twitter className="h-6 w-6 text-[#1DA1F2]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Twitter</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Notre modèle analyse 15 caractéristiques clés des profils Twitter, y compris les ratios d'activité, les
                patterns d'engagement et les métadonnées du compte.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-700">F1 Score</span>
                  <span className="text-lg font-bold text-blue-800">93%</span>
                </div>
                <div className="w-full bg-blue-200/50 rounded-full h-2 mb-4">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                    style={{ width: "93%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-blue-600">
                  <span>Précision: 94%</span>
                  <span>Rappel: 92%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-full bg-white rounded-2xl p-6 shadow-xl flex flex-col border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Facebook className="h-6 w-6 text-[#4267B2]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Facebook</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Pour Facebook, nous analysons 13 caractéristiques incluant les informations de profil, les interactions
                sociales et les patterns d'activité pour une détection précise.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-700">F1 Score</span>
                  <span className="text-lg font-bold text-blue-800">91%</span>
                </div>
                <div className="w-full bg-blue-200/50 rounded-full h-2 mb-4">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                    style={{ width: "91%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-blue-600">
                  <span>Précision: 90%</span>
                  <span>Rappel: 92%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-full bg-white rounded-2xl p-6 shadow-xl flex flex-col border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Instagram className="h-6 w-6 text-[#E1306C]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Instagram</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Notre modèle Instagram évalue 10 caractéristiques clés, dont les ratios followers/following, la qualité
                du contenu et les patterns d'engagement.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-700">F1 Score</span>
                  <span className="text-lg font-bold text-blue-800">92%</span>
                </div>
                <div className="w-full bg-blue-200/50 rounded-full h-2 mb-4">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-blue-600">
                  <span>Précision: 93%</span>
                  <span>Rappel: 91%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section F1 Score */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-30"></div>
          <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Comprendre le F1 Score
                </h3>
                <p className="text-gray-600 mb-6">
                  Le F1 Score est une mesure de précision qui combine la précision (proportion de vrais positifs parmi
                  les résultats positifs) et le rappel (proportion de vrais positifs correctement identifiés). Un score
                  élevé indique une excellente performance du modèle.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-md font-medium text-gray-800">Précision élevée</h4>
                      <p className="text-sm text-gray-600">
                        Nos modèles identifient correctement les faux profils avec une précision supérieure à 90%.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-md font-medium text-gray-800">Rappel optimal</h4>
                      <p className="text-sm text-gray-600">
                        Nos algorithmes détectent plus de 90% des faux profils présents dans les données.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-md font-medium text-gray-800">Équilibre optimal</h4>
                      <p className="text-sm text-gray-600">
                        Le F1 Score élevé indique un équilibre parfait entre précision et rappel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-64 bg-blue-50 rounded-xl p-6 relative overflow-hidden border border-blue-100">
                  {/* Formule F1 Score */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-blue-700 text-sm mb-2">Formule du F1 Score</div>
                    <div className="text-gray-800 text-xl font-mono bg-blue-100/70 px-4 py-2 rounded-lg">
                      F1 = 2 × <span className="text-blue-600">(précision × rappel)</span> ÷{" "}
                      <span className="text-purple-600">(précision + rappel)</span>
                    </div>
                  </div>

                  {/* Graphique circulaire */}
                  <div className="absolute bottom-4 right-4 w-20 h-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#e0e7ff"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeDashoffset="0"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeDashoffset="25.12"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                      <text
                        x="50"
                        y="55"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#1e40af"
                        fontSize="18"
                        fontWeight="bold"
                      >
                        92%
                      </text>
                    </svg>
                  </div>

                  {/* Lignes décoratives */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-blue-200/50"></div>
                    <div className="absolute top-2/4 left-0 w-full h-px bg-blue-200/50"></div>
                    <div className="absolute top-3/4 left-0 w-full h-px bg-blue-200/50"></div>
                    <div className="absolute top-0 left-1/4 w-px h-full bg-blue-200/50"></div>
                    <div className="absolute top-0 left-2/4 w-px h-full bg-blue-200/50"></div>
                    <div className="absolute top-0 left-3/4 w-px h-full bg-blue-200/50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Caractéristiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Intelligence Artificielle</h3>
            <p className="text-gray-600">
              Nos modèles d'IA sont entraînés sur des millions de profils pour identifier avec précision les
              caractéristiques des faux comptes.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <BarChart2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Analyse Multiplateforme</h3>
            <p className="text-gray-600">
              Notre technologie fonctionne sur Twitter, Facebook et Instagram avec des modèles spécifiques à chaque
              plateforme pour une précision maximale.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Résultats Instantanés</h3>
            <p className="text-gray-600">
              Obtenez des résultats en quelques secondes avec une analyse détaillée expliquant pourquoi un profil est
              considéré comme authentique ou faux.
            </p>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="text-3xl font-bold text-blue-700 mb-1">10M+</div>
            <div className="text-blue-600 text-sm">Profils analysés</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="text-3xl font-bold text-blue-700 mb-1">92%</div>
            <div className="text-blue-600 text-sm">F1 Score moyen</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="text-3xl font-bold text-blue-700 mb-1">3</div>
            <div className="text-blue-600 text-sm">Plateformes supportées</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="text-3xl font-bold text-blue-700 mb-1">99.9%</div>
            <div className="text-blue-600 text-sm">Disponibilité</div>
          </div>
        </div>
      </div>
    </section>
  )
}
