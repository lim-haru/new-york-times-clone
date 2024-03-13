import React from 'react'
import style from '../style/Navbar.module.css'
import { format } from 'date-fns'
import HamburgerMobile from '../components/HamburgerMobile'
import {ReactComponent as User} from '../images/user.svg'
import {ReactComponent as TheNewYorkTimes} from '../images/theNewYorkTimes.svg'

export default function NavbarMobile() {
  return (
    <div className={`${style.navbar} p-1`}>
      <div className={`${style.separator} d-flex justify-content-between align-items-center px-1 py-2`}>
        <HamburgerMobile />
        <TheNewYorkTimes className={style.title}/>
        <User className={style.user}/>
      </div>
      <div className={`${style.separator} d-flex justify-content-start justify-content-md-center py-2`}>
        <span className='fw-bold'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</span>
      </div>
    </div>
  )
}
