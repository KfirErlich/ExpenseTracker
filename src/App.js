import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';
import React from 'react';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import HomePage from './user/Pages/HomePage';
import Auth from './user/Pages/Auth'


import './App.css';


function App() {
  return (
    <React.Fragment>
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/> 
          <Route path="/auth" element={<Auth/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
    </React.Fragment>
  )
}

export default App;
