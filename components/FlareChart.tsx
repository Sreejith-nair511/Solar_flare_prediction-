"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface FlareData {
  date: string
  intensity: number
  class: string
}

interface FlareChartProps {
  data: FlareData[]
}

export default function FlareChart({ data }: FlareChartProps) {
  const chartData = {
    labels: data.map((d) => d.date.slice(-5)), // Show MM-DD
    datasets: [
      {
        label: "Solar Flare Intensity",
        data: data.map((d) => d.intensity),
        borderColor: "rgb(255, 165, 0)",
        backgroundColor: "rgba(255, 165, 0, 0.1)",
        borderWidth: 2,
        pointBackgroundColor: "rgb(255, 255, 0)",
        pointBorderColor: "rgb(255, 165, 0)",
        pointRadius: 4,
        tension: 0.4,
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
    scales: {
      x: {
        ticks: {
          color: "rgb(255, 165, 0)",
        },
        grid: {
          color: "rgba(255, 165, 0, 0.2)",
        },
      },
      y: {
        ticks: {
          color: "rgb(255, 165, 0)",
        },
        grid: {
          color: "rgba(255, 165, 0, 0.2)",
        },
      },
    },
  }

  return (
    <div className="h-64 md:h-80">
      <Line data={chartData} options={options} />
    </div>
  )
}
