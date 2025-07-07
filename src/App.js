import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';
import React from 'react';
import MainNavigation from './shared/components/Navigation/MainNavigation';


import './App.css';


function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/auth" element={<h1>Authentication</h1>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App;
