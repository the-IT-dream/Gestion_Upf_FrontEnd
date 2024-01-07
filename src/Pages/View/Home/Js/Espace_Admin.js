import React from 'react'
import '../Css/Espace_Etudiant.css';
import Sidebar from '../../../../Components/Mini-Components/SideBar/components/Sidebar'
import Sidebar_admin from '../../../../Components/Mini-Components/SideBar/components/Sidebar_admin'
import '../Css/Espace_Etudiant.css';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Details_Stage from '../Components/pages/js/Details_Stage';
import Infos from '../Components/pages/js/Infos';
import Postuler from '../Components/pages/js/Postuler';
import Account from '../Components/pages/js/Account';
import DemandeDocuments from '../Components/pages/js/DemandeDocuments';
import Soumettre_document from '../Components/pages/js/Soumettre_document';
import Security from '../Components/pages/js/Security';
import TopBar from '../../../../Components/Components/Js/TopBar';

// function Espace_Etudiant (){
const Espace_Admin = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <Sidebar_admin/>
      <div className='content'>
        <div className='content__topbar'>
          <TopBar >
            <Routes>
              <Route path="/Account" element={<Account/>} />
              <Route path="/Securite" element={<Security />} />
            </Routes>
          </TopBar>
        </div>
        <div className='content__menu'>
          <main>
            <Routes>
              <Route path='/Details_Stage' element={<Details_Stage/>} />
              <Route path="/info_Stage" element={<Infos />} />
              <Route path="/postule_Stage" element={<Postuler />} />
              <Route path="/Account" element={<Account/>} />
              <Route path="/Demande_Document" element={<DemandeDocuments />} />
              <Route path="/Soumettre_document" element={<Soumettre_document />} />
              <Route path='/Infos' element={<Infos /> } />
              <Route path="/Securite" element={<Security />} />
            </Routes>
          </main>
        </div>
      </div>
          
    </div>
  );
};
export default Espace_Admin
