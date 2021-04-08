import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderList from '../OrderList/OrderList';
import './Orders.css';
import spinner from '../../Images/spinner.gif';

const Orders = () => {
    const [ orders, setOrders ] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect( () => {
        fetch("http://localhost:5000/orders?email="+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
       <div>
            <div className="order-container container">
            <h2>Order Details</h2>
            <br/><br/>
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
          { orders.length === 0 && <img style={{width: "80px ", marginTop: "100px"}} src={spinner} alt=""/> }
          </div>
                {
                    orders.map(order => <OrderList order={order}></OrderList>)
                }
       </div>
    );
};

export default Orders;