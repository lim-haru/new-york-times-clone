import React from "react"
import style from "../style/HamburgerMobile.module.css"
import {ReactComponent as HamburgerSvg} from '../images/hamburger.svg'
import { ReactComponent as RightArrow } from "../images/arrow.svg"
import { ReactComponent as Cross } from "../images/cross.svg"
import { NavLink } from "react-router-dom";

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
            <NavLink to={'/new-york-times-clone'} onClick={() => setIsOpen(!isOpen)}>
              <span>Home Page</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/world'} onClick={() => setIsOpen(!isOpen)}>
              <span>World</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/business'} onClick={() => setIsOpen(!isOpen)}>
              <span>Business</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/politics'} onClick={() => setIsOpen(!isOpen)}>
              <span>U.S. Politics</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/us'} onClick={() => setIsOpen(!isOpen)}>
              <span>U.S. News</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/sports'} onClick={() => setIsOpen(!isOpen)}>
              <span>Sports</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/health'} onClick={() => setIsOpen(!isOpen)}>
              <span>Health</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/nyregion'} onClick={() => setIsOpen(!isOpen)}>
              <span>N.Y.</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/opinion'} onClick={() => setIsOpen(!isOpen)}>
              <span>Opinion</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/technology'} onClick={() => setIsOpen(!isOpen)}>
              <span>Tech</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/science'} onClick={() => setIsOpen(!isOpen)}>
              <span>Science</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/arts'} onClick={() => setIsOpen(!isOpen)}>
              <span>Arts</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/books'} onClick={() => setIsOpen(!isOpen)}>
              <span>Book Review</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/fashion'} onClick={() => setIsOpen(!isOpen)}>
              <span>Fashion</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/food'} onClick={() => setIsOpen(!isOpen)}>
              <span>Food</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/travel'} onClick={() => setIsOpen(!isOpen)}>
              <span>Travel</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/magazine'} onClick={() => setIsOpen(!isOpen)}>
              <span>Magazine</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/t-magazine'} onClick={() => setIsOpen(!isOpen)}>
              <span>T Magazine</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/realestate'} onClick={() => setIsOpen(!isOpen)}>
              <span>Real Estate</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/obituaries'} onClick={() => setIsOpen(!isOpen)}>
              <span>Obituaries</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/movies'} onClick={() => setIsOpen(!isOpen)}>
              <span>Movies</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-york-times-clone/section/upshot'} onClick={() => setIsOpen(!isOpen)}>
              <span>The Upshot</span>
              <RightArrow />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
