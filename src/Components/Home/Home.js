import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductList from '../ProductList/ProductList';
import './Home.css';

const Home = () => {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="products-container">
            {products.length===0 && <Spinner animation="border" variant="success" />}
            {
                products.map(product => <ProductList product={product}></ProductList>)
            }
        </div>
    );
};

export default Home;