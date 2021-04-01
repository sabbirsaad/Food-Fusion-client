import React from "react";
import "./ManageProduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faThList } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

const ManageProduct = () => {
  return (
    <>
      <div class="sidebar">
        <NavLink to="/manageProduct"><FontAwesomeIcon icon={faThList} /> Manage Product</NavLink>
        <NavLink to="/addProducts"><FontAwesomeIcon icon={faPlus} /> Add Product</NavLink>
        <NavLink to="/editProduct"><FontAwesomeIcon icon={faEdit} /> Edit Product</NavLink>
      </div>

      <div className="content">
        <div className="container-box">
          <h2>Manage Product</h2>
          <br />
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Weight</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>1</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>1</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>Total</td>
                <td></td>
                <td>Price</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageProduct;
