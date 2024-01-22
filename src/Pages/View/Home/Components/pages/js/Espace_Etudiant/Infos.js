import React, { useEffect, useState } from 'react';
import '../../css/Account.css';
import '../../css/Postuler.css';
import '../../../../../../View/Home/Components/pages/css/Infos.css';
import Sidebar from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant';
import TopBar from '../../../../../../../Components/Components/Js/TopBar';
import axios from 'axios';
import { useAuth } from '../../../../../../../AuthContext.js';
import OfferInfosCard from '../../../../../../../Components/Components/Js/OfferInfosCard.js';
import { Button } from '../../../../../../../Components/Mini-Components/Js/Button.js';

function Infos() {
  const { authData } = useAuth();
  const accessToken = authData.access_token;
  const [jobOffers, setJobOffers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobOffers = async () => {
      try {
        const response = await axios.get('http://localhost:5555/upf/offers/student', {
          headers: {
            'Authorization': `Bearer ${accessToken}`          
          }
        });


        setJobOffers(response.data);
      } catch (error) {
        console.error('Error fetching job offers:', error);
        setError('An error occurred while fetching job offers.');
      }
    };

    fetchJobOffers();
  }, [accessToken]);
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
                {error && <p>{error}</p>}
                <div className='cards__container'>
                  <div className='cards__cadre'>
                    {jobOffers.map((offer) => (
                      <div key={offer.id} >
                        <OfferInfosCard
                          
                          imgEntreprise={offer.companyName === 'Capgemini' ? '../images/Entreprise/Capgemini.png' :
                          offer.companyName === 'Atos' ? '../images/Entreprise/Atos.png' :
                          offer.companyName === 'CGI' ? '../images/Entreprise/CGI.png' :
                          '../images/Entreprise/Oracle.png' }
                          titre={offer.title}
                          nomEntreprise={offer.companyName}
                          lieuEntreprise={offer.city}
                          detailStage={offer.description}
                        />
                        <div className='card__content__detail'  >
                            <Button
                              buttonStyle={'btn--detail--style'}
                              buttonSize={'btn--detail--size'}
                              children={'Details'}
                              buttonPath={`/Espace_Etudiant/DetailsInfo/${offer.id}`}
                              className='button__detail'

                            />
                         </div> 
                      <div>                 
                        </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>       
          </main>
        </div>
      </div>
    
    </div>
  )
}

export default Infos
