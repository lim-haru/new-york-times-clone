import React from "react"
import style from "../style/HamburgerMobile.module.css"
import {ReactComponent as HamburgerSvg} from '../images/hamburger.svg'
import { ReactComponent as RightArrow } from "../images/arrow.svg"
import { ReactComponent as Cross } from "../images/cross.svg"

export default function HamburgerMobile() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <HamburgerSvg className={style.hamburger} onClick={() => setIsOpen(!isOpen)}/>
      <nav className={style.menu} style={{display: isOpen ? 'flex' : 'none'}}>
        <Cross className={style.cross} onClick={() => setIsOpen(!isOpen)}/>
        <form className={style.research}>
          <input type="text" />
          <button>GO</button>
        </form>
        <ul className={style.list}>
          <li>
            <span>U.S.</span>
            <RightArrow />
          </li>
          <li>
            <span>World</span>
            <RightArrow />
          </li>
          <li>
            <span>Business</span>
            <RightArrow />
          </li>
          <li>
            <span>Arts</span>
            <RightArrow />
          </li>
          <li>
            <span>Lifestyle</span>
            <RightArrow />
          </li>
          <li>
            <span>Opinion</span>
            <RightArrow />
          </li>
          <li>
            <span>Audio</span>
            <RightArrow />
          </li>
          <li>
            <span>Games</span>
            <RightArrow />
          </li>
          <li>
            <span>Cooking</span>
            <RightArrow />
          </li>
          <li>
            <span>Wirecutter</span>
            <RightArrow />
          </li>
          <li>
            <span>The Athletic</span>
            <RightArrow />
          </li>
        </ul>
      </nav>
    </div>
  );
}
