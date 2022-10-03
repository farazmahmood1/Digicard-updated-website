import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><i className="fa-solid fa-qrcode" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign In</a>
                            </li>

                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                            </li> */}


                        </ul>
                        <div className="text-white float-right">
                            <a href className="me-4 text-reset">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="fab fa-google" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="fab fa-github" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar