import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (

        <div className='main-panel container mt-5 mb-5'>
            <div className='content-wrapper'>
                <div className='row'>
                    <div className='col-lg-6 mt-3' >
                        <div to='/UpdatePersonal' className='card card-1 card-home position-relative' style={{ cursor: "pointer" }}>
                            <div className='card-body text-white position-absolute top-50 start-50 translate-middle'>
                                <i className="fa-solid fa-4x fa-shop ms-3" />
                                <h3 className='mt-3' >Visit Shop</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-3'>
                        <div to='/UpdateSocial' className='card card-2 card-home position-relative' style={{ cursor: "pointer" }}>
                            <div className='centertext text-white position-absolute top-50 start-50 translate-middle'>
                                <i className="fa-solid fa-4x fa-user ms-3" />
                                <h3 className='mt-3'>Profiles</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-3'>
                        <Link to='/WorkVideo' className='card card-3 card-home position-relative' style={{ cursor: "pointer" }}>
                            <div className='centertext text-white position-absolute top-50 start-50 translate-middle'>
                                <i class="fa-solid fa-4x fa-globe ms-5"></i>
                                <h3 className='mt-3'>How It Works</h3>
                            </div>
                        </Link>
                    </div>
                    <div className='col-lg-6 mt-3'>
                        <Link to='/UpdateProfile' className='card card-4 card-home position-relative' style={{ cursor: "pointer" }}>
                            <div className='centertext text-white position-absolute top-50 start-50 translate-middle'>
                                <i class="fa-solid fa-4x fa-marker ms-5"></i>
                                <h3 className='mt-3'>Update Profile</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home