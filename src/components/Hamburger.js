import React from "react"
import style from "../style/Hamburger.module.css"
import {ReactComponent as HamburgerSvg} from '../images/hamburger.svg'
import { ReactComponent as RightArrow } from "../images/arrow.svg"

export default function Hamburger() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <HamburgerSvg className={style.hamburger} onClick={() => setIsOpen(!isOpen)}/>
      <nav className={style.menu} style={{display: isOpen ? 'block' : 'none'}}>
        <ul>
          <li>
            <span>Home Page</span>
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
            <span>U.S. Politics</span>
            <RightArrow />
          </li>
          <li>
            <span>U.S. News</span>
            <RightArrow />
          </li>
          <li>
            <span>Sports</span>
            <RightArrow />
          </li>
          <li>
            <span>Health</span>
            <RightArrow />
          </li>
          <li>
            <span>N.Y.</span>
            <RightArrow />
          </li>
          <li>
            <span>Opinion</span>
            <RightArrow />
          </li>
          <li>
            <span>Tech</span>
            <RightArrow />
          </li>
          <li>
            <span>Science</span>
            <RightArrow />
          </li>
          <hr />
          <li>
            <span>Arts</span>
            <RightArrow />
          </li>
          <li>
            <span>Book Review</span>
            <RightArrow />
          </li>
          <li>
            <span>Style</span>
            <RightArrow />
          </li>
          <li>
            <span>Food</span>
            <RightArrow />
          </li>
          <li>
            <span>Travel</span>
            <RightArrow />
          </li>
          <li>
            <span>Magazine</span>
            <RightArrow />
          </li>
          <li>
            <span>T Magazine</span>
            <RightArrow />
          </li>
          <li>
            <span>Real Estate</span>
            <RightArrow />
          </li>
          <li>
            <span>Obituaries</span>
            <RightArrow />
          </li>
          <li>
            <span>Video</span>
            <RightArrow />
          </li>
          <li>
            <span>Graphics</span>
            <RightArrow />
          </li>
          <li>
            <span>The Upshot</span>
            <RightArrow />
          </li>
          <hr />
          <li>
            <span>More</span>
            <RightArrow />
          </li>
        </ul>
      </nav>
    </div>
  );
}
