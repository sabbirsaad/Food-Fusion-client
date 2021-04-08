import React from "react";
import "./OrderList.css";

const OrderList = (props) => {
  const { name, weight, price, orderTime } = props.order;
  return (
    <div>
      <table className="orderlist-table">
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{weight}</td>
            <td>${price}</td>
            <td>{new Date(orderTime).toDateString("dd/MM/yyyy")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
