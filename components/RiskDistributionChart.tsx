"use client"

import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

export default function RiskDistributionChart() {
  const data = {
    labels: ["Low Risk", "Moderate Risk", "High Risk"],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: ["rgba(34, 197, 94, 0.8)", "rgba(251, 146, 60, 0.8)", "rgba(239, 68, 68, 0.8)"],
        borderColor: ["rgb(34, 197, 94)", "rgb(251, 146, 60)", "rgb(239, 68, 68)"],
        borderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "rgb(255, 255, 0)",
        },
      },
    },
  }

  return (
    <div className="h-64 md:h-80">
      <Pie data={data} options={options} />
    </div>
  )
}
