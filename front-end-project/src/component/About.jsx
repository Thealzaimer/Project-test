import React from 'react';
import { NavLink } from ' react-router-dom'

const About = () => {
    return(
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                        <p className="lead"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni repellat, aspernatur ipsum officiis unde, mollitia alias hic sequi expedita cupiditate quo assumenda veritatis nihil quisquam, iure sint necessitatibus voluptas eos rerum! Eos, unde! Beatae earum sequi consequuntur maiores harum tempora doloremque in cupiditate iure dicta laborum voluptatem voluptatum, aspernatur placeat?</p>
                        <NavLink to='/contact' className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex jutify-content-center">
                        <img src="https://www.consolebit.com/static/images/about-hm-img.png" alt="About Us"  height="400px" width="400px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About