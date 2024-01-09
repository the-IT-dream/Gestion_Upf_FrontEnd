import React from 'react'
import '../Css/Espace_Etudiant.css';
import Sidebar from '../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant'
import TopBar from '../../../../Components/Components/Js/TopBar';

// function Espace_Etudiant (){
const Espace_Etudiant = () => {
  return (
    <div>
      <Sidebar />
      <div className='content'>
        <div className='content__topbar'>
          <TopBar  />
          
        </div>
        <div className='content__menu'>
          <main>         
          </main>
        </div>
      </div>
          
    </div>
  );
};
export default Espace_Etudiant
