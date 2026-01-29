import { useEffect, useState } from "react";
import IncomeForm from "../components/IncomeForm";

export default function Income() {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    // Simulating backend (Supabase) data
    const backendIncome = [
      { id: 1, source: "Bread sales", amount: 35000, date: "2026-01-26" },
      { id: 2, source: "Cake sales", amount: 22000, date: "2026-01-26" },
      { id: 3, source: "Pastry sales", amount: 18000, date: "2026-01-25" },
      { id: 4, source: "Wholesale order", amount: 50000, date: "2026-01-25" },
      {
        id: 5,
        source: "Evening counter sales",
        amount: 12000,
        date: "2026-01-24",
      },
    ];

    setIncome(backendIncome);
  }, []);

  return (
    <div>
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-6">Income</h2>

      <IncomeForm />

      {/* Income Card */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Income</h3>

        {income.length === 0 ? (
          <p className="text-gray-500">No income recorded yet</p>
        ) : (
          <ul className="divide-y">
            {income.map((inc) => (
              <li
                key={inc.id}
                className="flex justify-between items-center py-3"
              >
                <div>
                  <p className="font-medium">{inc.source}</p>
                  <p className="text-sm text-gray-500">{inc.date}</p>
                </div>

                <p className="font-bold text-green-600">
                  ₦{inc.amount.toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
