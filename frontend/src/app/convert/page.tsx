import ConversionForm from "@/components/conversion-form"

export default function ConvertPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Convierte tus videos de YouTube</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ConversionForm />
        </div>
      </div>
    </div>
  )
}
