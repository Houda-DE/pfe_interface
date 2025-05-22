"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight, ChevronLeft, AlertCircle, CheckCircle, Info, Instagram, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { predictFakeInstagramProfile } from "../api-service-instagram"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

interface InstagramFormData {
  profile_pic: number
  username_length: number
  fullname_words: number
  name_eq_username: number
  description_length: number
  external_url: number
  private: number
  posts: number
  followers: number
  follows: number
}

const initialInstagramFormData: InstagramFormData = {
  profile_pic: 1,
  username_length: 8,
  fullname_words: 2,
  name_eq_username: 0,
  description_length: 20,
  external_url: 0,
  private: 0,
  posts: 10,
  followers: 100,
  follows: 100,
}

const tooltips = {
  profile_pic: "Présence d'une photo de profil (1) ou non (0)",
  username_length: "Longueur du nom d'utilisateur",
  fullname_words: "Nombre de mots dans le nom complet",
  name_eq_username: "Le nom est identique au nom d'utilisateur (1) ou non (0)",
  description_length: "Longueur de la description du profil",
  external_url: "Présence d'une URL externe (1) ou non (0)",
  private: "Compte privé (1) ou public (0)",
  posts: "Nombre de publications",
  followers: "Nombre d'abonnés",
  follows: "Nombre d'abonnements",
}

export default function InstagramDetectionForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<InstagramFormData>(initialInstagramFormData)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<null | string>(null)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (field: keyof InstagramFormData, value: string) => {
    // Convert to number and ensure it's not NaN
    const numValue = Number.parseFloat(value)
    setFormData({
      ...formData,
      [field]: isNaN(numValue) ? 0 : numValue,
    })
  }

  const nextStep = () => {
    setStep(2)
  }

  const prevStep = () => {
    setStep(1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)
    setError(null)

    try {
      // Envoyer la requête à l'API
      const responseData = await predictFakeInstagramProfile(formData)

      // Traiter la réponse qui est soit "fake" soit "real"
      let resultText: string

      if (Array.isArray(responseData)) {
        // Si la réponse est un tableau, prendre le premier élément
        resultText = String(responseData[0]).toLowerCase()
        console.log(resultText)
      } else {
        // Sinon, utiliser directement la valeur
        resultText = String(responseData).toLowerCase()
        console.log(resultText)
      }

      setResult(resultText)
    } catch (error: any) {
      console.error("Erreur lors de l'analyse:", error)
      setError(
        `Une erreur est survenue lors de la connexion à l'API: ${error.message || "Erreur inconnue"}. Veuillez vérifier votre connexion et réessayer.`,
      )
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setFormData(initialInstagramFormData)
    setResult(null)
    setStep(1)
  }

  const renderTooltip = (field: keyof InstagramFormData) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{tooltips[field]}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

  return (
    <section id="instagram-detection-form" className="w-full flex flex-col items-center justify-center py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full">
            <Instagram className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Détectez un profil Instagram</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            Entrez les caractéristiques du profil pour déterminer s'il s'agit d'un faux compte
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!result ? (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Analyse de profil Instagram</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${step >= 1 ? "bg-blue-600" : "bg-gray-300"}`}></span>
                    <span className="text-sm text-gray-500">Étape 1</span>
                    <span className="text-sm text-gray-300 mx-2">→</span>
                    <span className={`h-2.5 w-2.5 rounded-full ${step >= 2 ? "bg-blue-600" : "bg-gray-300"}`}></span>
                    <span className="text-sm text-gray-500">Étape 2</span>
                  </div>
                </div>
                <CardDescription>
                  Remplissez les informations du profil pour l'analyser avec notre modèle d'IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Tabs value={`step-${step}`} className="w-full">
                    <TabsContent value="step-1" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="profile_pic">Photo de profil</Label>
                            {renderTooltip("profile_pic")}
                          </div>
                          <Input
                            id="profile_pic"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.profile_pic}
                            onChange={(e) => handleInputChange("profile_pic", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="username_length">Longueur du nom d'utilisateur</Label>
                            {renderTooltip("username_length")}
                          </div>
                          <Input
                            id="username_length"
                            type="number"
                            min="0"
                            value={formData.username_length}
                            onChange={(e) => handleInputChange("username_length", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="fullname_words">Mots dans le nom complet</Label>
                            {renderTooltip("fullname_words")}
                          </div>
                          <Input
                            id="fullname_words"
                            type="number"
                            min="0"
                            value={formData.fullname_words}
                            onChange={(e) => handleInputChange("fullname_words", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="name_eq_username">Nom = Nom d'utilisateur</Label>
                            {renderTooltip("name_eq_username")}
                          </div>
                          <Input
                            id="name_eq_username"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.name_eq_username}
                            onChange={(e) => handleInputChange("name_eq_username", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="description_length">Longueur de la description</Label>
                            {renderTooltip("description_length")}
                          </div>
                          <Input
                            id="description_length"
                            type="number"
                            min="0"
                            value={formData.description_length}
                            onChange={(e) => handleInputChange("description_length", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex justify-end mt-6">
                        <Button type="button" onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                          Suivant <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="step-2" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="external_url">URL externe</Label>
                            {renderTooltip("external_url")}
                          </div>
                          <Input
                            id="external_url"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.external_url}
                            onChange={(e) => handleInputChange("external_url", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="private">Compte privé</Label>
                            {renderTooltip("private")}
                          </div>
                          <Input
                            id="private"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.private}
                            onChange={(e) => handleInputChange("private", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="posts">Publications</Label>
                            {renderTooltip("posts")}
                          </div>
                          <Input
                            id="posts"
                            type="number"
                            min="0"
                            value={formData.posts}
                            onChange={(e) => handleInputChange("posts", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="followers">Abonnés</Label>
                            {renderTooltip("followers")}
                          </div>
                          <Input
                            id="followers"
                            type="number"
                            min="0"
                            value={formData.followers}
                            onChange={(e) => handleInputChange("followers", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="follows">Abonnements</Label>
                            {renderTooltip("follows")}
                          </div>
                          <Input
                            id="follows"
                            type="number"
                            min="0"
                            value={formData.follows}
                            onChange={(e) => handleInputChange("follows", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between mt-6">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          <ChevronLeft className="mr-2 h-4 w-4" /> Précédent
                        </Button>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                          {isLoading ? "Analyse en cours..." : "Analyser le profil"}
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </form>
                {error && (
                  <Alert variant="destructive" className="mt-4">
                    <AlertTitle>Erreur</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter className="border-t pt-4 text-sm text-gray-500 flex justify-between">
                <span>Tous les champs doivent être remplis avec des valeurs numériques</span>
                <Button variant="ghost" size="sm" onClick={resetForm}>
                  Réinitialiser
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card
              className={`border-0 shadow-lg ${
                result === "fake"
                  ? "bg-gradient-to-br from-red-50 to-white border-l-4 border-l-red-500"
                  : "bg-gradient-to-br from-green-50 to-white border-l-4 border-l-green-500"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <span className="mr-2">Résultat de l'analyse</span>
                    {result === "fake" ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Faux profil
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Profil authentique
                      </span>
                    )}
                  </CardTitle>
                </div>
                <CardDescription>Analyse basée sur notre modèle d'IA pour Instagram</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center py-8">
                  {result === "fake" ? (
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <AlertCircle className="h-12 w-12 text-red-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-red-700 mb-2">Faux Profil Détecté</h3>
                      <p className="text-gray-600 text-center max-w-md">
                        Notre modèle a identifié ce profil Instagram comme étant un faux compte.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-12 w-12 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-700 mb-2">Profil Authentique</h3>
                      <p className="text-gray-600 text-center max-w-md">
                        Notre modèle a identifié ce profil Instagram comme étant un compte authentique.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 mb-4">
                    <BarChart className="h-5 w-5 text-blue-500" />
                    <h3 className="font-medium">Analyse détaillée</h3>
                  </div>
                  <p className="text-gray-600">
                    {result === "fake"
                      ? "Ce profil Instagram présente plusieurs caractéristiques typiques des faux comptes. Notre modèle a détecté des anomalies dans les paramètres fournis, notamment dans les ratios d'abonnés/abonnements et les caractéristiques du profil. Les faux comptes ont souvent des déséquilibres importants entre ces métriques."
                      : "Ce profil Instagram présente des caractéristiques cohérentes avec un compte authentique. Notre modèle a analysé les paramètres fournis et n'a pas détecté d'anomalies significatives. Les comptes authentiques ont généralement un bon équilibre entre les abonnés et les abonnements, ainsi qu'une activité régulière."}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-medium mb-2 text-sm">Facteurs déterminants :</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {result === "fake" ? (
                        <>
                          <li className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                            <span>Déséquilibre entre abonnés et abonnements</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                            <span>Description de profil insuffisante</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                            <span>Ratio publications/abonnés anormal</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>Équilibre cohérent entre abonnés et abonnements</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>Description de profil complète</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>Activité de publication normale</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Résultat de l'API :</span>
                      <span
                        className={`font-mono text-sm px-2 py-1 rounded ${result === "fake" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
                      >
                        {result}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <span className="text-sm text-gray-500">Analysé le {new Date().toLocaleDateString()}</span>
                <Button onClick={resetForm} variant="outline">
                  Nouvelle analyse
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
