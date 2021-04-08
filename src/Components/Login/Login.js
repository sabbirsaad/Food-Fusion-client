import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { UserContext } from "../../App";
import "./Login.css";
import { handleGoogleSignIn, initializeLoginFramework } from "./LoginManager";
import Header from "../Header/Header";

const Login = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    error: "",
  });
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  initializeLoginFramework();

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    });
  };

  return (
      <>
      <Header />
      <div className="login-page">
        <div className="container google-login col-md-4 col-lg-3 col-6">
          <h2>User Login</h2>
          <Button
            onClick={googleSignIn}
            className="col-md-10"
            variant="outline-success"
            size="lg"
          >
            <FontAwesomeIcon icon={faGoogle} /> Sign in using Google
          </Button>
        </div>
      </div>
      </>
  );
};

export default Login;
