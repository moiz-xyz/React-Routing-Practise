import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Features from '../Componets/Features/Features'
import Main from '../Componets/Main'
import Testimonials from '../Componets/Testimonials/Testimonials'
import Highlights from '../Componets/Highlights/Highlights'
import Pricing from '../Componets/Pricing/Pricing'
import FAQ from '../Componets/FAQ/FAQ'
import Footer from '../Componets/Footer/Footer'
import Notfound from '../Componets/Notfound/Notfound'

const AppRouter = () => {
  return (
    <div>
      <Routes>
     <Route path='/' element={ <Main />}>  </Route>
     <Route path='/Features' element={<Features />}> </Route>
     <Route path='/Testimonials' element={<Testimonials />}> </Route>
     <Route path='/Highlights' element={<Highlights />}> </Route>
     <Route path='/Pricing' element={<Pricing />}> </Route>
     <Route path='/Faq' element={<FAQ />}> </Route>
     <Route path='/Blog' element={<Footer />}> </Route>
     <Route path='**' element={<Notfound/>}> </Route>

      </Routes>
    </div>
  )
}

export default AppRouter
