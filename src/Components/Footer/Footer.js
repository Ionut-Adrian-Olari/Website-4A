import React from "react";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom"; 
import './Footer.css';
function Footer(){
    return(  
     
    <div className='Footer'>
        <div className="footer-info">
          <h3>
          <AiIcons.AiOutlineContacts size="20"/>
          Contact</h3>
            <p>0230 524 767</p>
            <p>0230 531 289</p>
            <Link className="footer-info">csm.suceava@sport.gov.ro</Link>
        </div>
        <div className="footer-adresa">
          <h3>Adresa</h3>
          <p>Bulevardul 1 Decembrie 1918, nr.7, Suceava, Romania</p>
        </div>
        <div className="footer-social-media">
          <h3>Suntem si pe</h3>
          <a className="icon-social-media" href= 'https://www.facebook.com/csm.suceava'>
            <AiIcons.AiOutlineFacebook size={56}/>
          </a>
          <Link to='#' className="icon-social-media">
            <AiIcons.AiOutlineInstagram  size={56}/>
          </Link>
        </div>
  </div>
  );
}
export default Footer;