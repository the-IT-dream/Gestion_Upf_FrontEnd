import React from 'react'
import '../Css/Espace_Etudiant.css';
import Sidebar from '../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant'
import Sidebar_Responsable_de_Stage from '../../../../Components/Mini-Components/SideBar/components/Sidebar_Responsable_de_Stage'
import '../Css/Espace_Etudiant.css';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Details_Stage from '../Components/pages/js/Espace_Etudiant/Details_Stage';
import Infos from '../Components/pages/js/Espace_Etudiant/Infos';
import Postuler from '../Components/pages/js/Espace_Etudiant/Postuler';
import Account from '../Components/pages/js/Espace_Etudiant/Account';
import DemandeDocuments from '../Components/pages/js/Espace_Etudiant/DemandeDocuments';
import Soumettre_document from '../Components/pages/js/Espace_Etudiant/Soumettre_document';
import Security from '../Components/pages/js/Espace_Etudiant/Security';
import TopBar_Rs from '../../../../Components/Components/Js/TopBar_Rs';
import Publier_les_offres_de_stage from '../Components/pages/js/Espace_R_Stage/Publier_les_offres_de_stage';

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
