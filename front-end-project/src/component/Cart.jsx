import React from 'react';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteCart } from '../redux/action';

const Cart = () => {
    const state = useSelector((state)=> state.addCart)
    const dispatch = useDispatch()

    const handleClose =(item) => {
        dispatch(deleteCart(item))
    }

    const cartItems = (cartItems) => {
        return (
            <div className='px-4 my-5 bg-light rounded-3' key={cartItems.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItems)} className="btn-close float-end" aria-label='Close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItems.image} alt={cartItems.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4 ">
                            <h3>{cartItems}</h3>
                            <p className='lead fw-bold'>${cartItems.price}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    const emptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className="container py-4">
                    <div className="row">
                        <h3>Your cart is empty </h3>
                    </div>
                </div>
            </div>
        );
    }

    
    return (
        <div>
            {state.lenght === 0 && emptyCart()}
            {state.lenght !== 0 && state.map(cartItems)}
        </div>
    )
}

export default Cart ;