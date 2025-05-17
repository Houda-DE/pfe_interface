import { Search, Zap, Brain } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-blue-700"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 16h5v5" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">À propos de l'outil</h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl">
            Ce détecteur utilise un modèle Random Forest optimisé par RTGBO (algorithme inspiré des groupes
            biologiques).
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Avantage 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Search className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Analyse complète</h3>
            <p className="text-gray-600 text-center">🔍 Analyse 15 paramètres d'un profil</p>
          </div>

          {/* Avantage 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Rapidité</h3>
            <p className="text-gray-600 text-center">⚡ Résultat instantané</p>
          </div>

          {/* Avantage 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Intelligence artificielle</h3>
            <p className="text-gray-600 text-center">🧠 Basé sur l'IA</p>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-white"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Technologie avancée</h4>
              <p className="text-gray-600">
                Notre modèle Random Forest optimisé par RTGBO analyse rapidement les profils Twitter pour détecter les
                comportements suspects avec une précision supérieure à 98%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
