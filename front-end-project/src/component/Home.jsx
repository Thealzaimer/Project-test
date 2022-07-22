import React from 'react';
import Products from './Products';

const Home = () => {
    return(
        <div className="hero">
            <div class="card bg-dark text-white border-0">
  <img src="https://img.rawpixel.com/private/static/images/website/2022-05/rm422-076-x.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e877fedea1136b8c616786d383ed70c3" class="card-img" alt="background" height="900px"/>
  <div class="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 class="card-title display-3 fw-bolder mb-0">NEW PRODUCTS</h5>
    <p class="card-text lead fs-2">CHECK ALL OUR PRODUCTS</p>
    </div>
  </div>
</div>
<Products/>
        </div>
    )
}
export default Home;