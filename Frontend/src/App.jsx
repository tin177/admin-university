import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Superadmin from "./components/superadmin";
import HRadmin from "./components/hradmin";

function App() {
  return (
    <Router>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Role pages */}
        <Route path="/superadmin/*" element={<Superadmin />} />
        <Route path="/hradmin/*" element={<HRadmin />} />

      </Routes>
    </Router>
  );
}

export default App;