import { FiArrowUpRight, FiArrowDownRight, FiCreditCard, FiSave } from "react-icons/fi";

const SummaryCards = ({ expenses }) => {
  const income = expenses
    .filter((e) => e.type === "Income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = expenses
    .filter((e) => e.type === "Expense")
    .reduce((a, b) => a + b.amount, 0);

  const remaining = income - expense;
  const savings = remaining;

  return (
    <div className="summary-cards">
      <div className="summary-card income">
        <div className="card-icon">
          <FiArrowUpRight />
        </div>
        <div className="card-info">
          <p>Total Income</p>
          <h3>₹{income}</h3>
        </div>
      </div>

      <div className="summary-card expense">
        <div className="card-icon">
          <FiArrowDownRight />
        </div>
        <div className="card-info">
          <p>Total Expense</p>
          <h3>₹{expense}</h3>
        </div>
      </div>

      <div className="summary-card remaining">
        <div className="card-icon">
          <FiCreditCard />
        </div>
        <div className="card-info">
          <p>Remaining</p>
          <h3>₹{remaining}</h3>
        </div>
      </div>

      <div className="summary-card saving">
        <div className="card-icon">
          <FiSave />
        </div>
        <div className="card-info">
          <p>Savings</p>
          <h3>₹{savings}</h3>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
