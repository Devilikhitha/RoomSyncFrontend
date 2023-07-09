import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Main from './components/Main'
import Accommodation from './components/Accommodation'
// import RoomAssignments from './components/RoomAssignments'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import AdminLogin from './components/AdminLogin'
import Navigation from './components/Navigation'
import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer'
import Register from './components/Register'
import Admindash from './components/Admindash'
import Room from './components/BookForm'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/accommodation' element={<Accommodation/>}/>
        {/* <Route path='/roomassign' element={<RoomAssignments/>}/> */}
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admindash' element={<Admindash/>}/>
        <Route path='/bookform' element={<Room/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}
