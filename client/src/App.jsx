import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage/LandingPage';
import Login from './components/Pages/Login';
import SignUpOne from './components/Pages/SignUp';
import SignUpTwo from './components/Pages/SignUpTwo';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/SignUpOne' element={<SignUpOne/>} />
        <Route path='/SignUpTwo' element={<SignUpTwo/>} />

      </Routes>
    </Router>
  )
}

export default App
