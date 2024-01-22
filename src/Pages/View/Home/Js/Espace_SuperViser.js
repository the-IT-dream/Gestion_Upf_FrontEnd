import React from 'react'
import '../Css/Espace_Etudiant.css';
import Sidebar_Responsable_de_Stage from '../../../../Components/Mini-Components/SideBar/components/Sidebar_Responsable_de_Stage'
import '../Css/Espace_Etudiant.css';
import TopBar_SuperViser from '../../../../Components/Components/Js/TopBar_SuperViser';
import Sidebar_SuperViser from '../../../../Components/Mini-Components/SideBar/components/SideBar_SuperViser';

function Super_Viser (){
  return (
    <div>
      {/* <Sidebar /> */}
      <Sidebar_SuperViser/>
      <div className='content'>
        <div className='content__topbar'>
          <TopBar_SuperViser />
        </div>
        <div className='content__menu'>
          <main>

          </main>
        </div>
      </div>
          
    </div>
  );
};
export default Super_Viser
