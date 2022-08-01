import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'

function Home() {
    const {count,setCount}=useContext(CartContext)
  return (
    <>

    <h1 style={{"textAlign":"center"}}>HOME</h1>
    <div style={{
        "marginTop":"50px",
        "display":"flex",
        "justifyContent":"center",
        "alignContent":"center",
        "gap":"50px"
    }}>
            <button onClick={()=>setCount((prev)=>prev+1)}>
                Increment count
            </button>
            <button disabled={count?false:true}
                    onClick={()=>setCount((prev)=>prev?prev-1:prev)}>
                Decrement count
            </button>
        </div>
    </>
  )
}

export default Home