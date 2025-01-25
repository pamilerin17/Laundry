import {useState} from 'react';
import OutsideClickHandler from 'react-outside-click-handler'
import {Link} from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import './Header.css'
import Logo from '../../assets/logo.png';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Header() {
  const [menuOpened,setMenuOpened]=useState(false)
 const getMenuStyles=(menuOpened)=>{
  if(document.documentElement.clientWidth<=800){
   return{right:!menuOpened && '-100%'}
  }
 }
  return (
    <div>
         <div className="first">
        <div className="reach">
        <p className="call"><FaPhoneAlt/>  +234 810 3232 789</p>
        <p className="location"><IoIosMail/> laundry@gmail.com
        </p>
        {/* <p className="open">Open Hours: Monday-Sunday 8:00AM-9:00PM</p> */}
        </div>
        </div>
        <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
         <img src={Logo} alt="" />
          <OutsideClickHandler onOutsideClick={()=>{
        setMenuOpened(false)
       }}> </OutsideClickHandler>
        </div>
         <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
        <Link to='/'>Home</Link>
        <Link to='/Services'>Services</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/Appointment'><button className='button'><a href="Book An Appointment">Book An Appointment</a></button></Link>
       </div>

        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiMenu size={30}/>
       </div>
      </section>   
    </div>
  )
}

export default Header
