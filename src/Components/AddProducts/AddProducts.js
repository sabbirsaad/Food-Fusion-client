import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddProducts.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faThList } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

const AddProducts = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      weight: data.weight,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `http://localhost:5000/addProduct`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server"));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "7db5336e4efbb2bbf63730ad81ba0181");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div class="sidebar">
        <NavLink to="/manageProduct"><FontAwesomeIcon icon={faThList} /> Manage Product</NavLink>
        <NavLink to="/addProducts"><FontAwesomeIcon icon={faPlus} /> Add Product</NavLink>
        <NavLink to="/editProduct"><FontAwesomeIcon icon={faEdit} /> Edit Product</NavLink>
      </div>
      <div class="content">
        <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <Row>
              <Col md={6}>
                <label>Product Name</label> <br />
                <input
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Enter Product Name"
                  required
                  ref={register}
                />
              </Col>

              <Col md={6}>
                <label>Weight</label> <br />
                <input
                  name="weight"
                  type="text"
                  className="form-input"
                  placeholder="Enter Product Weight"
                  required
                  ref={register}
                />
              </Col>

              <Col md={6}>
                <label>Add Price</label> <br />
                <input
                  name="price"
                  type="text"
                  className="form-input"
                  placeholder="Enter Product Price"
                  required
                  ref={register}
                />
              </Col>

              <Col md={6}>
                <label>Add Photo</label> <br />
                <input
                  name="img"
                  type="file"
                  onChange={handleImageUpload}
                  required
                  ref={register}
                />
              </Col>

              <Col md={12} className="d-flex justify-content-end mt-4">
                <input type="submit" className="submit" value="Save" />
              </Col>
            </Row>
          </Container>
        </form>
      </div>
    </>
  );
};

export default AddProducts;
