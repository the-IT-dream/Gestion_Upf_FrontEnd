import React from 'react';
import InfosCard from '../../../../../../Components/Components/Js/InfosCard';
import '../css/Infos.css'

function Infos() {
  return (
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
  )
}

export default Infos
