"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight, ChevronLeft, AlertCircle, CheckCircle, Info, Twitter, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// Ajouter l'import pour le service API en haut du fichier
import { predictFakeProfile } from "./../api-service"
// Ajouter l'import pour les composants Alert
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

interface FormData {
  protected: number
  friends_count: number
  favourites_count: number
  profile_use_background_image: number
  hashtags_average: number
  mentions_average: number
  urls_average: number
  description: number
  statuses_count: number
  listed_count: number
  verified: number
  contributors_enabled: number
  default_profile: number
  default_profile_image: number
  is_translator: number
}

const initialFormData: FormData = {
  protected: 0,
  friends_count: 0,
  favourites_count: 0,
  profile_use_background_image: 1,
  hashtags_average: 0,
  mentions_average: 0,
  urls_average: 0,
  description: 1,
  statuses_count: 0,
  listed_count: 0,
  verified: 0,
  contributors_enabled: 0,
  default_profile: 0,
  default_profile_image: 0,
  is_translator: 0,
}

const tooltips = {
  protected: "Indique si le compte est protégé (1) ou public (0)",
  friends_count: "Nombre de comptes que l'utilisateur suit",
  favourites_count: "Nombre de tweets que l'utilisateur a aimés",
  profile_use_background_image: "Indique si le compte utilise une image de fond (1) ou non (0)",
  hashtags_average: "Nombre moyen de hashtags par tweet",
  mentions_average: "Nombre moyen de mentions (@) par tweet",
  urls_average: "Nombre moyen d'URLs par tweet",
  description: "Indique si le compte a une description (1) ou non (0)",
  statuses_count: "Nombre total de tweets publiés",
  listed_count: "Nombre de listes Twitter dans lesquelles l'utilisateur apparaît",
  verified: "Indique si le compte est vérifié (1) ou non (0)",
  contributors_enabled: "Indique si le compte a des contributeurs activés (1) ou non (0)",
  default_profile: "Indique si le compte utilise le thème par défaut (1) ou non (0)",
  default_profile_image: "Indique si le compte utilise l'avatar par défaut (1) ou non (0)",
  is_translator: "Indique si l'utilisateur est un traducteur Twitter (1) ou non (0)",
}

export default function DetectionForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isLoading, setIsLoading] = useState(false)
  // Modifier la définition du state result pour qu'il contienne uniquement le texte retourné par l'API
  const [result, setResult] = useState<null | string>(null)
  // Ajouter un état pour gérer les erreurs
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (field: keyof FormData, value: string) => {
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

  // Remplacer la fonction handleSubmit par celle-ci
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)
    setError(null)

    try {
      // Préparer les données pour l'API Hugging Face
      const inputData = [
        formData.protected,
        formData.friends_count,
        formData.favourites_count,
        formData.profile_use_background_image,
        formData.hashtags_average,
        formData.mentions_average,
        formData.urls_average,
        formData.description,
        formData.statuses_count,
        formData.listed_count,
        formData.verified,
        formData.contributors_enabled,
        formData.default_profile,
        formData.default_profile_image,
        formData.is_translator,
      ]

      // Envoyer la requête à l'espace Hugging Face
      const responseData = await predictFakeProfile(inputData)
      console.log(responseData)

      // Traiter la réponse qui est soit "fake" soit "real"
      let resultText: string

      if (Array.isArray(responseData)) {
        // Si la réponse est un tableau, prendre le premier élément
        resultText = String(responseData).toLowerCase()
      } else {
        // Sinon, utiliser directement la valeur
        resultText = String(responseData).toLowerCase()
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

  // Supprimer la fonction generateSimulatedProbability qui n'est plus nécessaire

  const resetForm = () => {
    setFormData(initialFormData)
    setResult(null)
    setStep(1)
  }

  const renderTooltip = (field: keyof FormData) => (
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
    <section id="detection-form" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full">
            <Twitter className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Détectez un profil Twitter</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            Entrez les caractéristiques du profil pour déterminer s'il s'agit d'un faux compte
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!result ? (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Analyse de profil</CardTitle>
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
                            <Label htmlFor="protected">Compte protégé</Label>
                            {renderTooltip("protected")}
                          </div>
                          <Input
                            id="protected"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.protected}
                            onChange={(e) => handleInputChange("protected", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="friends_count">Nombre d'amis</Label>
                            {renderTooltip("friends_count")}
                          </div>
                          <Input
                            id="friends_count"
                            type="number"
                            min="0"
                            value={formData.friends_count}
                            onChange={(e) => handleInputChange("friends_count", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="favourites_count">Nombre de favoris</Label>
                            {renderTooltip("favourites_count")}
                          </div>
                          <Input
                            id="favourites_count"
                            type="number"
                            min="0"
                            value={formData.favourites_count}
                            onChange={(e) => handleInputChange("favourites_count", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="profile_use_background_image">Utilise une image de fond</Label>
                            {renderTooltip("profile_use_background_image")}
                          </div>
                          <Input
                            id="profile_use_background_image"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.profile_use_background_image}
                            onChange={(e) => handleInputChange("profile_use_background_image", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="hashtags_average">Moyenne de hashtags</Label>
                            {renderTooltip("hashtags_average")}
                          </div>
                          <Input
                            id="hashtags_average"
                            type="number"
                            min="0"
                            step="0.1"
                            value={formData.hashtags_average}
                            onChange={(e) => handleInputChange("hashtags_average", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="mentions_average">Moyenne de mentions</Label>
                            {renderTooltip("mentions_average")}
                          </div>
                          <Input
                            id="mentions_average"
                            type="number"
                            min="0"
                            step="0.1"
                            value={formData.mentions_average}
                            onChange={(e) => handleInputChange("mentions_average", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="urls_average">Moyenne d'URLs</Label>
                            {renderTooltip("urls_average")}
                          </div>
                          <Input
                            id="urls_average"
                            type="number"
                            min="0"
                            step="0.1"
                            value={formData.urls_average}
                            onChange={(e) => handleInputChange("urls_average", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="description">A une description</Label>
                            {renderTooltip("description")}
                          </div>
                          <Input
                            id="description"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.description}
                            onChange={(e) => handleInputChange("description", e.target.value)}
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
                            <Label htmlFor="statuses_count">Nombre de statuts</Label>
                            {renderTooltip("statuses_count")}
                          </div>
                          <Input
                            id="statuses_count"
                            type="number"
                            min="0"
                            value={formData.statuses_count}
                            onChange={(e) => handleInputChange("statuses_count", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="listed_count">Nombre de listes</Label>
                            {renderTooltip("listed_count")}
                          </div>
                          <Input
                            id="listed_count"
                            type="number"
                            min="0"
                            value={formData.listed_count}
                            onChange={(e) => handleInputChange("listed_count", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="verified">Compte vérifié</Label>
                            {renderTooltip("verified")}
                          </div>
                          <Input
                            id="verified"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.verified}
                            onChange={(e) => handleInputChange("verified", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="contributors_enabled">Contributeurs activés</Label>
                            {renderTooltip("contributors_enabled")}
                          </div>
                          <Input
                            id="contributors_enabled"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.contributors_enabled}
                            onChange={(e) => handleInputChange("contributors_enabled", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="default_profile">Profil par défaut</Label>
                            {renderTooltip("default_profile")}
                          </div>
                          <Input
                            id="default_profile"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.default_profile}
                            onChange={(e) => handleInputChange("default_profile", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="default_profile_image">Image de profil par défaut</Label>
                            {renderTooltip("default_profile_image")}
                          </div>
                          <Input
                            id="default_profile_image"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.default_profile_image}
                            onChange={(e) => handleInputChange("default_profile_image", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="is_translator">Est traducteur</Label>
                            {renderTooltip("is_translator")}
                          </div>
                          <Input
                            id="is_translator"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.is_translator}
                            onChange={(e) => handleInputChange("is_translator", e.target.value)}
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
                result.toLowerCase().includes("fake")
                  ? "bg-gradient-to-br from-red-50 to-white border-l-4 border-l-red-500"
                  : "bg-gradient-to-br from-green-50 to-white border-l-4 border-l-green-500"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <span className="mr-2">Résultat de l'analyse</span>
                    {result.toLowerCase().includes("fake") ? (
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
                <CardDescription>Analyse basée sur notre modèle Random Forest optimisé par RTGBO</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center py-8">
                  {result.toLowerCase().includes("fake") ? (
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <AlertCircle className="h-12 w-12 text-red-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-red-700 mb-2">Faux Profil Détecté</h3>
                      <p className="text-gray-600 text-center max-w-md">
                        Notre modèle a identifié ce profil comme étant un faux compte.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-12 w-12 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-700 mb-2">Profil Authentique</h3>
                      <p className="text-gray-600 text-center max-w-md">
                        Notre modèle a identifié ce profil comme étant un compte authentique.
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
                    {result.toLowerCase().includes("fake")
                      ? "Ce profil présente plusieurs caractéristiques typiques des faux comptes. Notre modèle a détecté des anomalies dans les paramètres fournis, notamment dans les ratios d'activité et les caractéristiques du profil. Les faux comptes ont souvent des modèles d'activité irréguliers et des configurations de profil par défaut."
                      : "Ce profil présente des caractéristiques cohérentes avec un compte authentique. Notre modèle a analysé les paramètres fournis et n'a pas détecté d'anomalies significatives. Les comptes authentiques ont généralement un bon équilibre entre les différentes métriques d'activité et des configurations de profil personnalisées."}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-medium mb-2 text-sm">Facteurs déterminants :</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {result.toLowerCase().includes("fake") ? (
                        <>
                          <li className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                            <span>Ratio anormal entre le nombre d'amis et de statuts</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                            <span>Utilisation d'éléments de profil par défaut</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                            <span>Faible engagement (mentions, hashtags, URLs)</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>Bon équilibre entre le nombre d'amis et de statuts</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>Profil personnalisé avec description</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>Niveau d'engagement cohérent</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Résultat de l'API :</span>
                      <span
                        className={`font-mono text-sm px-2 py-1 rounded ${result.toLowerCase().includes("fake") ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
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
