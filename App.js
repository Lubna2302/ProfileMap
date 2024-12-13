// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Add other routes as needed */}
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/admin" element={<div>Admin Dashboard</div>} />
      </Routes>
    </Router>
  );
}

export default App;
