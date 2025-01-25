// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Process from './Components/Process/Process'
import Services from './Components/Services/Services'
import Call from './Components/Call/Call'
import Review from './Components/Review/Review'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
<Router>
  <Header />
  <Routes>
    <Route path="/" element={<><Home /><Process/><Services/><Call/><Review/><About/></>} />
  </Routes>
  <Footer/>
</Router>
    </>
  )
}

export default App
