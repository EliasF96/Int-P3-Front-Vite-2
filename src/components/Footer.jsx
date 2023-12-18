import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialPintarest } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";


const Footer = () => {
  return (
    <footer>
      <div className='footerContainer'>
        <img src="https://i.ibb.co/r5HqP4r/logo.jpg" alt="Logo" />
        <h3>© 2023 Lorem Ipsum Bakery -  Todos los derechos reservados.</h3>
        <div className="iconsContainer">
          <TiSocialFacebook className='socialIcon' />
          <TiSocialTwitter className='socialIcon' />
          <SlSocialPintarest className='socialIcon' />
          <SlSocialInstagram className='socialIcon' />
          <BiWorld className='socialIcon' />
        </div>
      </div>
    </footer>
  )
}
export default Footer