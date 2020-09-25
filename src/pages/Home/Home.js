import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../../components/ProductList/ProductList';

import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const res = await axios.get('https://5f6d7c1b60cf97001641aec1.mockapi.io/api/products');
            setProducts(res.data);
        }
        catch (e) {
            console.log(e);
        }

    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <ProductList products={products} />
        </div>
    )
}

export default Home;
