import { FileAudio, FileVideo } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FormatsSection() {
  const audioFormats = ["MP3", "WAV", "AAC", "OGG", "FLAC"]
  const videoFormats = ["MP4", "AVI", "MKV", "MOV", "WMV"]

  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">Formatos disponibles</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Elige entre una amplia variedad de formatos para tus descargas de audio y video.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
              <FileAudio className="h-8 w-8 text-white" />
              <CardTitle className="text-white">Formatos de Audio</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {audioFormats.map((format, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-md p-3 text-center shadow-sm border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
                  >
                    <span className="font-medium">{format}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <FileVideo className="h-8 w-8 text-white" />
              <CardTitle className="text-white">Formatos de Video</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {videoFormats.map((format, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-md p-3 text-center shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <span className="font-medium">{format}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
