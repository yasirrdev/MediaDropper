 "use client"

import type React from "react"

import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Download, CheckCircle, AlertCircle, Youtube } from "lucide-react"

const API_URL = "https://mediadropper.onrender.com"

export default function ConversionForm() {
  const [url, setUrl] = useState("")
  const [format, setFormat] = useState("mp3")
  const [mediaType, setMediaType] = useState("audio")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState("")
  const [fileName, setFileName] = useState("")

  const audioFormats = [
    { value: "mp3", label: "MP3" },
    { value: "wav", label: "WAV" },
    { value: "aac", label: "AAC" },
    { value: "ogg", label: "OGG" },
    { value: "flac", label: "FLAC" },
  ]

  const videoFormats = [
    { value: "mp4", label: "MP4" },
    { value: "avi", label: "AVI" },
    { value: "mkv", label: "MKV" },
    { value: "mov", label: "MOV" },
    { value: "wmv", label: "WMV" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!url) {
      setError("Por favor, ingresa una URL de YouTube válida")
      return
    }

    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const response = await axios.post(
        `${API_URL}/convert`,
        {
          url,
          format,
        },
        {
          responseType: "blob",
        },
      )

      const blob = new Blob([response.data])
      let downloadUrl = '';
      if (typeof window !== 'undefined') {
        downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', `video.${format}`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      }

      const contentDisposition = response.headers["content-disposition"]
      let fileName = "download." + format

      if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(/filename="(.+)"/)
        if (fileNameMatch && fileNameMatch.length === 2) {
          fileName = fileNameMatch[1]
        }
      }

      setDownloadUrl(downloadUrl)
      setFileName(fileName)
      setSuccess(true)
    } catch (err) {
      console.error("Error al convertir:", err)
      setError("Ocurrió un error al procesar tu solicitud. Por favor, intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  const handleTabChange = (value: string) => {
    setMediaType(value)
    
    if (value === "audio") {
      setFormat("mp3")
    } else {
      setFormat("mp4")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-3">
        <Label htmlFor="youtube-url" className="text-lg font-medium">
          URL de YouTube
        </Label>
        <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2 border border-gray-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300">
          <Youtube className="h-5 w-5 text-red-600 ml-2" />
          <Input
            id="youtube-url"
            type="url"
            placeholder="https://www.youtube.com/watch?v=..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <Tabs defaultValue="audio" onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="audio" className="text-base py-3">
            Audio
          </TabsTrigger>
          <TabsTrigger value="video" className="text-base py-3">
            Video
          </TabsTrigger>
        </TabsList>

        <TabsContent value="audio" className="pt-4 border rounded-lg p-6 bg-gray-50">
          <div className="space-y-4">
            <Label className="text-lg font-medium">Formato de audio</Label>
            <RadioGroup value={format} onValueChange={setFormat} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {audioFormats.map((audioFormat) => (
                <div
                  key={audioFormat.value}
                  className={`flex items-center space-x-2 p-3 rounded-lg border ${
                    format === audioFormat.value ? "border-purple-400 bg-purple-50" : "border-gray-200"
                  } hover:border-purple-300 transition-colors cursor-pointer`}
                  onClick={() => setFormat(audioFormat.value)}
                >
                  <RadioGroupItem value={audioFormat.value} id={`audio-${audioFormat.value}`} />
                  <Label htmlFor={`audio-${audioFormat.value}`} className="cursor-pointer">
                    {audioFormat.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </TabsContent>

        <TabsContent value="video" className="pt-4 border rounded-lg p-6 bg-gray-50">
          <div className="space-y-4">
            <Label className="text-lg font-medium">Formato de video</Label>
            <RadioGroup value={format} onValueChange={setFormat} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {videoFormats.map((videoFormat) => (
                <div
                  key={videoFormat.value}
                  className={`flex items-center space-x-2 p-3 rounded-lg border ${
                    format === videoFormat.value ? "border-blue-400 bg-blue-50" : "border-gray-200"
                  } hover:border-blue-300 transition-colors cursor-pointer`}
                  onClick={() => setFormat(videoFormat.value)}
                >
                  <RadioGroupItem value={videoFormat.value} id={`video-${videoFormat.value}`} />
                  <Label htmlFor={`video-${videoFormat.value}`} className="cursor-pointer">
                    {videoFormat.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </TabsContent>
      </Tabs>

      {error && (
        <Alert variant="destructive" className="border-2">
          <AlertCircle className="h-5 w-5" />
          <AlertDescription className="text-base">{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="bg-green-50 border-2 border-green-200">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <AlertDescription className="text-green-700 text-base">
            ¡Conversión exitosa! Haz clic en el botón de descarga.
          </AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <Button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 flex-1 py-6 text-lg shadow-md"
          disabled={loading || !url}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Convirtiendo...
            </>
          ) : (
            "Convertir"
          )}
        </Button>

        {success && (
          <Button
            type="button"
            variant="outline"
            className="flex-1 py-6 text-lg border-green-300 text-green-700 hover:bg-green-50 hover:text-green-800 shadow-md"
            onClick={() => {
              const a = document.createElement("a")
              a.href = downloadUrl
              a.download = fileName
              a.click()
              document.body.removeChild(a)
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            Descargar archivo
          </Button>
        )}
      </div>
    </form>
  )
}
