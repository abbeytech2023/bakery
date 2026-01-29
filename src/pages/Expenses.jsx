// import TransactionList from "../components/TransactionList";

// export default function Expenses() {
//   return (
//     <div>
//       <h1 className="text-xl font-bold mb-2">Expenses</h1>
//       <ExpenseForm />
//       <TransactionList type="expense" />
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Simulating backend (Supabase) data
    const backendExpenses = [
      { id: 1, item: "Flour", amount: 15000, date: "2026-01-26" },
      { id: 2, item: "Eggs", amount: 7200, date: "2026-01-26" },
      { id: 3, item: "Sugar", amount: 4800, date: "2026-01-25" },
      { id: 4, item: "Power (Electricity)", amount: 6000, date: "2026-01-25" },
      { id: 5, item: "Yeast", amount: 2500, date: "2026-01-24" },
    ];

    setExpenses(backendExpenses);
  }, []);

  return (
    <div>
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-6">Expenses</h2>

      <ExpenseForm />

      {/* Expense Cards */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Expenses</h3>

        {expenses.length === 0 ? (
          <p className="text-gray-500">No expenses recorded yet</p>
        ) : (
          <ul className="divide-y">
            {expenses.map((expense) => (
              <li
                key={expense.id}
                className="flex justify-between items-center py-3"
              >
                <div>
                  <p className="font-medium">{expense.item}</p>
                  <p className="text-sm text-gray-500">{expense.date}</p>
                </div>

                <p className="font-bold text-red-600">
                  ₦{expense.amount.toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
