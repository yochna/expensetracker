const ActionButtons = ({ onIncome, onExpense }) => {
  return (
    <div className="action-buttons">
      <button className="btn income" onClick={onIncome}>
        + Add Income
      </button>
      <button className="btn expense" onClick={onExpense}>
        + Add Expense
      </button>
    </div>
  );
};

export default ActionButtons;
