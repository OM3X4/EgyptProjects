import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);
gsap.registerPlugin(ScrollTrigger);

const AnimatedLineChart = () => {
  const chartContainer = useRef(null);
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue Growth",
        data: [0, 0, 0, 0, 0, 0], // Initially zero
        borderColor: "#007bff",
        borderWidth: 3,
        fill: false,
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    if (!chartContainer.current) return;

    let newData = [10, 25, 40, 60, 80, 100]; // Target values

    gsap.to({ progress: 0 }, {
      progress: 1,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: chartContainer.current,
        start: "top 80%",
        once: true, // Ensures animation only runs once
        onUpdate: (self) => {
          let animatedData = newData.map(value => value * self.progress);
          setChartData(prevData => ({
            ...prevData,
            datasets: [
              {
                ...prevData.datasets[0],
                data: animatedData,
              },
            ],
          }));
        },
      },
    });

  }, []);

  return (
    <div style={{ height: "150vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h2>Scroll Down to Animate Chart 📈</h2>
      <div ref={chartContainer} style={{ width: "600px", height: "400px" }}>
        <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false, animation: false }} />
      </div>
    </div>
  );
};

export default AnimatedLineChart;
