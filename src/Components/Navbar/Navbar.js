import React,{useState} from 'react'
import * as FaIcons from "react-icons/fa"; 
import {Link} from 'react-router-dom';
import {Sidebar} from "./Sidebar";
import './Navbar.css';
import logoCSM from './Assets/logoCSMSS.png';
function Navbar() {
    const[sidebar, setSidebar]= useState(false);
    const showSidebar =()=>setSidebar(!sidebar);
  return (
    <>
    <div className='header'>
        <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <div className='menu-name-logo'>
        <h1>Club Sportiv Municipal Suceava</h1>
        </div>
        <div className='menu-name-logo'>
        <h1>Volei Suceava</h1>
        </div>
        <div lassName='menu-name-logo'>
            <Link to='/Prezentare'>
            <img src={logoCSM} alt={logoCSM} height={80} width={100}/>
            </Link>
        </div>
       
    </div>
    <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
    <ul className='nav-menu-items'  onClick={showSidebar}>
    <li className='navbar-toggle'>
        <Link  className='menu-bars-exit'>
            <h1>Meniu</h1>
        </Link>
    </li>
    {Sidebar.map((item, index)=>{
        return(
            <li key={index} className={item.clName}>
                <Link to={item.path}>
                    <span>{item.title}</span>
                </Link>
            </li>
        )
    })}
    </ul>
    </nav>
    </>
  )
}

export default  Navbar;