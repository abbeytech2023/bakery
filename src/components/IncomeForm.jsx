import { useState } from "react";

export default function IncomeForm() {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const income = JSON.parse(localStorage.getItem("income") || "[]");
    income.push({
      source,
      amount: parseFloat(amount),
      date: new Date().toLocaleDateString(),
    });
    localStorage.setItem("income", JSON.stringify(income));
    setSource("");
    setAmount("");
    window.dispatchEvent(new Event("storageUpdated"));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Income source (e.g., sales)"
        value={source}
        onChange={(e) => setSource(e.target.value)}
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
      <button type="submit" className="bg-green-800 text-white p-1">
        Add Income
      </button>
    </form>
  );
}
