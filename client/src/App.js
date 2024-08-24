import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";

import AdminPage from "./components/admin.js";
import User from "./components/User/User.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/User" element={<User />} />
          <Route path="/AdminPage" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
