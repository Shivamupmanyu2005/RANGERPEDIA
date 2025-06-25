import React from 'react';
import { useState } from 'react'
import './App.css'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/Authcontext1';
import LoginPage1 from "./pages/LoginPage1";
import RegisterPage1 from "./pages/RegisterPage1"
import PrivateRoutes from './context/PrivateRoutes';
import HomePage from "./pages/HomePage"
import Character from "./pages/Character"
import Strategyroom from './pages/Strategyroom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<LoginPage1 />} />
            <Route path='/register' element={<RegisterPage1 />} />
            <Route element = {<PrivateRoutes />}>
            <Route path='/' element={<HomePage />} />
            <Route path= "/character" element={<Character />} />
            <Route path = "/strategyroom" element={<Strategyroom />} />
            </Route> 
            



          </Routes>
        </AuthProvider>
      </Router>


    </>
  )
}

export default App
