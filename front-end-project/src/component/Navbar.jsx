import {React} from 'react';
import { NavLink } from 'react-router-dom';
import  { useSelector } from 'react-redux'

const Navbar = () => {
  const state =useSelector((state)=> state.handleCart)
    return(
        <div>
        <nav class="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div class="container">
          <NavLink class="navbar-brand fw-bold fs-4" to="#">Info Comp</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink class="nav-link " aria-current="page" to="/products">Products</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/about">About</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="buttons">
                <NavLink to='/login' className='btn btn-outline-dark'>
                   <i className="fa fa-sign-in me-1"></i> Login</NavLink>
                <NavLink to='/register' className='btn btn-outline-dark ms-2'>
                   <i className="fa fa-user-plus me-1"></i> Register</NavLink>
                <NavLink to='/cart' className='btn btn-outline-dark ms-2'>
                   <i className="fa fa-shopping-cart me-1"></i> Cart ({state.lenght})</NavLink>
            </div>
          </div>
        </div>
      </nav> 
        </div>
    )
}
export default Navbar;