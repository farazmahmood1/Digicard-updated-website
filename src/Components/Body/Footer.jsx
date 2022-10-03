import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='footer '>
                {/* Remove the container if you want to extend the Footer to full width. */}
                <div className="">
                    {/* Footer */}
                    <footer className="text-center text-lg-start text-white bg-dark" >
                        {/* Section: Social media  */}
                        <section className="d-flex justify-content-between p-4"  style={{ background: "linear-gradient(#404040, #484848)" }}>
                            {/* Left */}
                            <div className="me-5">
                                <span>Get connected with us on social networks:</span>
                            </div>
                            {/* Left */}
                            {/* Right */}
                            <div>
                                <a href className="text-white me-4">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href className="text-white me-4">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href className="text-white me-4">
                                    <i className="fab fa-google" />
                                </a>
                                <a href className="text-white me-4">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href className="text-white me-4">
                                    <i className="fab fa-linkedin" />
                                </a>
                                <a href className="text-white me-4">
                                    <i className="fab fa-github" />
                                </a>
                            </div>
                            {/* Right */}
                        </section>
                        {/* Section: Social media */}
                        {/* Section: Links  */}
                        <section className>
                            <div className="container text-center text-md-start mt-5">
                                {/* Grid row */}
                                <div className="row mt-3">
                                    {/* Grid column */}
                                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        {/* Content */}
                                        <h6 className="text-uppercase fw-bold">Company name</h6>
                                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                        <p>
                                            Here you can use rows and columns to organize your footer
                                            content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit.
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* Links */}
                                        <h6 className="text-uppercase fw-bold">Products</h6>
                                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                        <p>
                                            <a href="#!" className="text-white">MDBootstrap</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-white">MDWordPress</a>
                                        </p>


                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* Links */}
                                        <h6 className="text-uppercase fw-bold">Useful links</h6>
                                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                        <p>
                                            <a href="#!" className="text-white">Your Account</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-white">Become an Affiliate</a>
                                        </p>

                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        {/* Links */}
                                        <h6 className="text-uppercase fw-bold">Contact</h6>
                                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                        <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
                                        <p><i className="fas fa-envelope mr-3" /> info@example.com</p>

                                    </div>
                                    {/* Grid column */}
                                </div>
                                {/* Grid row */}
                            </div>
                        </section>
                        {/* Section: Links  */}
                        {/* Copyright style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} */}
                        <hr className='bg-secondary' />
                        <div className="text-center p-3 bg-dark" >
                            © 2022 Copyright:
                            <a className="text-white ms-2" href="#" target={'_blank'}>Alphanites.com</a>
                        </div>
                        {/* Copyright */}
                    </footer>
                    {/* Footer */}
                </div>
                {/* End of .container */}
            </footer>
        </div>
    )
}

export default Footer