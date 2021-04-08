import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
import logo from '../../Images/logo.png';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
        <nav className="top-nav fixed-top navbar navbar-light navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">
                <img src={logo} alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto right-nav">
                        <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="/orders">Orders</Link>
                        <Link className="nav-link" to="/addProduct">Admin</Link>
                        <Link className="nav-link" to="/deals">Deals</Link>
                          
                    </div>
                    {loggedInUser ? <Button variant="outline-secondary" onClick={()=>setLoggedInUser(false)} >Sign out</Button> :
                        <Link to="/auth/login">
                        <button className="btn btn-outline-success">Login</button> </Link>
                        }
                    <Link className="nav-link text-warning">{loggedInUser.name || loggedInUser.email }</Link>
                </div>
            </div>
        </nav>

        </div>
    );
};

export default Header;