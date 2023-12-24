import React from 'react'

import '../Css/Espace_Etudiant.css';
import Menu from '../../../../Components/Mini-Components/Js/Menu'
import TopBar from '../../../../Components/Components/Js/TopBar'
import SideBar from '../../../../Components/Mini-Components/Js/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../../../Auth/Js/Login';
import '../Css/Espace_Etudiant.css';
import Account from '../Components/js/Account';
import Security from '../Components/js/Security';



function Espace_Etudiant() {
  return (
    <div>
      <div className='espace__etudiant__container'>
        <div className='menu'>
          <Menu/>
        </div>
        <div className='content'>
          <div className='content__topbar'>
          <TopBar />
          </div>
          <div className='content__menu'>
            <Account />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Espace_Etudiant
