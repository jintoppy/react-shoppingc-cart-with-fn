import React from 'react';
import MiniCart from '../MiniCart/MiniCart';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h2>Shopping Cart</h2>
            <MiniCart />
        </header>
    )
}

export default Header;
