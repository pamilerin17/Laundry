// import React from 'react'
import './Review.css'
import Testimony from '../../assets/testimonila1.png'
import Testimony2 from '../../assets/testimonila2.png'
import Testimony3 from '../../assets/testimonila3.png'
import { FaStar } from "react-icons/fa";
function Review() {
  return (
    <div>
      <div className="rev">
       <div className="revi">
        <img src={Testimony} alt="" />
        <h1>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</h1>
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        <p>-Rupaya</p>
       </div>
         <div className="revi">
        <img src={Testimony2} alt="" />
        <h1>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</h1>
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        <p>-Rupaya</p>
       </div>
         <div className="revi">
        <img src={Testimony3} alt="" />
        <h1>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</h1>
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        <p>-Rupaya</p>
       </div>
        <div className="revi">
        <img src={Testimony3} alt="" />
        <h1>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</h1>
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        <p>-Rupaya</p>
       </div>
      </div>
    </div>
  )
}

export default Review
