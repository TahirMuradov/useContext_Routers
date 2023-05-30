import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Item from '../pages/item/Item'
import Contact from '../pages/contact/Contact'
import Error from '../pages/error_404/Error'

const Myrouters = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/item' element={<Item/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<Error/>}/>
   </Routes>
   </>
  )
}

export default Myrouters