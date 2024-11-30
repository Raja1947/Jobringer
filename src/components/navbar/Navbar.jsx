import React from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <div className={style.left_side}>
            <img src={logo} alt='logo'/>
            <h6>Bringing you <span>the Perfect Job</span> </h6>
        </div>
        <div className={style.right_side}>
            <ul>
                <li>Jobs</li>
                <li>Active Employers</li>
                <li>Pricing</li>
                <li><button className={style.jobseeker}>Jobseeker Login</button></li>
                <li><button className={style.employer}>Employer Login</button></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
