import { Shield, Twitter, Github, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">TwitterDetector</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Un outil intelligent basé sur l'IA pour vérifier les comptes Twitter suspects avec plus de 98% de
              precision.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Détection
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Tutoriels
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                <a
                  href="mailto:contact@twitterdetector.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  contact@twitterdetector.com
                </a>
              </li>
              <li className="text-gray-400 text-sm mt-4">
                Vous avez des questions ou des suggestions ? N'hésitez pas à nous contacter.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} TwitterDetector. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Conditions d'utilisation
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs mt-6 flex items-center justify-center">
          <span>Fait avec</span>
          <Heart className="h-3 w-3 mx-1 text-red-500" />
          <span>en France</span>
        </div>
      </div>
    </footer>
  )
}
