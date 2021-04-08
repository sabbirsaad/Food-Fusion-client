import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
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
                <a className="navbar-brand" href="/">
                <img src={logo} alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse right-nav" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="/orders">Orders</Link>
                        <Link className="nav-link" to="/admin">Admin</Link>
                        <Link className="nav-link" to="/deals">Deals</Link>
                        {loggedInUser ? <Button variant="secondary" onClick={()=>setLoggedInUser(false)} >Sign out</Button> :
                        <Link to="/auth/login">
                        <button className="btn btn-success">Login</button> </Link>
                        }
                       
                        
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;