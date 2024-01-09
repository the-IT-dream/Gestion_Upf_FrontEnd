import React from 'react'
import '../Css/Espace_Etudiant.css';
import Sidebar from '../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant'
import TopBar_admin from '../../../../Components/Components/Js/TopBar_admin';
import Sidebar_admin from '../../../../Components/Mini-Components/SideBar/components/Sidebar_admin';

// function Espace_Etudiant (){
const Espace_Admin = () => {
  return (
    <div>
      <Sidebar_admin />
      <div className='content'>
        <div className='content__topbar'>
          <TopBar_admin  />
          
        </div>
        <div className='content__menu'>
          <main> 
            
          </main>
        </div>
      </div>
          
    </div>
  );
};
export default Espace_Admin
