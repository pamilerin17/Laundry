// import React from 'react'
import './Get.css'
import { FaHouse } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
function Get() {
  return (
    <div>
      <div className="get">
       <h2>Get In Touch</h2>
        <input type="text" placeholder="Full Name" className="nam"/>
        <input type="text" name="Email" placeholder="Email" required className="nam" />
        <input type="text" name="Subject" placeholder="Subject" required className="nam" />
        <input type="submit" value="Send Message" className="buttton" />
      </div>
      <div className="con">
       <FaHouse/> No 40 Alagbado <br />
       <FaPhone/> +234 810 3232 789 <br />
       <CiMail/> laundry@gmail.com
      </div>
    </div>
  )
}

export default Get
