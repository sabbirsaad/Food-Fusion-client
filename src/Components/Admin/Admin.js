import React from "react";
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faThList } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div class="sidebar">
        <NavLink to="/manageProduct"><FontAwesomeIcon icon={faThList} /> Manage Product</NavLink>
        <NavLink to="/addProducts"><FontAwesomeIcon icon={faPlus} /> Add Product</NavLink>
        <NavLink to="/editProduct"><FontAwesomeIcon icon={faEdit} /> Edit Product</NavLink>
      </div>

      <div class="content"></div>
    </div>
  );
};

export default Admin;
