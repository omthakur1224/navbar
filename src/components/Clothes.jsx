import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'

function Clothes() {
    const {count,setCount}=useContext(CartContext)
  return (
    <>
        <h1 style={{"textAlign":"center"}}>CLOTHES</h1>
        <div style={{
            "marginTop":"50px",
            "display":"flex",
            "justifyContent":"center",
            "alignContent":"center",
            "gap":"50px"
        }}>
            <button onClick={()=>setCount((prev)=>prev+1)}>
            Add Clothes
            </button>
            <button disabled={count?false:true}
                    onClick={()=>setCount((prev)=>prev?prev-1:prev)}>
                Remove clothes
            </button>
        </div>
    </>
  )
}

export default Clothes