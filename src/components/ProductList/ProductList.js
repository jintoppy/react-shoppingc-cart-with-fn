import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store';
import './ProductList.css';

const ProductList = ({ products }) => {
    const { dispatch } = useContext(StoreContext);

    const onAddToCartBtnClick = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                item,
                quantity: 1
            }
        });
    };

    const productDivList = products.map((item) => {
        return (
            <div className="product-list-item" key={item.id}>
                <h3>{item.title}</h3>
                <p>
                    <img src={item.imgUrl} alt={item.title} />
                </p>
                <button onClick={() => onAddToCartBtnClick(item)}>Add to Cart</button>
            </div>
        )
    });

    return (
        <div className="product-list">
            {productDivList}
        </div>
    )
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        imgUrl: PropTypes.string
    })).isRequired
};

export default ProductList;