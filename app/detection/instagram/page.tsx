import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import InstagramDetectionForm from "@/components/InstagramDetectionForm"

export default function InstagramDetectionPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="py-12 bg-gray-50 mt-20 w-full flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl mb-4">
              Détection de faux profils Instagram
            </h1>
            <p className="text-gray-500 md:text-xl max-w-[700px] mx-auto">
              Utilisez notre outil basé sur l'IA pour analyser les caractéristiques d'un profil Instagram
            </p>
          </div>
        </div>
        <InstagramDetectionForm />
      </main>
      <Footer />
    </>
  )
}
