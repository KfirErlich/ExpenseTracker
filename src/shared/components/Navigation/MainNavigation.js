import React from 'react';
import MainHeader from './MainHeader';
import './MainNavigation.css';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

const MainNavigation = () => {
    return <MainHeader>
        <button
          className="main-navigation__menu-btn"
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">
          Expense Tracker
          <img src="/expenseIcon.png"
          alt="Logo" 
          style={{ 
            height: '50px', 
            verticalAlign: 'middle', 
            margin: '8px'
        }}/>
          </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
    </MainHeader>;
}

export default MainNavigation;