import React from 'react'
// import Menu from '../../../../Components/Mini-Components/Js/Menu'
// import Navbar from '../../../../Components/Mini-Components/Js/Navbar'
import SideBar from '../../../../Components/Mini-Components/Js/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../../../Auth/Js/Login';
import '../Css/Espace_Etudiant.css';
import Menu from '../../../../Components/Mini-Components/Js/Menu';

function Espace_Etudiant() {
  return (
    <div>
        <Menu/>
    </div>
  )
}

export default Espace_Etudiant
