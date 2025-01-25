// import React from 'react'
import './Services.css'
import Service from '../../assets/offers1.png'
import Service2 from '../../assets/offers4.png'
import Offer from '../../assets/offers-icon1.png'
function Services() {
  return (
    <div>
      <div className="ser">
       <h2>Services</h2>
       <h1>Services We Offer</h1>
      </div>
      <div className="serve">
       <img src={Service} alt="" />
       <div className="sev">
        <img src={Offer} alt="" />
        <h1>Cloth Laundry</h1>
        <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!!</p>
       </div>
      </div>
         <div className="serve">
       <img src={Service2} alt="" />
       <div className="sev">
        <img src={Offer} alt="" />
        <h1>Cloth Laundry</h1>
        <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!!</p>
       </div>
      </div>
    </div>
  )
}

export default Services
