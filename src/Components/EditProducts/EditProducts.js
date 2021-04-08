import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faThList } from '@fortawesome/free-solid-svg-icons'
import logo from '../../Images/logo.png';

const EditProducts = () => {
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
      <div class="content text-center" >
          <h1 style={{marginTop: "200px"}}>New Feature is coming soon</h1>
      </div>
    </div>
  );
};

export default EditProducts;
