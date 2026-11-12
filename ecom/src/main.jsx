import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Product from './pages/Product.jsx'
import Signup from './componets/Signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/login' element={<App/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Product/>}/>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
