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
import Us from './Components/Us/Us'
import Service from './Components/Service/Service'

function App() {


  return (
    <>
<Router>
  <Header />
  <Routes>
    <Route path="/" element={<><Home /><Process/><Services/><Call/><Review/><About/></>} />
    <Route path="/us" element={<><Us/><About/><Process/><Call/><Review/></>} />
    <Route path= "/Service" element={<><Service/><Process/><Services/><Call/><Review/></>}/>
  </Routes>
  <Footer/>
</Router>
    </>
  )
}

export default App
