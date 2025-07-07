import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';
import React from 'react';
import MainNavigation from './shared/components/Navigation/MainNavigation';


import './App.css';
import HomePage from './homePage/Pages/HomePage';


function App() {
  return (
    <React.Fragment>
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage isAuth='false'/>}/> 
        <Route path="/auth" element={<h1>Authentication</h1>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    </React.Fragment>
  )
}

export default App;
