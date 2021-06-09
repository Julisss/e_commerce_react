import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = () => (
    <header className="header">
        <div className="container header-container">
            <Link to="/">
                <Logo className="logo"/>
            </Link>
            <div className="header-menu">
                <Link className="header-menu-item" to="/shop">Shop</Link>
                <Link className="header-menu-item" to="/contact">Contact</Link>
                <Link className="header-menu-item" to="/shop">Shop</Link>
            </div>
        </div>
    </header>
)

export default Header