import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import "./Checkout.css";

const Checkout = () => {
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://web-food-fusion.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [id]);

  const handleOrder = () => {
    const newOrder = {
      ...loggedInUser,
      name: product.name,
      price: product.price,
      imageURL: product.imageURL,
      weight: product.weight,
      orderTime: new Date(),
    };
    fetch("https://web-food-fusion.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Ordered successfully");
      })
      .catch((err) => console.log(err));
  };

  const { name, price } = product;
  return (
    <>
     <Header />
      <div className="container checkout-box">
       
        <h2>Checkout</h2>
        <br />
        <table id="checkout-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>1</td>
              <td>${price}</td>
            </tr>
            <tr id="total">
              <td>Total</td>
              <td></td>
              <td>${price}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className="d-flex container justify-content-end">
        <Button variant="success" onClick={handleOrder}>
          Checkout
        </Button>
      </div>
    </>
  );
};

export default Checkout;
