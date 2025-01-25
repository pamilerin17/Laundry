// import React from 'react'
import './Process.css'
import Pro1 from '../../assets/services-icon1.svg'
import Pro2 from '../../assets/services-icon2.svg'
import Pro3 from '../../assets/services-icon3.svg'
function Process() {
  return (
    <div>
      <div className="pro">
        <h1>Our Process</h1>
        <h2>This is how we work</h2>
      </div>
      <div className="th">
         <div className="this">
        <img src={Pro1} alt="" />
        <h2>We Collect Your Clothes</h2>
        <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
      </div>
        <div className="this">
        <img src={Pro2} alt="" />
        <h2>Wash Your Clothes</h2>
        <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
        </div>
        <div className="this">
        <img src={Pro3} alt="" />
        <h2>Get Delivery</h2>
        <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
        </div>
      </div>
    </div>
  )
}

export default Process
