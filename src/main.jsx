import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartContextProvider } from './Contexts/CartContext'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContextProvider>
         <App/>
    </CartContextProvider>
    </BrowserRouter>
      
  </React.StrictMode>
)
