import React, { useState } from 'react';
import {FaBars}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../image/logo_upf.jpg'
import '../css/Side.css'
import '../../../../Pages/View/Home/Css/Espace_Etudiant.css'


const Sidebar_admin = (props) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    // const[isON ,setIsON] = useState(true);
    // const links = () => setIsON (!isON);
    const menuItem=[

        {
            path:"/Espace_admin/Roles",
            name:"Roles",
            icon:<i className="fa-solid fa-file-arrow-up"></i>,
        },
        {
            path:"/Espace_admin/Student_list",
            name:"Student list",
            icon:<i className="fa-solid fa-file-arrow-up"></i>,
        },
        {
            path:"/Espace_admin/ResponsableStage",
            name:"Responsable Stage",
            icon:<i className="fa-solid fa-file-arrow-up"></i>,
        },
    
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "280px" : "70px",}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img className='logo' src={logo} alt=''/></h1>
                   <div style={{ marginLeft: isOpen ? "25px" : "8px" }} className="bars">
                        <FaBars onClick={toggle}/>
                   </div>                   
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="NavLink"  activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
            </div>
            {/* <div className='content'>
                <div className='content__topbar'>
                    <TopBar />
                </div>
                <div className='content__menu'>
                    <main>
                        {children}
                        {isON && <DemandeDocuments setIsON={links}  />}
                    </main>
                </div>
            </div> */}

           
        </div>
    );
};

export default Sidebar_admin;