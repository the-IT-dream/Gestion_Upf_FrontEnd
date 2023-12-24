import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../image/logo_upf.jpg'
import '../css/Side.css'
import '../../../../Pages/View/Home/Css/Espace_Etudiant.css'
import TopBar from  '../../../Components/Js/TopBar'
import Account from '../../../../Pages/View/Home/Components/js/Account'

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "250px" : "70px",}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img className='logo' src={logo} alt=''/></h1>
                   <div style={{marginLeft: isOpen ? "7px" : "7px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
            <div className='content'>
                <div className='content__topbar'>
                    <TopBar />
                </div>
                <div className='content__menu'>
                    <main style={{backgroundColor:'red'}}>{children}</main>
                </div>
            </div>

           
        </div>
    );
};

export default Sidebar;