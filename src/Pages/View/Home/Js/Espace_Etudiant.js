import React from 'react'
import '../Css/Espace_Etudiant.css';
import Sidebar from '../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant'
import '../Css/Espace_Etudiant.css';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Details_Stage from '../Components/pages/js/Espace_Etudiant/Details_Stage';
import Infos from '../Components/pages/js/Espace_Etudiant/Infos';
import Postuler from '../Components/pages/js/Espace_Etudiant/Postuler';
import Account from '../Components/pages/js/Espace_Etudiant/Account';
import DemandeDocuments from '../Components/pages/js/Espace_Etudiant/DemandeDocuments';
import Soumettre_document from '../Components/pages/js/Espace_Etudiant/Soumettre_document';
import Security from '../Components/pages/js/Espace_Etudiant/Security';
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
