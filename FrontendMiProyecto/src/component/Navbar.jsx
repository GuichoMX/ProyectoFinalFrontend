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
                    <div class="container d-flex align-items-center justify-content-around">

                        <h1 class="logo"><a href="mainAdmin.html">Mi negocio</a></h1>

                        <nav id="navbar" class="navbar">
                            <ul>
                                <li><a class="nav-link scrollto" href="home">Inicio</a></li>
                                <li><a class="nav-link scrollto" href="huespedes">Huespedes</a></li>
                                <li><a class="nav-link scrollto" href="propiedades">Propiedades</a></li>
                                <li><a class="nav-link scrollto" href="login">Log in</a></li>
                                <li><a class="nav-link scrollto" href="home" onClick={logOut}>Log out</a></li>
                                <li><a class="nav-link scrollto" href="register">Register</a></li>
                            </ul>
                            <i class="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                    </div>
                    <script src="../assets/js/main.js"></script>
                </header>
                

                
        // <nav className="navbar navbar-expand navbar-dark bg-primary">
        //     {/* Elementos a la izquierda */}
        //     <div className="navbar-nav mr-auto">
        //         <li className="nav-item">
        //             <Link to={"/home"} className="nav-link">
        //                 Home
        //             </Link>
        //         </li>
        //         {signedUser && (
        //             <ul>
        //                 <li style={{ display: 'inline' }}>
        //                     <Link to={"/propiedades"} className="nav-link">
        //                         Propiedades
        //                     </Link>
        //                 </li>
        //                 <li style={{ display: 'inline' }}>
        //                     <Link to={"/huespedes"} className="nav-link">
        //                         Huespedes
        //                     </Link>
        //                 </li>
        //             </ul>
        //         )}
        //     </div>

        //     {/* Elementos a la derecha */}
        //     <div className="navbar-nav ms-auto">
        //         {signedUser ? (
        //             <li className="nav-item">
        //                 <a href="/signin" className="nav-link" onClick={logOut}>
        //                     Logout
        //                 </a>
        //             </li>
        //         ) : (
        //             <>
        //                 <li className="nav-item">
        //                     <Link to={"/login"} className="nav-link">
        //                         Login
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to={"/register"} className="nav-link">
        //                         Register
        //                     </Link>
        //                 </li>
        //             </>
        //         )}
        //     </div>
        // </nav>
    )
} 