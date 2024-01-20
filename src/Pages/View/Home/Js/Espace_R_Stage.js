import React from 'react'
import '../Css/Espace_Etudiant.css';
import Sidebar_Responsable_de_Stage from '../../../../Components/Mini-Components/SideBar/components/Sidebar_Responsable_de_Stage'
import '../Css/Espace_Etudiant.css';
import TopBar_Rs from '../../../../Components/Components/Js/TopBar_Rs';

function Responsable_de_Stage (){
  return (
    <div>
      {/* <Sidebar /> */}
      <Sidebar_Responsable_de_Stage/>
      <div className='content'>
        <div className='content__topbar'>
          <TopBar_Rs />
        </div>
        <div className='content__menu'>
          <main>

          </main>
        </div>
      </div>
          
    </div>
  );
};
export default Responsable_de_Stage
