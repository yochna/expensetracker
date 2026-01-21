import { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import "./Landing.css";
import { Navigate, useNavigate } from "react-router-dom";
import Dashboard from "../../../pages/Dashboard";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);
const isdark = document.body.classList.contains("dark");
const BudgetCircle = ({ percentage }) => {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    let current = 0;
    const animate = () => {
      current += 1;
      if (current <= percentage) {
        setFill(current);
        requestAnimationFrame(animate);
      }
    };
    animate();
  }, [percentage]);

  return (
    <div
      className="budget-circle"
      style={{
        background: `conic-gradient(#6366f1 ${fill}%, var(--circle-bg) 0)`,
      }}
    >
      <span>{fill}%</span>
      <p>Budget Used</p>
    </div>
  );
};

const Landing = () => {
  const navigate = useNavigate()
  const monthlyData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Monthly",
        data: [2800, 3600, 3200, 4000],
        backgroundColor: "rgba(99,102,241,0.45)",
        borderColor: "#6366f1",
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  const allTimeData = {
    labels: ["Food", "Bills", "Entertainment", "Shopping", "Other"],
    datasets: [
      {
        label: "All Time",
        data: [45000, 28000, 22000, 30000, 15000],
        backgroundColor: [
          "rgba(99,102,241,0.45)",
          "rgba(79,70,229,0.45)",
          "rgba(147,197,253,0.45)",
          "rgba(67,56,202,0.45)",
          "rgba(191,219,254,0.45)",
        ],
        borderColor: ["#6366f1", "#4f46e5", "#93c5fd", "#4338ca", "#bfdbfe"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <main className="landing">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-pill">Smart Expense Tracking</span>
          <h1 className="hero-title">
            One Dashboard for <br />
            <span>Complete Expense Control</span>
          </h1>
          <p className="hero-subtitle">
            Track spending, manage budgets, and gain financial clarity with a
            clean, modern experience built for you.
          </p>
          <button className="hero-primary" onClick={()=> navigate("/Signup")}>Get Started</button>
        </div>
      </section>
      <section className="features">
        <div className="features-ui">
          {/* LEFT */}
          <div className="features-left glass-card">
            <p className="label">Monthly Overview</p>
            <h2 className="big-value">₹18,420</h2>

            <div className="mini-card">
              <span>Income</span>
              <strong>₹32,000</strong>
            </div>
            <div className="mini-card">
              <span>Expenses</span>
              <strong>₹13,580</strong>
            </div>
            <div className="mini-card">
              <span>Savings</span>
              <strong>₹18,420</strong>
            </div>
          </div>

          {/* CENTER */}
          <div className="features-center">
            <div className="flow-item active">Expense</div>
            <div className="flow-line" />
            <div className="flow-item active">Categories</div>
            <div className="flow-line" />
            <div className="flow-item active">Insights</div>
          </div>

          {/* RIGHT */}
          <div className="features-right">
            <BudgetCircle percentage={72} />
          </div>
        </div>

        <div className="feature-pills">
          <span>Expense Tracking</span>
          <span>Budget Planning</span>
          <span>Category Analysis</span>
          <span>Monthly Reports</span>
          <span>Secure Data</span>
        </div>
      </section>

      {/* CHARTS SECTION */}
      <section className="charts-section">
        <div className="charts-container">
          <div className="charts-header">
            <h2>Insightful Analytics</h2>
            <p>Monthly performance and lifetime spending breakdown.</p>
          </div>

          <div className="charts-visuals">
            <div className="chart-card">
              <h3>Monthly Expenses</h3>
              <div className="chart-area">
                <Bar
                  data={monthlyData}
                  options={{
                    plugins: { legend: { display: false } },
                    scales: {
                      y: {
                        tricks: {
                          color: isdark ? "#e5e7eb" : "#475569",
                        },
                        grid: {
                          color: isdark
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(0,0,0,0.06)",
                        },
                      },
                      x: {
                        tricks: {
                          color: isdark ? "#e5e7eb" : "#475569",
                        },
                        grid: {
                          color: isdark
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(0,0,0,0.06)",
                        },
                      },
                    },
                    animation: { duration: 1100 },
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </div>

            <div className="chart-card">
              <h3>All-Time Spending</h3>
              <div className="chart-area">
                <Pie
                  data={allTimeData}
                  options={{
                    plugins: {
                      legend: { labels: { color: "rgba(111, 118, 183, 0.8)" } },
                    },
                    animation: { duration: 1100 },
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURE SHOWCASE SECTION */}
      <section className="feature-showcase">
        {/* Animated background blobs */}
        <div className="fs-blob blob1"></div>
        <div className="fs-blob blob2"></div>

        {/* Floating particles */}
        <div className="fs-particles">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="fs-particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                animationDuration: `${Math.random() * 30 + 20}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="feature-showcase-content">
          {/* Left Text */}
          <div className="fs-text">
            <h2>Features That Empower You</h2>
            <p>
              Everything you need to make smarter spending decisions. Track,
              analyze, and control your expenses with ease.
            </p>
          </div>

          {/* Right Cards */}
          <div className="fs-cards">
            {/* Radial gradient behind cards */}
            <div className="fs-cards-bg"></div>

            <div className="fs-card fs-card-1">
              <h3>Smart Budgeting</h3>
              <p>Automated budgets that adapt to your habits.</p>
            </div>
            <div className="fs-card fs-card-2">
              <h3>Insight Reports</h3>
              <p>Monthly views of your expenses and savings.</p>
            </div>
            <div className="fs-card fs-card-3">
              <h3>Category Analysis</h3>
              <p>Understand exactly where your money goes.</p>
            </div>
            <div className="fs-card fs-card-4">
              <h3>Real-Time Alerts</h3>
              <p>Receive alerts about overspending instantly.</p>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-left">
            <h2>SpendWise</h2>
            <p>
              Track spending, manage budgets, and gain financial clarity. All
              your finance insights in one place.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Dashboard</a>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 ExpenseTracker. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Landing;
