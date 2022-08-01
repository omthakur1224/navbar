import React from 'react'
import Cart from './Cart'
import './Nav.css'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <>
    <div className='nav'>
        <div>
        <Link to={'/'} style={{"textDecoration":"none","fontSize":"20px","fontWeight":"bold"}}>
                <ul>Logo</ul>
            </Link>
        </div>
        <div className='nav-list'>
            <Link to={'/'} style={{"textDecoration":"none","fontSize":"20px","fontWeight":"bold"}}>
                <ul>Home</ul>
            </Link>
            <Link to={'/clothes'} style={{"textDecoration":"none","fontSize":"20px","fontWeight":"bold"}}>
                <ul>Cloths</ul>
            </Link>
            <Link to={'/shoes'} style={{"textDecoration":"none","fontSize":"20px","fontWeight":"bold"}}>
                <ul>Shoes</ul>
            </Link>
        </div>
    </div>
         <Cart/>
    </>
  )
}

export default Nav
