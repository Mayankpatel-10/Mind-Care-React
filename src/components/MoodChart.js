// src/components/MoodChart.js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MoodChart = () => {
  // Generate sample data for the last 7 days
  const dates = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric' }));
  }

  const moodValues = [3, 2, 4, 1, 3, 4, 5]; // Sample mood data (1-5 scale)

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Mood Level',
        data: moodValues,
        borderColor: '#b8860b',
        backgroundColor: 'rgba(184, 134, 11, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#b8860b',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#b8860b',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Your Mood Over the Last Week',
      },
    },
    scales: {
      y: {
        min: 1,
        max: 5,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            const moods = ['', 'Awful', 'Sad', 'Neutral', 'Good', 'Great'];
            return moods[value];
          }
        }
      },
    },
  };

  return (
    <section className="card trends-section">
      <h2>Your Mood Trends</h2>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </section>
  );
};

export default MoodChart;