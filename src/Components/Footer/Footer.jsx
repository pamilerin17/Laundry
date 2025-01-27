// import React from 'react'
import Logo from '../../assets/logo.png'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import Ba from '../../assets/footer-bg.png'
import './Footer.css'

function Footer() {
  return (
    <div>
     <div className="footer">
       <div className="last">
       <img src={Logo} alt="Logo" />
       <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
        <p><FaTwitter/><FaFacebook/><FaPinterest/></p>
       </p>
      </div>
      <div className="see">
       <h2>Services</h2>
       <p>-Dry Cleaning</p><br />
       <p>-Ironing Services</p><br />
       <p>-Laundry Service</p><br />
      </div>
      <div className="get">
       <h2>Get In Touch</h2>
       <p>+234 810 3232 789</p>
       <p> laundry@gmail.com</p>
      </div>
      <div className="copy">
       <p>Copyright ©2025 All rights reserved</p>
      </div>
      <div className="bb">
       <img src={Ba} alt="Footer Background" />
      </div>
     </div>
    </div>
  )
}

export default Footer
