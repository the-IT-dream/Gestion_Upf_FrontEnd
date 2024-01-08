import React, { useState } from 'react';
import {FaBars}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../image/logo_upf.jpg'
import logoUPF from '../image/logoUPF.jpg'
import logof from '../image/logo.png'
import '../css/Side.css'
import '../../../../Pages/View/Home/Css/Espace_Etudiant.css'
import TopBar from "../../../../Components/Components/Js/TopBar"

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/info_Stage",
            name:"Les infos de stage",
            icon:<i className="fa-solid fa-circle-info"></i>
        },
        {
            path:"/postule_Stage",
            name:"Postuler à des stages",
            icon:<i className="fa-solid fa-pen-to-square"></i>,
        },
        {
            path:"/Demande_Document",
            name:"Demande les documents",
            icon:<i className="fa-solid fa-file"></i>,
        },
        {
            path:"/Soumettre_document",
            name:"Soumettre les documents",
            icon:<i className="fa-solid fa-file-arrow-up"></i>,
        },
        {
            path:"/Account",
            name:"Account",
            icon:<i className="fa-solid fa-file-arrow-up"></i>,
        },
        {
            path:"/Securite",
            name:"Securité",
            icon:<i className="fa-solid fa-file-arrow-up"></i>,
        },
        {
            path:"/Roles",
            name:"Roles",
            icon:<i className="fa-solid fa-file-arrow-up"></i>,
        },
    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? "280px" : "70px",}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img className='logo' src={logo} alt=''/></h1>
                   <div style={{ marginLeft: isOpen ? "25px" : "8px" }} className="bars">
                        <FaBars onClick={toggle}/>
                   </div>                   
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="NavLink" activeclassName="active">
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
                    <main>{children}</main>
                </div>
            </div>

           
        </div>
    );
};

export default Sidebar;