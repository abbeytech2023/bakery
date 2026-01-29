import { useEffect, useState } from "react";

export default function TransactionList({ type }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = JSON.parse(
        localStorage.getItem(type === "expense" ? "expenses" : "income") ||
          "[]",
      );
      setTransactions(data);
    };
    fetchData();
    window.addEventListener("storageUpdated", fetchData);
    return () => window.removeEventListener("storageUpdated", fetchData);
  }, [type]);

  if (!transactions.length) return <p>No {type} recorded yet.</p>;

  return (
    <table className="border-collapse border w-full">
      <thead>
        <tr>
          <th className="border p-1">Date</th>
          <th className="border p-1">
            {type === "expense" ? "Item" : "Source"}
          </th>
          <th className="border p-1">Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t, i) => (
          <tr key={i}>
            <td className="border p-1">{t.date}</td>
            <td className="border p-1">{t.item || t.source}</td>
            <td className="border p-1">{t.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
