"use client"

import { useState } from "react"
import PredictionCard from "@/components/PredictionCard"
import FlareChart from "@/components/FlareChart"
import RiskDistributionChart from "@/components/RiskDistributionChart"
import FlareGallery from "@/components/FlareGallery"

// Generate dummy solar flare data
const generateFlareData = () => {
  const data = []
  const classes = ["C", "M", "X"]
  const now = new Date()

  for (let i = 0; i < 30; i++) {
    const date = new Date(now.getTime() - (29 - i) * 24 * 60 * 60 * 1000)
    const flareClass = classes[Math.floor(Math.random() * classes.length)]
    let intensity

    switch (flareClass) {
      case "C":
        intensity = Math.random() * 9 + 1 // 1-10
        break
      case "M":
        intensity = Math.random() * 9 + 10 // 10-19
        break
      case "X":
        intensity = Math.random() * 20 + 20 // 20-40
        break
      default:
        intensity = 5
    }

    data.push({
      date: date.toISOString().split("T")[0],
      intensity,
      class: flareClass,
    })
  }

  return data
}

const generatePrediction = () => {
  const rand = Math.random()
  if (rand < 0.7) return { risk: "Low", color: "green" }
  if (rand < 0.9) return { risk: "Moderate", color: "orange" }
  return { risk: "High", color: "red" }
}

export default function Home() {
  const [prediction, setPrediction] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const flareData = generateFlareData()

  const handlePrediction = async () => {
    setIsLoading(true)
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setPrediction(generatePrediction())
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-black text-yellow-400 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-300 drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]">
            ☀️ Solar Flare Predictor
          </h1>
          <p className="text-lg md:text-xl mb-8 text-orange-300">
            Simulating solar flare activity and predictions using Surya AI models.
          </p>

          {/* External Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://huggingface.co/nasa-ibm-ai4science/Surya-1.0/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              🤗 Hugging Face Surya
            </a>
            <a
              href="https://github.com/NASA-IMPACT/Surya"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(255,69,0,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              🐙 GitHub Surya
            </a>
          </div>
        </header>

        {/* Prediction Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <button
              onClick={handlePrediction}
              disabled={isLoading}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-xl rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(255,165,0,0.8)] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "🔄 Analyzing Solar Data..." : "🚀 Run Prediction"}
            </button>
          </div>

          {prediction && (
            <div className="flex justify-center">
              <PredictionCard prediction={prediction} />
            </div>
          )}
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-yellow-600">
            <h3 className="text-2xl font-bold mb-4 text-center text-yellow-300">Solar Flare Intensity Over Time</h3>
            <FlareChart data={flareData} />
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-orange-600">
            <h3 className="text-2xl font-bold mb-4 text-center text-orange-300">Risk Distribution</h3>
            <RiskDistributionChart />
          </div>
        </section>

        {/* Solar Flare Gallery */}
        <FlareGallery />
      </div>
    </div>
  )
}
