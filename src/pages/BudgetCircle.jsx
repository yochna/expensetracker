import { useMemo } from "react";


const BudgetCircle = ({ expenses }) => {
  const { income, spent, remaining, percentage } = useMemo(() => {
    let income = 0;
    let spent = 0;

    expenses.forEach((item) => {
      if (item.type === "Income") income += Number(item.amount);
      if (item.type === "Expense") spent += Number(item.amount);
    });

    const remaining = income - spent;
    const percentage =
      income === 0 ? 0 : Math.min((spent / income) * 100, 100);

    return { income, spent, remaining, percentage };
  }, [expenses]);

  return (
    <div className="budget-card">
      <h3>Budget</h3>

      <div className="circle-wrapper">
        <svg viewBox="0 0 36 36">
          <path
            className="bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="progress"
            strokeDasharray={`${percentage}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>

        <div className="center-text">
          <strong>{percentage.toFixed(0)}%</strong>
          <span>Used</span>
        </div>
      </div>

      <div className="budget-values">
        <div>
          <span>Income</span>
          <p>₹{income}</p>
        </div>
        <div>
          <span>Spent</span>
          <p className="danger">₹{spent}</p>
        </div>
        <div>
          <span>Left</span>
          <p className="success">₹{remaining}</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCircle;
