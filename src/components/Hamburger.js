import React from "react"
import style from "../style/Hamburger.module.css"
import {ReactComponent as HamburgerSvg} from '../images/hamburger.svg'
import { ReactComponent as RightArrow } from "../images/arrow.svg"
import { NavLink } from "react-router-dom";

export default function Hamburger() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <HamburgerSvg className={style.hamburger} onClick={() => setIsOpen(!isOpen)}/>
      <nav className={style.menu} style={{display: isOpen ? 'block' : 'none'}}>
        <ul>
          <li>
            <NavLink to={'/'} onClick={() => setIsOpen(!isOpen)}>
              <span>Home Page</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/world'} onClick={() => setIsOpen(!isOpen)}>
              <span>World</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/business'} onClick={() => setIsOpen(!isOpen)}>
              <span>Business</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/politics'} onClick={() => setIsOpen(!isOpen)}>
              <span>U.S. Politics</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/us'} onClick={() => setIsOpen(!isOpen)}>
              <span>U.S. News</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/sports'} onClick={() => setIsOpen(!isOpen)}>
              <span>Sports</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/health'} onClick={() => setIsOpen(!isOpen)}>
              <span>Health</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/nyregion'} onClick={() => setIsOpen(!isOpen)}>
              <span>N.Y.</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/opinion'} onClick={() => setIsOpen(!isOpen)}>
              <span>Opinion</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/technology'} onClick={() => setIsOpen(!isOpen)}>
              <span>Tech</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/science'} onClick={() => setIsOpen(!isOpen)}>
              <span>Science</span>
              <RightArrow />
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink to={'/section/arts'} onClick={() => setIsOpen(!isOpen)}>
              <span>Arts</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/books'} onClick={() => setIsOpen(!isOpen)}>
              <span>Book Review</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/fashion'} onClick={() => setIsOpen(!isOpen)}>
              <span>Fashion</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/food'} onClick={() => setIsOpen(!isOpen)}>
              <span>Food</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/travel'} onClick={() => setIsOpen(!isOpen)}>
              <span>Travel</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/magazine'} onClick={() => setIsOpen(!isOpen)}>
              <span>Magazine</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/t-magazine'} onClick={() => setIsOpen(!isOpen)}>
              <span>T Magazine</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/realestate'} onClick={() => setIsOpen(!isOpen)}>
              <span>Real Estate</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/obituaries'} onClick={() => setIsOpen(!isOpen)}>
              <span>Obituaries</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/movies'} onClick={() => setIsOpen(!isOpen)}>
              <span>Movies</span>
              <RightArrow />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/section/upshot'} onClick={() => setIsOpen(!isOpen)}>
              <span>The Upshot</span>
              <RightArrow />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
