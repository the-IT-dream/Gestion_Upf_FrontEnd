import React, { useState } from 'react';
import {FaBars}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../image/logo_upf.jpg'
import logoUPF from '../image/logoUPF.jpg'
import logof from '../image/logo.png'
import '../css/Side.css'
import '../../../../Pages/View/Home/Css/Espace_Etudiant.css'
import TopBar from "../../../Components/Js/TopBar"
import DemandeDocuments from '../../../../Pages/View/Home/Components/pages/js/Espace_Etudiant/DemandeDocuments';
import { useAuth } from '../../../../AuthContext';
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const[isON ,setIsON] = useState(true);
    const links = () => setIsON (!isON);
    const { authData } = useAuth();
    const role = authData.role;
    const menuItem=[
        role === 'STUDENT5' && {
            path:"/Espace_Etudiant/Infos",
            name:"Les offres de stage",
            icon:<i className="fa-solid fa-circle-info"></i>,
            // onClick:{links}
        },
        {
            path:"/Espace_Etudiant/Entreprises",
            name:"Nos entreprises partenaires ",
            icon:<i class="fa-solid fa-newspaper"></i>,
        },
        {
            path:"/Espace_Etudiant/postule_Stage",
            name:"Postuler à des stages",
            icon:<i className="fa-solid fa-pen-to-square"></i>,
        },
        {
            path:"/Espace_Etudiant/Demande_Document",
            name:"Demande les documents",
            icon:<i className="fa-solid fa-file"></i>,
        },
        {
            path:"/Espace_Etudiant/Soumettre_document",
            name:"Soumettre les documents",
            icon:<i className="fa-solid fa-file-arrow-up"></i>,
        },
        {
            path:"/Espace_Etudiant/Details_Stage",
            name:"Détails de stage ",
            icon:<i class="fa-solid fa-newspaper"></i>,
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
                       <NavLink to={item.path} key={index} className="NavLink" onClick={links} activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
            </div>


           
        </div>
    );
};

export default Sidebar;
