import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';
import HeaderImage from '../UIElements/HeaderImage';

const NavLinks = () => {
    return <ul className="nav-links">
        <li>
        <NavLink to="/new/expense" exact>
        New Expense
        <HeaderImage imageUrl="/newExpenseIcon.png" altText="Logo"/>
        </NavLink>
        </li>
         <li>
        <NavLink to="/all/expenses" exact>
        All Expenses
        <HeaderImage imageUrl="/allExpenseIcon.png" altText="Logo"/>
        </NavLink>
        </li>
         <li>
        <NavLink to="/auth" exact>
        Authentication
        <HeaderImage imageUrl="/AuthenticationIcon.png" altText="Logo"/>
        </NavLink>
        </li>
    </ul>
}

export default NavLinks;