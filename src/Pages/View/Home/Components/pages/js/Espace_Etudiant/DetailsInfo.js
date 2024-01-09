import React from 'react';
import InfosCard from '../../../../../../../Components/Components/Js/InfosCard';
import DetailsCard from '../../../../../../../Components/Components/Js/DetailsCard';
import '../../css/DetailsInfo.css'
import Details from '../../../../../../../Components/Components/Js/Details';
import TopBar from '../../../../../../../Components/Components/Js/TopBar';
import Sidebar from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant';


function DetailsInfo() {
  return (
    <div>
      <Sidebar/>
      <div className='content'>
        <div className='content__topbar'>
          <TopBar  />
          
        </div>
        <div className='content__menu'>
          <main>  
            <div className='Details__container'>
              <div className='Details__cadre'>
                    <DetailsCard 
                        imgEntreprise='../images/Entreprise/Capgemini.png'
                        nomEntreprise='Capgemini'
                        lieuEntreprise='CasaBlanca'
                        detailStage='Stage pfe en developpement informatique R/H'
                    />
                    <Details 
                    imgEntreprise='../images/Entreprise/Capgemini.png'
                    nomEntreprise='Capgemini'
                    lieuEntreprise="CasaBlanca"
                    detailStage="Le groupe Winvest Capital dont la première entreprise a été créée en 2012 et composé de 5 entreprises spécialisées dans le conseil et la vente auprès des particuliers de services essentiels tels que les assurances, l’énergie, les télécoms et les médias et le divertissement. Présent en France et à l’international avec un centre de contact au Maroc à Casablanca, l’ensemble des entreprises est composé d’environ 30 salariés. - Former et apporter du support niveau 3 aux équipes terrains - Tester les nouveaux produits et technologies - Réaliser de la veille technologique sur l’évolution des normes et standards  - Animation et reportings réguliers Votre profil : - Vous avez 5 ans d’expérience minimum dans le domaine des plateformes de service IPTV ; 
                    - Une bonne maîtrise des technologies Android native : Java, kotlin, et de l’IDE android studio ;
                    - Une bonne maîtrise des technologies IOS native : Swift, Objective-C et de l’IDE X-code ; 
                    - Une bonne maîtrise de la technologie API REST et du langage JSON, XML ; - Une bonne connaissance du langage PHP, technologie IMS et IPTV ; - Vous avez la capacité à vous approprier rapidement les nouvelles technologies du domaine ; - Vous avez envie de vous insérer rapidement au sein d’une équipe dynamique, opérationnelle et réactive ;- Vous êtes autonome et vous savez faire preuve d’initiative, vous êtes force de proposition ; -Vous avez un bon niveau d'anglais oral et écrit. Type d'emploi : Temps plein Date de début prévue : 01/01/2024Stage pfe en developpement informatique R/H "
                    />
                    
                
              </div>
            </div>
          </main>
        </div>
      </div>
    
    </div>
  )
}

export default DetailsInfo
