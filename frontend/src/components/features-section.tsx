import { Download, Music, Video, Zap } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Download className="h-12 w-12 text-blue-700" />,
      title: "Descarga sencilla",
      description: "Simplemente pega la URL del video de YouTube y elige tu formato preferido.",
    },
    {
      icon: <Music className="h-12 w-12 text-purple-600" />,
      title: "Múltiples formatos de audio",
      description: "Convierte a MP3, WAV y más formatos de audio de alta calidad.",
    },
    {
      icon: <Video className="h-12 w-12 text-blue-700" />,
      title: "Formatos de video",
      description: "Descarga en MP4, AVI, MKV y otros formatos de video populares.",
    },
    {
      icon: <Zap className="h-12 w-12 text-purple-600" />,
      title: "Conversión rápida",
      description: "Nuestro sistema optimizado procesa tus archivos en tiempo récord.",
    },
  ]

  return (
    <div id="features" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">Características principales</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          MediaDropper te ofrece una experiencia completa para convertir y descargar tus videos favoritos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100"
            >
              <div className="mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
