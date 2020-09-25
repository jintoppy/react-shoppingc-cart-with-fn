import React from 'react';

export const initialState = {
    cart: []
};

export const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
            cart: [...state.cart, action.data]
        };
    }
    return state;
};

export const StoreContext = React.createContext();
