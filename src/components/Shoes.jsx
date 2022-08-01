import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'

function Shoes() {
    const {count,setCount}=useContext(CartContext)
  return (
    <>
        <h1 style={{"textAlign":"center"}}>SHOES</h1>
        <div style={{
            "marginTop":"50px",
            "display":"flex",
            "justifyContent":"center",
            "alignContent":"center",
            "gap":"50px"
        }}>
            <button onClick={()=>setCount((prev)=>prev+1)}>
                    Add Shoes
            </button>
            <button disabled={count?false:true}
                    onClick={()=>setCount((prev)=>prev?prev-1:prev)}>
                Remove Shoes
            </button>
        </div>
    </>
  )
}

export default Shoes