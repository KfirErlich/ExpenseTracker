import React from 'react';
import MainHeader from './MainHeader';
import './MainNavigation.css';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import HeaderImage from '../UIElements/HeaderImage'

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
          <HeaderImage imageUrl="/expenseIcon.png" altText="Logo"/>
          </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
    </MainHeader>;
}

export default MainNavigation;