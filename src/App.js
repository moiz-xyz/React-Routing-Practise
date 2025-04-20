import React from 'react'
import Home from './Componets/Home/Home'
import Hero from './Componets/Hero/Hero'
import Features from './Componets/Features/Features'
import Testimonials from './Componets/Testimonials/Testimonials'
import Highlights from './Componets/Highlights/Highlights'
import FAQ from './Componets/FAQ/FAQ'
import Footer from './Componets/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Config/AppRouter'

const App = () => {
  return (
    
    <div>
  
{/* Routing  */}
    <BrowserRouter>
    
    <AppRouter/>

    </BrowserRouter>
    </div>
  )
}

export default App
