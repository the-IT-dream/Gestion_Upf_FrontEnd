import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"


export const Navlinks= styled(NavLink)`
    position: relative;
    width: 255px;
    height: 50px;
    color: #0137B2;
    padding: 12px 20px ;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    justify-content: left;
    display: flex;
    margin: 7px 10px 7px;
    border-radius: 6px;
    // border-color: #0137B2;
    // border-width: 5px;
    
    &:hover {
        background: #B11B81;
        color: #fff;
        transition :all 0.6s ease ;

    }
    &.active {
        background :#ffffff;
        color : #0053FF;
        transition :all 0.4s ease ;
    }
`;
const Icon= styled.div`
    margin-right: 10px;
    font-size: 17px;
    width:20px;
    height:20px;
`; 
const SideBarButton = ({to,icon,title}) => {
  return (
    <li>
        <Navlinks
            strict ="true"
            to={{
                pathname:to
            }}
        >
            <Icon>{icon}</Icon>
            {title}
        </Navlinks>
    </li>
  );
};

export default SideBarButton;
