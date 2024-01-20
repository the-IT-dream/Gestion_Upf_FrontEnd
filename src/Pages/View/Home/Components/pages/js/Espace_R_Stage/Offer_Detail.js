import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CapgeminiLogo from '../../../../../../../images/Entreprise/Capgemini.png'
import axios from 'axios';
import { useAuth } from '../../../../../../../AuthContext';
import DetailsCard from '../../../../../../../Components/Components/Js/DetailsCard';
import OfferDetails from '../../../../../../../Components/Components/Js/OfferDetails';
import TopBar_Rs from '../../../../../../../Components/Components/Js/TopBar_Rs';
import Sidebar_Responsable_de_Stage from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Responsable_de_Stage';
function Offer_Detail() {
    const [offer, setOffer] = useState({});
    const [error, setError] = useState(null);
    const { authData } = useAuth();
    const accessToken = authData.access_token;
    const { id } = useParams();
  
    useEffect(() => {
      const fetchOfferDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:5555/upf/offers/${id}`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          });
  
          setOffer(response.data);
        } catch (error) {
          console.error('Error fetching offer details:', error);
          setError('An error occurred while fetching offer details.');
        }
      };
  
      fetchOfferDetails();
    }, [id, accessToken]);
  
    return (
        <div>
            <Sidebar_Responsable_de_Stage />
            <div className='content'>
                <div className='content__topbar'>
                <TopBar_Rs />
                </div>
                <div className='content__menu'>
                    <main> 
                        <div className='Details__container'>
                            <div className='Details__cadre'>
                                <DetailsCard 
                                    imgEntreprise={offer.companyName === 'Capgemini' ? {CapgeminiLogo} :
                                    offer.companyName === 'Atos' ? '../images/Entreprise/Atos.png' :
                                    offer.companyName === 'CGI' ? '../images/Entreprise/CGI.png' :
                                    '../images/Entreprise/Oracle.png' }
                                    nomEntreprise={offer.companyName}
                                    lieuEntreprise={offer.city}
                                    detailStage={offer.title}
                                />
                                <OfferDetails 
                                imgEntreprise={offer.companyName === 'Capgemini' ? '../images/Entreprise/Capgemini.png' :
                                offer.companyName === 'Atos' ? '../images/Entreprise/Atos.png' :
                                offer.companyName === 'CGI' ? '../images/Entreprise/CGI.png' :
                                '../images/Entreprise/Oracle.png' }
                                nomEntreprise= {offer.companyName}
                                lieuEntreprise={offer.city}
                                durationPerWeek={offer.durationPerWeek}
                                startDate={offer.startDate}
                                detailStage={offer.description}
                                deadLine={offer.deadLine}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
  }
  
  export default Offer_Detail;