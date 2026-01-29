import { useState } from "react";

export default function ExpenseForm() {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    expenses.push({ item, amount: parseFloat(amount), date: new Date().toLocaleDateString() });
    localStorage.setItem("expenses", JSON.stringify(expenses));
    setItem("");
    setAmount("");
    window.dispatchEvent(new Event("storageUpdated"));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Expense item (e.g., flour)"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        required
        className="border p-1 mr-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="border p-1 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-1">Add Expense</button>
    </form>
  );
}
