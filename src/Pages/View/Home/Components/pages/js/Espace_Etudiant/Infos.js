import React from 'react';
import InfosCard from '../../../../../../../Components/Components/Js/InfosCard';
import '../../css/Infos.css'
import Sidebar from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Details_Stage from './Details_Stage';
import Postuler from './Postuler';
import Account from './Account';
import DemandeDocuments from './DemandeDocuments';
import Soumettre_document from './Soumettre_document';
import TopBar from '../../../../../../../Components/Components/Js/TopBar';
import Security from './Security';

function Infos() {
  return (
    <div>
      <Sidebar />

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
            {/* <Routes>
              <Route path='/Details_Stage' element={<Details_Stage/>} />
              <Route path="/info_Stage" element={<Infos />} />
              <Route path="/postule_Stage" element={<Postuler />} />
              <Route path="/Account" element={<Account/>} />
              <Route path="/Demande_Document" element={<DemandeDocuments />} />
              <Route path="/Soumettre_document" element={<Soumettre_document />} />
              <Route path="/Securite" element={<Security />} />
            </Routes> */}
            <div className='cards__container'>
      <div className='cards__cadre'>
        <InfosCard 
          imgEntreprise='../images/Entreprise/Capgemini.png'
          nomEntreprise='Capgemini'
          lieuEntreprise='CasaBlanca'
          detailStage='Stage pfe en developpement informatique R/H'
        />
        <InfosCard 
          imgEntreprise='../images/Entreprise/Atos.png'
          nomEntreprise='Atos'
            lieuEntreprise='Rabat'
            detailStage='Stage pfe en developpement informatique SpringBoot'
        />
        <InfosCard
            imgEntreprise='../images/Entreprise/ibm.jpg'
            nomEntreprise='IBM'
            lieuEntreprise='CasaBlanca'
            detailStage='Stage pfe en ReactJS et devlopement web'
        />
        <InfosCard 
            imgEntreprise='../images/Entreprise/Oracle.png'
            nomEntreprise='Oracle'
            lieuEntreprise='CasaBlanca'
            detailStage='Stage pfe en Gestion Base de donnée'     
        />
        <InfosCard 
          imgEntreprise='../images/Entreprise/Capgemini.png'
          nomEntreprise='Capgemini'
          lieuEntreprise='CasaBlanca'
          detailStage='Stage pfe en developpement informatique R/H'
        />
        <InfosCard 
          imgEntreprise='../images/Entreprise/Atos.png'
          nomEntreprise='Atos'
            lieuEntreprise='Rabat'
            detailStage='Stage pfe en developpement informatique SpringBoot'
        />
      </div>
    </div>
          </main>
        </div>
      </div>
    
    </div>
  )
}

export default Infos
