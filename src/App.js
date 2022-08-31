import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calandar from "./pages/Calandar";
import Record from "./pages/Record";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calandar />} />
        <Route path="/record" element={<Record />} />
      </Routes>
    </Router>
  );
}

export default App;
