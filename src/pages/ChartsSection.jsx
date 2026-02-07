import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const ChartsSection = ({ expenses }) => {
  const income = expenses.filter(e => e.type === "Income").reduce((a,b) => a + b.amount, 0);
  const expense = expenses.filter(e => e.type === "Expense").reduce((a,b) => a + b.amount, 0);
  const remaining = income - expense;

  const data = {
    labels: ["Income", "Expense", "Remaining"],
    datasets: [
      {
        label: "Amount",
        data: [income, expense, remaining],
        backgroundColor: [
          "rgba(106, 150, 178, 0.7)",   // Soft sky blue for Income
          "rgba(48, 70, 99, 0.7)",   // Frosty steel blue for Expense
          "rgba(66, 113, 128, 0.7)"    // Light blue for Remaining
        ],
        borderRadius: 10,
        barPercentage: 0.5
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Financial Overview",
        color: "#2e323b", // subtle gray
        font: { size: 18, weight: "500" }
      },
      tooltip: {
        backgroundColor: "rgba(55,65,81,0.85)",
        titleColor: "#f3f4f6",
        bodyColor: "#f3f4f6",
      }
    },
    scales: {
      x: {
        ticks: { color: "#6b7280", font: { size: 13 } },
        grid: { display: false }
      },
      y: {
        ticks: { color: "#2f343d", font: { size: 12 }, beginAtZero: true },
        grid: {
          color: "rgba(207,224,232,0.3)", // subtle frosty grid
          borderDash: [4, 4]
        }
      }
    }
  };

  return (
    <div className="chart-card">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartsSection;
