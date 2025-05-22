"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight, ChevronLeft, AlertCircle, CheckCircle, Info, Facebook, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { predictFakeFacebookProfile } from "./../api-service-facebook"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

interface FacebookFormData {
  name_id: string
  profile_picture: string
  likes: string
  groups: string
  mutual_friends: string
  education: string
  work: string
  living_place: string
  relationship_family: string
  checkin: string
  posts: string
  tags: string
  intro: string
}

const initialFacebookFormData: FacebookFormData = {
  name_id: "",
  profile_picture: "1",
  likes: "0",
  groups: "0",
  mutual_friends: "0",
  education: "1",
  work: "1",
  living_place: "1",
  relationship_family: "1",
  checkin: "0",
  posts: "0",
  tags: "0",
  intro: "1",
}

const tooltips = {
  name_id: "Nom ou identifiant du profil",
  profile_picture: "Présence d'une photo de profil (1) ou non (0)",
  likes: "Nombre de likes reçus",
  groups: "Nombre de groupes rejoints",
  mutual_friends: "Nombre d'amis en commun",
  education: "Présence d'informations sur l'éducation (1) ou non (0)",
  work: "Présence d'informations sur le travail (1) ou non (0)",
  living_place: "Présence d'informations sur le lieu de résidence (1) ou non (0)",
  relationship_family: "Présence d'informations sur la relation/famille (1) ou non (0)",
  checkin: "Nombre de check-ins effectués",
  posts: "Nombre de publications",
  tags: "Nombre de tags reçus",
  intro: "Présence d'une introduction (1) ou non (0)",
}

export default function FacebookDetectionForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FacebookFormData>(initialFacebookFormData)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<null | string>(null)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (field: keyof FacebookFormData, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
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
      const responseData = await predictFakeFacebookProfile(formData)

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
    setFormData(initialFacebookFormData)
    setResult(null)
    setStep(1)
  }

  const renderTooltip = (field: keyof FacebookFormData) => (
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
    <section id="facebook-detection-form" className="w-full py-12 md:py-24 bg-white flex flex-col items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full">
            <Facebook className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Détectez un profil Facebook</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            Entrez les caractéristiques du profil pour déterminer s'il s'agit d'un faux compte
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!result ? (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Analyse de profil Facebook</CardTitle>
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
                            <Label htmlFor="name_id">Nom/ID du profil</Label>
                            {renderTooltip("name_id")}
                          </div>
                          <Input
                            id="name_id"
                            type="text"
                            value={formData.name_id}
                            onChange={(e) => handleInputChange("name_id", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="profile_picture">Photo de profil</Label>
                            {renderTooltip("profile_picture")}
                          </div>
                          <Input
                            id="profile_picture"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.profile_picture}
                            onChange={(e) => handleInputChange("profile_picture", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="likes">Nombre de likes</Label>
                            {renderTooltip("likes")}
                          </div>
                          <Input
                            id="likes"
                            type="number"
                            min="0"
                            value={formData.likes}
                            onChange={(e) => handleInputChange("likes", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="groups">Nombre de groupes</Label>
                            {renderTooltip("groups")}
                          </div>
                          <Input
                            id="groups"
                            type="number"
                            min="0"
                            value={formData.groups}
                            onChange={(e) => handleInputChange("groups", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="mutual_friends">Amis en commun</Label>
                            {renderTooltip("mutual_friends")}
                          </div>
                          <Input
                            id="mutual_friends"
                            type="number"
                            min="0"
                            value={formData.mutual_friends}
                            onChange={(e) => handleInputChange("mutual_friends", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="education">Éducation</Label>
                            {renderTooltip("education")}
                          </div>
                          <Input
                            id="education"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.education}
                            onChange={(e) => handleInputChange("education", e.target.value)}
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
                            <Label htmlFor="work">Travail</Label>
                            {renderTooltip("work")}
                          </div>
                          <Input
                            id="work"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.work}
                            onChange={(e) => handleInputChange("work", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="living_place">Lieu de résidence</Label>
                            {renderTooltip("living_place")}
                          </div>
                          <Input
                            id="living_place"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.living_place}
                            onChange={(e) => handleInputChange("living_place", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="relationship_family">Relation/Famille</Label>
                            {renderTooltip("relationship_family")}
                          </div>
                          <Input
                            id="relationship_family"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.relationship_family}
                            onChange={(e) => handleInputChange("relationship_family", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="checkin">Check-ins</Label>
                            {renderTooltip("checkin")}
                          </div>
                          <Input
                            id="checkin"
                            type="number"
                            min="0"
                            value={formData.checkin}
                            onChange={(e) => handleInputChange("checkin", e.target.value)}
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
                            <Label htmlFor="tags">Tags</Label>
                            {renderTooltip("tags")}
                          </div>
                          <Input
                            id="tags"
                            type="number"
                            min="0"
                            value={formData.tags}
                            onChange={(e) => handleInputChange("tags", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="intro">Introduction</Label>
                            {renderTooltip("intro")}
                          </div>
                          <Input
                            id="intro"
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={formData.intro}
                            onChange={(e) => handleInputChange("intro", e.target.value)}
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
                <span>Tous les champs doivent être remplis avec des valeurs numériques (sauf le nom)</span>
                <Button variant="ghost" size="sm" onClick={resetForm}>
                  Réinitialiser
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card
              className={`border-0 shadow-lg ${
                (result.toLowerCase().includes("fake"))
                  ? "bg-gradient-to-br from-red-50 to-white border-l-4 border-l-red-500"
                  : "bg-gradient-to-br from-green-50 to-white border-l-4 border-l-green-500"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <span className="mr-2">Résultat de l'analyse</span>
                    {(result.toLowerCase().includes("fake")) ? (
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
                <CardDescription>Analyse basée sur notre modèle d'IA pour Facebook</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center py-8">
                  {(result.toLowerCase().includes("fake")) ? (
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <AlertCircle className="h-12 w-12 text-red-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-red-700 mb-2">Faux Profil Détecté</h3>
                      <p className="text-gray-600 text-center max-w-md">
                        Notre modèle a identifié ce profil Facebook comme étant un faux compte.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-12 w-12 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-700 mb-2">Profil Authentique</h3>
                      <p className="text-gray-600 text-center max-w-md">
                        Notre modèle a identifié ce profil Facebook comme étant un compte authentique.
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
                    {(result.toLowerCase().includes("fake"))
                      ? "Ce profil Facebook présente plusieurs caractéristiques typiques des faux comptes. Notre modèle a détecté des anomalies dans les paramètres fournis, notamment dans les ratios d'activité et les caractéristiques du profil. Les faux comptes ont souvent des modèles d'activité irréguliers et des configurations de profil par défaut."
                      : "Ce profil Facebook présente des caractéristiques cohérentes avec un compte authentique. Notre modèle a analysé les paramètres fournis et n'a pas détecté d'anomalies significatives. Les comptes authentiques ont généralement un bon équilibre entre les différentes métriques d'activité et des configurations de profil personnalisées."}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-medium mb-2 text-sm">Facteurs déterminants :</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {(result.toLowerCase().includes("fake")) ? (
                        <>
                          <li className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                            <span>Informations de profil incomplètes ou manquantes</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                            <span>Déséquilibre entre le nombre d'amis et l'activité</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                            <span>Faible engagement social (peu de tags, check-ins)</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>Profil complet avec informations personnelles</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>Équilibre cohérent entre amis et activités</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>Niveau d'engagement social normal</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Résultat de l'API :</span>
                      <span
                        className={`font-mono text-sm px-2 py-1 rounded ${(result.toLowerCase().includes("fake")) ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
                      >
                        {(result.toLowerCase().includes("fake")) ? "fake" : "real"}
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
