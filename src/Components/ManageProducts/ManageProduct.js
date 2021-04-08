import React, { useEffect, useState } from "react";
import "./ManageProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faThList } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import ManageProductList from "../ManageProductList/ManageProductList";
import spinner from "../../Images/spinner.gif";
import logo from '../../Images/logo.png';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://web-food-fusion.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div>
      <div class="sidebar">
        <Link to="/">
                <img src={logo} alt=""/>
        </Link>
        <NavLink to="/manageProduct">
          <FontAwesomeIcon icon={faThList} /> Manage Product
        </NavLink>
        <NavLink to="/addProduct">
          <FontAwesomeIcon icon={faPlus} /> Add Product
        </NavLink>
        <NavLink to="/editProduct">
          <FontAwesomeIcon icon={faEdit} /> Edit Product
        </NavLink>
      </div>

        <div className="content content-box">
          <div className="container box-container">
            <h2>Manage Product</h2>
            <br />
            <div className="container box-table">
            <div className="d-flex flex-column justify-content-center align-items-center">
            <table className="products-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Weight</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table>
            {products.length === 0 && (
              <img
                style={{ width: "80px ", marginTop: "60px" }}
                src={spinner}
                alt=""
              />
            )}
          </div>
          {products.map((product) => (
            <ManageProductList product={product}></ManageProductList>
          ))}
          </div>
          </div>
          </div>
    </div>
  );
};

export default ManageProduct;
