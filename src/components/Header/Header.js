import React from 'react';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className = 'header'>
        
            <img  src={Logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
          
        </div>
    );
};

export default Header;