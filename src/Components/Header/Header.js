import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
        <nav className="top-nav fixed-top navbar navbar-light navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <h2>FOOD FUSION</h2>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="/orders">Orders</Link>
                        <Link className="nav-link" to="/admin">Admin</Link>
                        <Link className="nav-link" to="/deals">Deals</Link>
                        <Link to="/auth/login">
                            <button className="btn btn-success">Login</button>
                        </Link>
                        {loggedInUser && <Button variant="secondary" onClick={()=>setLoggedInUser(false)} >Sign out</Button>}
                        
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;