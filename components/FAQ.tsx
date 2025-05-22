"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Comment fonctionne la détection de faux profils ?",
    answer:
      "Notre système utilise des algorithmes d'intelligence artificielle pour analyser diverses caractéristiques des profils sur les réseaux sociaux. Pour Twitter, nous analysons 15 caractéristiques, pour Facebook 13, et pour Instagram 10. Ces caractéristiques incluent les ratios d'activité, les patterns d'engagement, et les métadonnées du compte. Notre modèle, entraîné sur des millions de profils, atteint un F1 Score supérieur à 90% sur toutes les plateformes.",
  },
  {
    question: "Qu'est-ce que le F1 Score et pourquoi est-il important ?",
    answer:
      "Le F1 Score est une mesure de précision qui combine la précision (proportion de vrais positifs parmi les résultats positifs) et le rappel (proportion de vrais positifs correctement identifiés). Un F1 Score élevé indique que notre modèle est performant tant pour identifier correctement les faux profils que pour ne pas classer à tort des profils authentiques comme faux. Notre F1 Score moyen de 92% signifie que notre système est extrêmement fiable.",
  },
  {
    question: "Quelles informations dois-je fournir pour analyser un profil ?",
    answer:
      "Pour chaque plateforme, vous devez fournir différentes caractéristiques du profil. Pour Twitter, cela inclut des informations comme le nombre d'amis, de favoris, la présence d'une photo de profil, etc. Pour Facebook, nous analysons des éléments comme les likes, les groupes, et les informations personnelles. Pour Instagram, nous examinons le ratio followers/following, la longueur du nom d'utilisateur, et d'autres métriques. Toutes ces informations sont traitées de manière sécurisée et confidentielle.",
  },
  {
    question: "Mes données sont-elles sécurisées lors de l'utilisation de vos outils ?",
    answer:
      "Absolument. Nous ne stockons pas les données que vous entrez dans nos outils de détection. L'analyse est effectuée en temps réel et les résultats sont affichés immédiatement. Nous n'utilisons pas vos données pour entraîner nos modèles sans consentement explicite. Notre priorité est de fournir un service fiable tout en respectant votre vie privée.",
  },
  {
    question: "Puis-je analyser plusieurs profils à la fois ?",
    answer:
      "Nos outils en ligne sont conçus pour analyser un profil à la fois. Cependant, si vous avez besoin d'analyser plusieurs profils ou d'intégrer notre API à votre plateforme, nous proposons des solutions personnalisées. Contactez-nous pour discuter de vos besoins spécifiques et nous vous proposerons une solution adaptée.",
  },
  {
    question: "Quelle est la précision de vos modèles pour chaque plateforme ?",
    answer:
      "Notre modèle Twitter a un F1 Score de 93%, avec une précision de 94% et un rappel de 92%. Pour Facebook, nous atteignons un F1 Score de 91%, avec une précision de 90% et un rappel de 92%. Notre modèle Instagram a un F1 Score de 92%, avec une précision de 93% et un rappel de 91%. Ces performances sont le résultat d'un entraînement sur des millions de profils et d'une optimisation continue de nos algorithmes.",
  },
  {
    question: "Comment puis-je interpréter les résultats de l'analyse ?",
    answer:
      "Après l'analyse, nous vous présentons un résultat clair indiquant si le profil est authentique ou faux, accompagné d'une analyse détaillée des facteurs déterminants. Nous expliquons pourquoi notre modèle a classé le profil comme tel, en mettant en évidence les caractéristiques qui ont influencé cette décision. Cela vous permet de comprendre le raisonnement derrière chaque classification.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4 mr-2" />
            <span>Questions fréquentes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vous avez des questions ?</h2>
          <p className="text-gray-600 md:text-lg max-w-[700px] mx-auto">
            Découvrez les réponses aux questions les plus fréquemment posées sur nos outils de détection de faux profils
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-blue-200 transition-colors"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-gray-800">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? "transform rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
          <a href="#contact" className="text-blue-600 hover:text-blue-800 font-medium">
            Contactez-nous directement
          </a>
        </div>
      </div>
    </section>
  )
}
