import { NavLink } from "react-router-dom";

export default function Navigation() {
  const linkStyle = ({ isActive }) => ({
    marginRight: "12px",
    textDecoration: "none",
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#2563eb" : "#000",
  });

  return (
    <nav style={{ marginBottom: "20px" }}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/expenses" style={linkStyle}>
        Expenses
      </NavLink>

      <NavLink to="/income" style={linkStyle}>
        Income
      </NavLink>
    </nav>
  );
}
