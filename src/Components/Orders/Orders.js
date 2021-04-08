import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import OrderList from "../OrderList/OrderList";
import "./Orders.css";
import spinner from "../../Images/spinner.gif";
import Header from "../Header/Header";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      "https://web-food-fusion.herokuapp.com/orders?email=" + loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);
  return (
    <div className="order-box">
       <Header />
      <div className="order-container container">
        <h2>Order Details</h2>
        <div className="container order-list">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Weight</th>
                  <th>Price</th>
                  <th>Date</th>
                </tr>
              </thead>
            </table>
            {orders.length === 0 && (
              <img
                style={{ width: "80px ", marginTop: "60px" }}
                src={spinner}
                alt=""
              />
            )}
          </div>
          {orders.map((order) => (
            <OrderList order={order}></OrderList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
