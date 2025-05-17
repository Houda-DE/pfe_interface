"use client"

import { useState, useEffect } from "react"
import { Shield, CheckCircle, Lock } from "lucide-react"
import { Button } from "./ui/button"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToForm = () => {
    const formElement = document.getElementById("detection-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className={`space-y-4 ${isVisible ? "animate-fadeIn" : "opacity-0"}`}>
            <div className="inline-flex items-center rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-2">
              <CheckCircle className="mr-1 h-4 w-4" />
              <span>Précision de plus de 98%</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Détectez les faux profils Twitter en un clic
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              Un outil intelligent basé sur l&apos;IA pour vérifier les comptes Twitter suspects avec plus de 98% de
              precision.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8"
              >
                Commencer la détection
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-300 mt-4">
              <div className="flex items-center">
                <Shield className="mr-1 h-4 w-4 text-blue-400" />
                <span>Sécurisé</span>
              </div>
              <div className="flex items-center">
                <Lock className="mr-1 h-4 w-4 text-blue-400" />
                <span>Confidentiel</span>
              </div>
            </div>
          </div>
          <div className={`flex justify-center ${isVisible ? "animate-fadeInRight" : "opacity-0"}`}>
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-700 rounded-full opacity-20 animate-pulse delay-300"></div>
              <div className="relative z-10 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] p-8 rounded-2xl shadow-2xl">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-white rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-16 h-16 text-gray-400" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute -right-2 -bottom-2 bg-green-500 p-2 rounded-full border-2 border-white shadow-lg">
                      <Lock className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2.5 bg-blue-300 bg-opacity-30 rounded-full w-full"></div>
                  <div className="h-2.5 bg-blue-300 bg-opacity-30 rounded-full w-3/4"></div>
                  <div className="flex items-center space-x-2 mt-6">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="h-2.5 bg-blue-300 bg-opacity-30 rounded-full w-1/2"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="h-2.5 bg-blue-300 bg-opacity-30 rounded-full w-1/3"></div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-400 border-opacity-30">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-blue-100">Vérification complète</span>
                    </div>
                    <span className="text-xs font-bold text-blue-100">98.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
