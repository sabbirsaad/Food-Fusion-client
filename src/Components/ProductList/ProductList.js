import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = (props) => {
  const { imageURL, name, weight, price } = props.product;
  // console.log("all props",props.products[0].name);
  return (
    <div className="product-container">
      <Card style={{ width: "18rem", border: "none" }} className="product-card">
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title className="text-center">
            {name} {weight}{" "}
          </Card.Title>
          <div className="d-flex justify-content-between mt-5">
            <h2>${price}</h2>
            <Link to="/checkout">
              <Button className="px-4" variant="warning">
                BUY
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductList;
