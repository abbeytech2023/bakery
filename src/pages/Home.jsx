const expenses = [
  {
    id: "exp-001",
    item: "Flour",
    amount: 15000,
    date: "2026-01-26",
  },
  {
    id: "exp-002",
    item: "Eggs",
    amount: 7200,
    date: "2026-01-26",
  },
  {
    id: "exp-003",
    item: "Sugar",
    amount: 4800,
    date: "2026-01-26",
  },
  {
    id: "exp-004",
    item: "Power (Electricity)",
    amount: 6000,
    date: "2026-01-26",
  },
  {
    id: "exp-005",
    item: "Yeast",
    amount: 2500,
    date: "2026-01-26",
  },
];

const income = [
  {
    id: "inc-001",
    source: "Bread sales",
    amount: 35000,
    date: "2026-01-26",
  },
  {
    id: "inc-002",
    source: "Cake sales",
    amount: 22000,
    date: "2026-01-26",
  },
  {
    id: "inc-003",
    source: "Pastry sales",
    amount: 18000,
    date: "2026-01-26",
  },
  {
    id: "inc-004",
    source: "Wholesale order",
    amount: 50000,
    date: "2026-01-26",
  },
  {
    id: "inc-005",
    source: "Evening counter sales",
    amount: 12000,
    date: "2026-01-26",
  },
];

export default function Home() {
  // Totals
  const totalExpenses = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const totalIncome = income.reduce((sum, i) => sum + Number(i.amount), 0);

  const profit = totalIncome - totalExpenses;

  // Recent items
  const recentExpenses = expenses.slice(0, 5);
  const recentIncome = income.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="text-gray-500">
          Overview of Top Choice Bakery daily performance
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 border-l-8 border-green-500">
          <p className="text-gray-500">Total Income</p>
          <h3 className="text-2xl font-bold text-green-600">
            ₦{totalIncome.toLocaleString()}
          </h3>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 border-l-8 border-red-500">
          <p className="text-gray-500">Total Expenses</p>
          <h3 className="text-2xl font-bold text-red-600">
            ₦{totalExpenses.toLocaleString()}
          </h3>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 border-l-8 border-purple-500">
          <p className="text-gray-500">Profit</p>
          <h3
            className={`text-2xl font-bold ${
              profit >= 0 ? "text-purple-600" : "text-red-600"
            }`}
          >
            ₦{profit.toLocaleString()}
          </h3>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 border-l-8 border-blue-500">
          <p className="text-gray-500">Transactions</p>
          <h3 className="text-2xl font-bold text-blue-600">
            {expenses.length + income.length}
          </h3>
        </div>
      </div>

      {/* Activity Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Expenses */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Expenses</h3>

          {recentExpenses.length === 0 ? (
            <p className="text-gray-500">No expenses recorded</p>
          ) : (
            <ul className="divide-y">
              {recentExpenses.map((e) => (
                <li
                  key={e.id}
                  className="flex justify-between items-center py-3"
                >
                  <div>
                    <p className="font-medium">{e.item}</p>
                    <p className="text-sm text-gray-500">{e.date}</p>
                  </div>
                  <p className="font-semibold text-red-600">
                    ₦{e.amount.toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Recent Income */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Income</h3>

          {recentIncome.length === 0 ? (
            <p className="text-gray-500">No income recorded</p>
          ) : (
            <ul className="divide-y">
              {recentIncome.map((i) => (
                <li
                  key={i.id}
                  className="flex justify-between items-center py-3"
                >
                  <div>
                    <p className="font-medium">{i.source}</p>
                    <p className="text-sm text-gray-500">{i.date}</p>
                  </div>
                  <p className="font-semibold text-green-600">
                    ₦{i.amount.toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Footer Insight */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-6 text-white shadow">
        <h3 className="text-xl font-bold">Today’s Insight</h3>
        <p className="mt-2">
          {profit >= 0
            ? "Your bakery is operating at a profit today. Keep it up! 🎉"
            : "Expenses are higher than income today. Review costs ⚠️"}
        </p>
      </div>
    </div>
  );
}
