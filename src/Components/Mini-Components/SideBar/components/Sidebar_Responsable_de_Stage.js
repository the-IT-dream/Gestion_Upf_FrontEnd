import React, { useState } from 'react';
import {FaBars}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../image/logo_upf.jpg'
import '../css/Side.css'
import '../../../../Pages/View/Home/Css/Espace_Etudiant.css'


const Sidebar_Responsable_de_Stage = (props) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    // const[isON ,setIsON] = useState(true);
    // const links = () => setIsON (!isON);
    const menuItem=[

        {
            path:"/Espace_R_Stage/Publier_les_offres_de_stage",
            name:"Publier les offres de stage",
            icon:<i class="fa-solid fa-newspaper"></i>,
        },
        {
            path:"/Espace_R_Stage/gestion_de_candidature",
            name:"Gestion de candidature",
            icon:<i className="fa-solid fa-pen-to-square"></i>,
        },
        {
            path:"/Espace_R_Stage/gestion_des_demandes_de_stages",
            name:"Gestion des demandes de stages",
            icon:<i className="fa-solid fa-file"></i>,
        },
        {
            path:"/Espace_R_Stage/gestion_des_entreprises_partenaires ",
            name:"Gestion des entreprises partenaires ",
            icon:<i className="fa-solid fa-circle-info"></i>,
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

export default Sidebar_Responsable_de_Stage;