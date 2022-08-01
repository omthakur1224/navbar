import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav'
import Cart from './components/Cart'
import { Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Clothes from './components/Clothes'
import Shoes from './components/Shoes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/clothes' element={<Clothes/>}/>
        <Route path='/shoes' element={<Shoes/>} />
      </Routes>
    </div>
  )
}

export default App
