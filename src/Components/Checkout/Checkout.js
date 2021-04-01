import React from "react";
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-box">
        <h2>Checkout</h2><br/>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
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
  );
};

export default Checkout;
