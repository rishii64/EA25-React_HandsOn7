import React from 'react'
import { BrowserRouter, NavLink,Routes, Route } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import EditStudent from './EditStudent'
import AddStudent from './AddStudent'

export default function RouteCompo() {
  return (
    <div>
        <BrowserRouter>
            <NavLink to='/'>Home |</NavLink>
            <NavLink to='/student'>Student |</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/student' element={<Student/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/addstudent' element={<AddStudent/>} />
                <Route path='/editStudent/:id' element={<EditStudent/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
