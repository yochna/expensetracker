import { useState, useEffect } from "react";

export default function AddTransactionModal({
  isOpen,
  onClose,
  onAdd,
  type, // "Income" or "Expense"
}) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    note: "",
  });

  // reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setForm({
        title: "",
        amount: "",
        category: "",
        date: "",
        note: "",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      title: form.title,
      amount: Number(form.amount),
      category: form.category,
      date: form.date,
      note: form.note,
      type, // IMPORTANT: matches "Income" / "Expense"
    };

    onAdd(newTransaction);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="modal-header">
          <h3>Add {type}</h3>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* FORM */}
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <textarea
            name="note"
            placeholder="Note (optional)"
            value={form.note}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Add {type}
          </button>
        </form>
      </div>
    </div>
  );
}
