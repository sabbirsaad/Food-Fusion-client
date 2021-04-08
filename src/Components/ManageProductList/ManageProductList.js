import React from "react";
import "./ManageProductList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ManageProductList = (props) => {
  const { name, weight, price, _id } = props.product;

  const handleDelete = (id) =>{
    fetch(`http://localhost:5000/delete/${id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(result=>{
      alert("deleted successfully")
    })
  }

  return (
    <div className="container">
      <table className="products-table">
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{weight}</td>
                <td>${price}</td>
               <td> <span onClick={()=>handleDelete(_id)} className="icon"><FontAwesomeIcon icon={faTrashAlt} /></span></td> 
              </tr>
            </tbody>
          </table>
    </div>
  );
};

export default ManageProductList;
