import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList/ProductList';
import './Home.css';
import spinner from '../../Images/spinner.gif';

const Home = () => {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="products-container">
            { products.length === 0 && <img style={{width: "100px ", marginTop: "180px"}} src={spinner} alt=""/> }
            {
                products.map(product => <ProductList product={product}></ProductList>)
            }
        </div>
    );
};

export default Home;