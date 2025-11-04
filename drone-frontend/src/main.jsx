import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import ConfigPage from "./pages/ConfigPage";
import LogFormPage from "./pages/LogFormPage";
import LogsPage from "./pages/LogsPage";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="bg-blue-600 text-white p-4 flex gap-6 justify-center">
        <Link to="/" className="hover:underline">View Config</Link>
        <Link to="/form" className="hover:underline">Temperature Log Form</Link>
        <Link to="/logs" className="hover:underline">View Logs</Link>
      </nav>

      <div className="p-6 max-w-3xl mx-auto">
        <Routes>
          <Route path="/" element={<ConfigPage />} />
          <Route path="/form" element={<LogFormPage />} />
          <Route path="/logs" element={<LogsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
