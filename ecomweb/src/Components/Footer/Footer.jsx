import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import instagram_logo from "../Assets/instagram_icon.png"
import pintrest_logo from "../Assets/pintester_icon.png"
import whatsapp_logo from "../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="Footer Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_logo} alt="Instagram Logo" />
        </div>
        <div className="footer-icons-container">
            <img src={pintrest_logo} alt="Pintrest Logo" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_logo} alt="Whatsapp Logo" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2025 Shopper. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
