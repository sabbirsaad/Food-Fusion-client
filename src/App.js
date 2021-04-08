import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddProducts from "./Components/AddProducts/AddProducts";
import Admin from "./Components/Admin/Admin";
import Checkout from "./Components/Checkout/Checkout";
import Deals from "./Components/Deals/Deals";
import EditProducts from "./Components/EditProducts/EditProducts";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageProduct from "./Components/ManageProducts/ManageProduct";
import Orders from "./Components/Orders/Orders";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <PrivateRoute path="/manageProduct">
            <ManageProduct />
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProducts />
          </PrivateRoute>
          <PrivateRoute path="/editProduct">
            <EditProducts />
          </PrivateRoute>
          <PrivateRoute path="/deals">
            <Deals />
          </PrivateRoute>
          <Route path="/auth/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
