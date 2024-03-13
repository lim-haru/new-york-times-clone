import React from "react"
import style from "../style/Footer.module.css"

export default function Footer() {
  return (
    <footer className={style.footerHome}>
      <ul>
        <li>
          <span>© 2024 The New York Times Company</span>
        </li>
        <li>
          <span>NYTCo</span>
        </li>
        <li>
          <span>Contact Us</span>
        </li>
        <li>
          <span>Accessibility</span>
        </li>
        <li>
          <span>Work with us</span>
        </li>
        <li>
          <span>Advertise</span>
        </li>
        <li>
          <span>T Brand Studio</span>
        </li>
        <li>
          <span>Your Ad Choices</span>
        </li>
        <li>
          <span>Privcy Policy</span>
        </li>
        <li>
          <span>Terms of Service</span>
        </li>
        <li>
          <span>Terms of Sale</span>
        </li>
        <li>
          <span>Site Map</span>
        </li>
        <li>
          <span>Help</span>
        </li>
        <li>
          <span>Subscriptions</span>
        </li>
      </ul>
      <span>Manage Privacy Preferences</span>
    </footer>
  );
}
