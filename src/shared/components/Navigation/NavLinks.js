import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';
import HeaderImage from '../UIElements/HeaderImage';
import {AuthContext} from '../../context/auth-context'

const NavLinks = () => {
    const auth = useContext(AuthContext)
    return <ul className="nav-links">
        {auth.isLoggedIn && 
        <React.Fragment>
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
        <button onClick={auth.logout}>LOGOUT</button>
        <HeaderImage imageUrl="/logoutIcon.jpg" altText="Logo"/>
        </li>
        </React.Fragment>
        }
        {!auth.isLoggedIn &&
        <li>
        <NavLink to="/auth" exact>
        Authentication
        <HeaderImage imageUrl="/AuthenticationIcon.png" altText="Logo"/>
        </NavLink>
        </li>
        }
    </ul>
}

export default NavLinks;