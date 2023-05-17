import React from 'react';
import "./Navbar.css";
import {
    // BrowserRouter as Router,
    // Routes,
    // Route,
    Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            {/* <nav id='Navbar' className="navbar navbar-expand-lg bg-body-tertiary my-0" > */}
            {/* <div className="container-fluid" > */}
            <div className="navbar">
                {/* <div className="navbar-nav" > */}
                <Link id="links" to="/"><p>Home</p></Link>
                <Link id="links" to="/contact"><p>Contact</p></Link>
                <Link id="links" to="/about"><p>About</p></Link>
                <Link id="links" to="/story"><p>Stories</p></Link>
                {/* </div> */}
            </div>
            {/* </div> */}
            {/* </nav> */}
        </>
    )
}
