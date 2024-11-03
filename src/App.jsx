import { useState } from 'react'
import './styles/App.scss'

import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'
import Market from './pages/Market'
import Profile from './pages/Profile'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import {auth} from '../firebase.config'

function App() {


  return (
    <>
      {/* <Nav/>
      <div className='flex'>
        <AsideBar/>
    
        <Main/>
      </div> */}
       
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Market" element={<Market />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router> 
   
    
    </>
  )
}

export default App
