import Image from "next/image"

export default function FlareGallery() {
  const flareTypes = [
    {
      class: "C-Class",
      description: "Weak flares with minimal impact on Earth",
      intensity: "Low",
      color: "text-green-400",
    },
    {
      class: "M-Class",
      description: "Medium flares that can cause radio blackouts",
      intensity: "Moderate",
      color: "text-orange-400",
    },
    {
      class: "X-Class",
      description: "Strong flares that can disrupt satellites and power grids",
      intensity: "High",
      color: "text-red-400",
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-yellow-300">Solar Flare Classifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {flareTypes.map((flare, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-yellow-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,0,0.3)]"
          >
            <div className="aspect-square relative mb-4 rounded-lg overflow-hidden bg-gray-800">
              <Image
                src="/images/solar-flare-c.png"
                alt={`${flare.class} Solar Flare`}
                fill
                className="object-cover opacity-80"
              />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${flare.color}`}>{flare.class} Flare</h3>
            <p className="text-gray-300 mb-2">{flare.description}</p>
            <div className={`text-sm font-semibold ${flare.color}`}>Intensity: {flare.intensity}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
