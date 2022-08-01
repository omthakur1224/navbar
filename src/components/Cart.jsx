import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'

function Cart() {
    const {count,setCount}=useContext(CartContext);
  return (
    <div style={{"display":"flex",}}>

        <img style={{
            "position":"fixed",
            "width":"40px",
            "height":"40px",
            "borderRadius":"50%",
            "left":"90%",
            "right":"2%",
            "top":"5px",
            "zIndex":1,
            "backgroundColor":"teal",
            "textAlign":"center",
          }}
        />

        <h1 style={{
            "position":"absolute",
            "color":"red",
            "left":"90%",
            "right":"7%",
            "top":-10,
            "zIndex":1,
            "textAlign":"center",
            "fontSize":"25px",
        }}
        >{count}</h1>
    </div>
  )
}

export default Cart