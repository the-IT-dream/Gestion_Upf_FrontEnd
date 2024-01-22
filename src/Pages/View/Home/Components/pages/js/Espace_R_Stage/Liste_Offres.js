import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../../../../../../AuthContext';
import Sidebar_Responsable_de_Stage from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Responsable_de_Stage';
import TopBar_Rs from '../../../../../../../Components/Components/Js/TopBar_Rs';
import OfferInfosCard from '../../../../../../../Components/Components/Js/OfferInfosCard';
import { Button } from '../../../../../../../Components/Mini-Components/Js/Button';


function Liste_Offres() {
  const { authData } = useAuth();
  const accessToken = authData.access_token;
  const [jobOffers, setJobOffers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobOffers = async () => {
      try {
        const response = await axios.get('http://localhost:5555/upf/offers', {
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

  const handleDeleteOffer = async (offerId) => {
    try {
      await axios.delete(`http://localhost:5555/upf/offers/${offerId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      console.log('offer deleted successfully:', offerId);
      // Update the state to reflect the deletion
      setJobOffers((prevOffers) => prevOffers.filter((offer) => offer.id !== offerId));
    } catch (deleteError) {
      console.error('Error deleting offer:', deleteError);
      // Add error handling logic here, e.g., display an error message
    }
  };

  return (
    <div>
      <Sidebar_Responsable_de_Stage />
      <div className='content'>
        <div className='content__topbar'>
          <TopBar_Rs />
        </div>
        <div className='content__menu'>
          <main>
            <div className='account__container'>
              
              <div className='table__header'>
              <div className='content__header__account'>
                <h2>Liste des offres de stage</h2>  
                                    
              </div>
          <div>
            <Button
              buttonStyle={'btn--detail--style'}
              buttonSize={'btn--detail--size'}
              children={'Ajouter'}
              buttonPath={'/Espace_R_Stage/Publier_les_offres_de_stage'}
              className='button__detail'

            />
          </div>
        </div>
              {error && <p>{error}</p>}
              <div className='cards__container'>
                <div className='cards__cadre'>
                  {jobOffers.map((offer) => (
                    <div key={offer.id}>
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
                      <div className='card__footer'>
                      <center>
                      <div>
                         <button onClick={() => handleDeleteOffer(offer.id)} className='btn--detail--style btn--detail--size'>
                          Supprimer
                        </button>
                        
                          <Button
                            buttonStyle={'btn--detail--style'}
                            buttonSize={'btn--detail--size'}
                            children={'Details'}
                            buttonPath={`/Espace_R_Stage/Offer_Detail/${offer.id}`}
                            className='button__detail'

                          />
                          
                        </div>
                        </center>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Liste_Offres;
