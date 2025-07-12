import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';
import React, {useState, useCallback} from 'react';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import HomePage from './user/Pages/HomePage';
import Auth from './user/Pages/Auth'
import AllExpenses from './user/Pages/AllExpenses'
import { AuthContext } from './shared/context/auth-context'


import './App.css';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(()=> {
    setIsLoggedIn(true);
  },[])

  const logout = useCallback(()=> {
    setIsLoggedIn(false);
  },[])

  let routes;

  if(isLoggedIn){
    routes = (
    <React.Fragment>
    <Route path="/" element={<HomePage/>}/>
    <Route path='/new/expense' element={<h1>NEW EXPENSE!</h1>}/>
    <Route path='/all/expenses' element={<AllExpenses/>}/>;
    <Route path="*" element={<Navigate to="/" replace />}/>;
    </React.Fragment>
    )
  }else {
    routes = (
    <React.Fragment>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/auth" element={<Auth/>}/>
    <Route path="*" element={<Navigate to="/" replace />}/>;
    </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <AuthContext.Provider value={{isLoggedIn, login, logout}}>
        <Router>
          <MainNavigation />
          <main>
            <Routes>
              {routes}
            </Routes>
          </main>
        </Router>
      </AuthContext.Provider>
    </React.Fragment>
  )
}

export default App;
