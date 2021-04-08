import React, { useEffect, useState } from "react";
import "./ManageProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faThList } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import ManageProductList from "../ManageProductList/ManageProductList";
import spinner from '../../Images/spinner.gif';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div>
      <div class="sidebar">
        <NavLink to="/manageProduct">
          <FontAwesomeIcon icon={faThList} /> Manage Product
        </NavLink>
        <NavLink to="/addProducts">
          <FontAwesomeIcon icon={faPlus} /> Add Product
        </NavLink>
        <NavLink to="/editProduct">
          <FontAwesomeIcon icon={faEdit} /> Edit Product
        </NavLink>
      </div>

      <div className="content">
        <div className="container-box">
          <h2>Manage Product</h2>
          <br />
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
          { products.length === 0 && <img style={{width: "80px ", marginTop: "100px"}} src={spinner} alt=""/> }
        </div>
          {products.map((product) => (
            <ManageProductList product={product}></ManageProductList>
          ))}
      </div>
    </div>
  );
};

export default ManageProduct;
