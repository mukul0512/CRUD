import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import PropTypes from "prop-types";

const Navbar = (props) => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    let location = useLocation();

    return (
        <nav className={`navbar navbar-expand-lg -${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'rgb(36 74 104)' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input
                            className="form-check-input"
                            onClick={() => { props.toggleMode(null) }}
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                        />
                        <label
                            className="form-check-label mx-1"
                            htmlFor="flexSwitchCheckDefault"
                        >
                            Toggle Mode
                        </label>
                    </div>
                    {!localStorage.getItem('token') ? <form className="d-flex">
                        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signUp" role="button">Sign Up</Link>
                    </form> : <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
                </div>
            </div>
        </nav>
    )
}

// Navbar.propTypes = {
//                     title: PropTypes.string.isRequired,
//                     aboutText: PropTypes.string.isRequired
//                 };

Navbar.defaultProps = {
    title: "CRUD",
    aboutText: "About",
};

export default Navbar;