import React from 'react'
import '../styles/NavSideBar.css'
import Logo from '../adminImages/ragmanlogo.png'
import { AiOutlineHome } from "react-icons/ai";
import { IoIosLogIn } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi";
const NavSideBar = () => {
  return (
    <div className="nav-sidebar">

        <div className="nav-sidebar-logo">
          <img
            src={Logo}
            alt="Loading..."
          />
        </div> 

        <ul className="nav-sidebar-list">
          <li>
            <a href="">
              <i>
                <AiOutlineHome />
              </i>
              Dashbord
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <IoIosLogIn />
              </i>
              Login
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <HiOutlineDocumentText/>
              </i>
             Document
            </a>
          </li>
        </ul>
      </div>
  )
}

export default NavSideBar
