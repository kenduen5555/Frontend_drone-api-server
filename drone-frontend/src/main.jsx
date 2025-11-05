import { ConfigProvider } from "./ConfigContext";
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import ConfigPage from "./pages/ConfigPage";
import LogFormPage from "./pages/LogFormPage";
import LogsPage from "./pages/LogsPage";

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg font-medium transition-colors
        ${isActive ? "bg-white text-blue-600 shadow-md" : "text-white hover:bg-blue-500 hover:bg-opacity-70"}
      `}
    >
      {children}
    </Link>
  );
};

const App = () => {
  return (
    <ConfigProvider>
      <BrowserRouter>
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
          <h1 className="text-3xl font-extrabold text-center md:text-4xl">Drone Dashboard</h1>
          <nav className="flex flex-wrap gap-4 justify-center mt-4">
            <NavLink to="/">View Config</NavLink>
            <NavLink to="/form">Temperature Log Form</NavLink>
            <NavLink to="/logs">View Logs</NavLink>
          </nav>
        </header>

        {/* Main Content */}
<main className="min-h-screen w-full p-6 bg-gradient-to-b from-purple-100 to-purple-200">
  <Routes>
    <Route path="/" element={<ConfigPage />} />
    <Route path="/form" element={<LogFormPage />} />
    <Route path="/logs" element={<LogsPage />} />
  </Routes>
</main>
      </BrowserRouter>
    </ConfigProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
