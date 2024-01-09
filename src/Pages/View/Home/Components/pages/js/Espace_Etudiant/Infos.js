import React from 'react';
import '../../css/Account.css';
import '../../css/Postuler.css';
import InfosCard from '../../../../../../../Components/Components/Js/InfosCard';
import '../../../../../../View/Home/Components/pages/css/Infos.css';
import Sidebar from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant';

import TopBar from '../../../../../../../Components/Components/Js/TopBar';


function Infos() {
  return (
    <div>
      <Sidebar />
      <div className='content'>
        <div className='content__topbar'>
          <TopBar  />
          
        </div>
        <div className='content__menu'>
          <main>  
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
