import React from "react"
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="index.html" title="Home">Christopher Glennon</a>
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
                        <a className="nav-link" href="https://docs.google.com/document/d/1MEfWit68gdNQNe6RbvpvxVyf04sOF5HIlTBnoiDQ21g/edit?usp=sharing">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;