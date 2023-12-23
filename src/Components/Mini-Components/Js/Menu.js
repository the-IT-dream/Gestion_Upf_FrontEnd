import React from 'react'
import '../../Mini-Components/Css/Menu.css';
import styled from "styled-components"
import SideBarButton from "../Js/SideBarButton";
import Logo from "../Js/Logo";

const SideBarWrapper= styled.div`
    background-color: rgb(255, 255, 255);  
    position: fixed;
    top: 0;
    left: 0;
    width: 270px;
    height: 100vh;
    display: block;
    z-index: 7;
    transition: transform 0.3s ease-in-out;
  `;
  const SideBarBody= styled.div`
    background-color: rgb(255, 255, 255);  
    height: 100vh;
    overflow: hidden;
    display:flex;
    // justify-content:center;
    // align-items:center;
    flex-direction:column;
  `;
  const List= styled.ul`
    position: relative;
    list-style: none;
    padding: 0;
    display: block;
    transition: all 0.5s ease;
  `;
  const makeButtons =[
    {
      to :"/Espace_Etudiant/info_Stage",
      icon :<i className="fa-solid fa-circle-info"></i>,
      title:"Les infos de stage",
    },
    {
      to :"/Espace_Etudiant/postule_Stage",
      icon :<i className="fa-solid fa-pen-to-square"></i>,
      title:"Postuler à des stages",
      // subBtn:["Password","Mail","Accounts"]
    },
    {
      to :"/Espace_Etudiant/Demande_Document",
      icon :<i className="fa-solid fa-file"></i>,
      title:"Demande les documents",
    },
    {
      to :"/Espace_Etudiant/Soumettre_document",
      icon :<i className="fa-solid fa-file-arrow-up"></i>,
      title:"Soumettre les documents",
    }
  ];
function Menu() {
  return (
    <div>
      <SideBarWrapper>
        <SideBarBody>
          <Logo/>
          <List>
          {makeButtons.map((btn,i)=>(
              <SideBarButton to={btn.to} icon={btn.icon} title={btn.title}/>          
            ))}
          </List>
        </SideBarBody>
      </SideBarWrapper>
    </div>
  )
}
export default Menu
