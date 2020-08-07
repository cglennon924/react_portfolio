import React from "react"
import { Link } from "react-router-dom";
import "./navbar.css"
import Resume from "../resume/Resume.pdf";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                    <Link
                        to="/"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/home"
                            ? "nav-link active"
                            : "nav-link"
                        }
                    >
                    Home
                    </Link>
                    </li>
                    <li className="nav-item active">
                    <Link
                        to="/contact"
                        className={
                            window.location.pathname === "/contact" || window.location.pathname === "/contact"
                            ? "nav-link active"
                            : "nav-link"
                        }
                    >
                    Contact
                    </Link>
                    </li>
                    <li className="nav-item active">
                    <Link
                        to="/portfolio"
                        className={
                            window.location.pathname === "/portfolio" || window.location.pathname === "/portfolio" 
                            ? "nav-link active"
                            : "nav-link"
                        }
                    >
                    Portfolio
                    </Link>
                    </li>
                     <li className="nav-item active">
                        <a className="nav-link" href="https://www.linkedin.com/in/christopher-glennon-1660a1a3/">LinkedIn</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href={Resume}>Resume</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;