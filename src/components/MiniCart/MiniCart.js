import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../store';

import './MiniCart.css';

const MiniCart = () => {
    const { store } = useContext(StoreContext);
    return (
        <div>
            <p>You have {store.cart.length} item/s in your cart</p>
            <Link to="/cart">View Cart</Link>
        </div>
    )
}

export default MiniCart;
