import { FiTrash } from "react-icons/fi";

const RecentTransactions = ({ expenses, onDelete }) => {
  return (
    <div className="recent-transactions">
      <div className="rt-header">
        <h3>Recent Transactions</h3>
        <span className="rt-count">{expenses.length}</span>
      </div>

      {expenses.length === 0 ? (
        <p className="rt-empty">
          No transactions yet. Start tracking your expenses 💸
        </p>
      ) : (
        <ul>
          {expenses
            .slice()
            .reverse()
            .map((item) => (
              <li
                key={item.id}
                className={`rt-item ${item.type.toLowerCase()}`}
              >
                <div className="rt-left">
                  <span className="rt-title">{item.title}</span>
                  <span className="rt-meta">
                    {item.type} • ₹{item.amount}
                  </span>
                </div>

                <div className="rt-right">
                  <span className={`rt-amount ${item.type.toLowerCase()}`}>
                    {item.type === "Expense" ? "-" : "+"}₹{item.amount}
                  </span>
                  <FiTrash
                    className="rt-delete"
                    onClick={() => onDelete(item.id)}
                  />
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default RecentTransactions;
