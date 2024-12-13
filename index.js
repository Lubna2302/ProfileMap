// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 import
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Correct import for Router

// Create the root and render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
