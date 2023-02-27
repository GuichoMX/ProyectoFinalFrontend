import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AuthService } from '../auth'

export const Navbar = () => {

    const [signedUser, setSignedUser] = useState(false);

    useEffect(() => {
        setSignedUser(AuthService.isUserAuthenticated())
    }, []);

    const logOut = () => {
        AuthService.logout();
    };

    return (

        <header id="header">
                    <div className="container d-flex align-items-center justify-content-around">

                        <h1 className="logo"><a href="mainAdmin.html">ET REAL ESTATE</a></h1>

                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a className="nav-link scrollto" href="home">Inicio</a></li>
                                <li><a className="nav-link scrollto" href="huespedes">Huespedes</a></li>
                                <li><a className="nav-link scrollto" href="propiedades">Propiedades</a></li>
                                <li><a className="nav-link scrollto" href="login">Log in</a></li>
                                <li><a className="nav-link scrollto" href="home" onClick={logOut}>Log out</a></li>
                                <li><a className="nav-link scrollto" href="register">Register</a></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                    </div>
                </header>
                
    )
} 