import React from 'react'
import navbar from '../styles/navbar.css'

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className='my_shop' onClick={()=>setShow(true)}>
                Shop with us
            </span>

            <div className='cart' onClick={()=>setShow(false)}>
                <span>
                <i className='fas fa-cart-plus'></i>
                </span>
            </div>


        </div>
    </nav>
  )
}

export default Navbar
