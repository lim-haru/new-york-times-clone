import React from 'react'
import style from '../style/Navbar.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { format } from 'date-fns'
import Hamburger from '../components/Hamburger'
import {ReactComponent as Lens} from '../images/lens.svg'
import {ReactComponent as BottomArrow} from '../images/arrow.svg'
import {ReactComponent as TheNewYorkTimes} from '../images/theNewYorkTimes.svg'

export default function Navbar() {
  return (
    <div className={`${style.navbar} pt-1`}>
      <div className='d-flex justify-content-between px-2'>
        <div className='d-flex align-items-center gap-2'>
          <Hamburger />
          <Lens className={style.lens}/>
        </div>
        <ul className={style.languagesMenu}>
          <li>U.S.</li>
          <li>INTERNATIONAL</li>
          <li>CANADA</li>
          <li>ESPAÑOL</li>
          <li>中文</li>
        </ul>
        <button className={style.button}>LOG IN</button>
      </div>
      <Row className='d-flex align-items-center py-2'>
        <Col className='d-flex flex-column align-items-start px-0'>
          <span className='fw-bold'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</span>
          <span>Today's paper</span>
        </Col>
        <TheNewYorkTimes className="xs-5 col"/>
        <Col></Col>
      </Row>
      <div className={style.nestedNav}>
        <ul className='d-flex justify-content-center gap-4'>
          <li>U.S. <BottomArrow className={style.bottomArrow}/></li>
          <li>World <BottomArrow className={style.bottomArrow}/></li>
          <li>Business <BottomArrow className={style.bottomArrow}/></li>
          <li>Arts <BottomArrow className={style.bottomArrow}/></li>
          <li>Lifestyle <BottomArrow className={style.bottomArrow}/></li>
          <li>Opinion <BottomArrow className={style.bottomArrow}/></li>
          <li>Audio <BottomArrow className={style.bottomArrow}/></li>
          <li>Games <BottomArrow className={style.bottomArrow}/></li>
          <li>Cooking <BottomArrow className={style.bottomArrow}/></li>
          <li>Wirecutter <BottomArrow className={style.bottomArrow}/></li>
          <li>The Athletic <BottomArrow className={style.bottomArrow}/></li>
        </ul>
      </div>
    </div>
  )
}
