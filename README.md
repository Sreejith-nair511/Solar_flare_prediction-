Solar Flare Predictor

A mobile-optimized Next.js web app that simulates and visualizes solar flare activity using DATA obtained from NaSA+IBM surya initiative  , while integrating references to NASA Surya AI
 and Surya GitHub
.

This project is built with Next.js, Tailwind CSS, and Chart.js. It is optimized for phones with a retro-futuristic dark neon theme.

🚀 Features

📱 Mobile-first design (stacked cards, tap-friendly buttons, responsive charts).

🔮 Prediction Engine: Simulates flare risk with probabilities:

70% Low Risk (green)

20% Moderate Risk (orange)

10% High Risk (red)

📊 Visualizations:

Line chart of flare intensities over time.

Pie chart showing flare class distribution.

🌌 Solar Flare Gallery: Example images for C, M, and X class flares.

🎨 Retro UI: Dark background, neon glow text, smooth shadowed cards.

🔗 References:

Hugging Face Surya

GitHub Surya

📂 Project Structure
solar-flare-predictor/
│── pages/
│   ├── index.js        # Main UI
│   └── api/predict.js  # Mock prediction API (optional)
│── components/
│   └── PredictionCard.js
│── public/images/      # Solar flare images (C, M, X)
│── styles/
│   └── globals.css     # Tailwind setup
│── package.json
│── README.md

🛠️ Tech Stack

Next.js
 – React framework

Tailwind CSS
 – Styling

Chart.js
 & react-chartjs-2
 – Graphs

Node.js
 – Runtime

⚡ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/solar-flare-predictor.git
cd solar-flare-predictor

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev


App will be live at: http://localhost:3000

📱 Mobile Optimization

Line & pie charts scale full-width on small screens.

Cards and buttons stack vertically on phones.

Neon UI ensures readability and accessibility.
