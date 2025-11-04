import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConfigPage from "./ConfigPage";
import LogForm from "./LogForm";
import LogList from "./LogList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConfigPage />} />
        <Route path="/logform" element={<LogForm />} />
        <Route path="/logs" element={<LogList />} />
      </Routes>
    </Router>
  );
}

export default App;
