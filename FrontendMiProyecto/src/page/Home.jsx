import aboutPic from "../assets/img/about_section.jpg"

export const Home = () => {
    const logOut = () => {
        AuthService.logout();
    };
    return (

        <div>
            <div className="head">
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Mi negocio</title>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                    <script src="https://code.iconify.design/iconify-icon/1.0.0-beta.3/iconify-icon.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>

            </div>
            <body>
                <header id="header" className="fixed-top ">
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

                <section id="hero">
                    <div className="contenedor-hero">
                        <h3>Bienvenido!</h3>
                        <h1>ET Real Estate</h1>
                        <h2>Este es un sistema de gestion de un proyecto personal, te invito a iniciar sesion!</h2>
                    </div>
                </section>

                <main id="main">
                    <section id="acercaDe" className="acercaDe">
                        <div className="section-caja" data-aos="fade-up">
                            <div className="row gx-0">
                                <div className="col-lg-6 caja-info">
                                    <h1>Acerca de este sitio</h1>
                                    <div className="contenido">
                                        <h3>¿Qué es este sitio?</h3>
                                        <h2>Desarrollado como un proyecto personal para la resolución de un problema</h2>
                                        <p>
                                            Este es el resultado del desarrollo de un proyecto personal en un curso de programación.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 acercaDeImagen">
                                    <img src={aboutPic} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contacto" className="contacto">
                        <div className="section-caja">
                            <div className="section-contacto" data-aos="fade-down">
                                <span>Contáctame</span>
                                <h2>Contáctame</h2>
                            </div>

                            <div className="contacto-params">
                                <div className="col-lg-4 col-md-12">
                                    <div className="info-box">
                                        <iconify-icon icon="fluent:globe-location-20-regular"></iconify-icon>
                                        <h3>Dirección</h3>
                                        <p>Cancún, Quintana Roo</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <div className="info-box">
                                        <iconify-icon icon="clarity:email-outline-alerted"></iconify-icon>
                                        <h3>Escríbeme!</h3>
                                        <p>escobedotrenado@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <div className="info-box">
                                        <iconify-icon icon="bx:phone-call"></iconify-icon>
                                        <h3>Contáctame</h3>
                                        <p>99 81 86 43 48</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>

                <a href="#" className="back-to-top"><i className="bi bi-arrow-up-short"></i></a>
                <script src="../assets/js/main.js"></script>
            </body>
        </div>
    )
}