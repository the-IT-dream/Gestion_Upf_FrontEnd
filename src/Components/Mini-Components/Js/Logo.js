import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const LogoWrapper= styled.div`
    width:100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    > 
     div {
        position: relative;
        width: 100%;
        height:70px ;
        border-radius:10px;
        overflow: hidden;
        margin : 10px 5px 10px 0px;
        cursor: pointer;
        display : flex;
    }
`;


function Logo() {
  return (
    <LogoWrapper >
      <Link to="/Espace_Etudiant">
        <div>
          <img className='logo_upf' src='./images/logo_upf.jpg'/>
        </div>     
      </Link>
    </LogoWrapper>
  )
}

export default Logo;
