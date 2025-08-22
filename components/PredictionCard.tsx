interface PredictionCardProps {
  prediction: {
    risk: string
    color: string
  }
}

export default function PredictionCard({ prediction }: PredictionCardProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return {
          bg: "bg-green-900",
          border: "border-green-400",
          text: "text-green-300",
          glow: "shadow-[0_0_20px_rgba(34,197,94,0.5)]",
        }
      case "orange":
        return {
          bg: "bg-orange-900",
          border: "border-orange-400",
          text: "text-orange-300",
          glow: "shadow-[0_0_20px_rgba(251,146,60,0.5)]",
        }
      case "red":
        return {
          bg: "bg-red-900",
          border: "border-red-400",
          text: "text-red-300",
          glow: "shadow-[0_0_20px_rgba(239,68,68,0.5)]",
        }
      default:
        return {
          bg: "bg-gray-900",
          border: "border-gray-400",
          text: "text-gray-300",
          glow: "shadow-lg",
        }
    }
  }

  const colors = getColorClasses(prediction.color)

  return (
    <div
      className={`${colors.bg} ${colors.border} ${colors.glow} border-2 rounded-lg p-8 max-w-md w-full transition-all duration-300`}
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-yellow-300">Prediction Result</h3>
        <div className={`text-4xl font-bold ${colors.text} mb-2`}>{prediction.risk} Risk</div>
        <p className="text-gray-300">Solar flare activity prediction based on current solar conditions</p>
      </div>
    </div>
  )
}
