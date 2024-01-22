import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../../../../../../AuthContext';
import Sidebar_Responsable_de_Stage from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Responsable_de_Stage';
import TopBar_Rs from '../../../../../../../Components/Components/Js/TopBar_Rs';
import { Button } from '../../../../../../../Components/Mini-Components/Js/Button';
import InfosCard from '../../../../../../../Components/Components/Js/InfosCard';


function List_companies() {
    const { authData } = useAuth();
    const accessToken = authData.access_token;
    const [companies, setCompanies] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCompanies = async () => {
        try {
          const response = await axios.get('http://localhost:5555/upf/companies', {
            headers: {
              'Authorization': `Bearer ${accessToken}`          
            }
          });
  
  
          setCompanies(response.data);
        } catch (error) {
          console.error('Error fetching Companies:', error);
          setError('An error occurred while fetching Companies.');
        }
      };
  
      fetchCompanies();
    }, [accessToken]);
  
    const handleDeleteCompany = async (CompanyId) => {
      try {
        await axios.delete(`http://localhost:5555/upf/companies/${CompanyId}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
  
        console.log('Company deleted successfully:', CompanyId);
        // Update the state to reflect the deletion
        setCompanies((prevCompanies) => prevCompanies.filter((Company) => Company.id !== CompanyId));
      } catch (deleteError) {
        console.error('Error deleting Company:', deleteError);
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
                  <h2>Liste des entreprises partenaires</h2>  
                                      
                </div>
            <div>
              <Button
                buttonStyle={'btn--detail--style'}
                buttonSize={'btn--detail--size'}
                children={'Ajouter'}
                buttonPath={'/Espace_R_Stage/Ajouter_Entreprise'}
                className='button__detail'
  
              />
            </div>
          </div>
                {error && <p>{error}</p>}
                <div className='cards__container'>
                  <div className='cards__cadre'>
                    {companies.map((company) => (
                      <div key={company.id}>
                        <InfosCard
                          
                          imgEntreprise={company.companyName === 'Capgemini' ? '../images/Entreprise/Capgemini.png' :
                          company.companyName === 'Atos' ? '../images/Entreprise/Atos.png' :
                          company.companyName === 'CGI' ? '../images/Entreprise/CGI.png' :
                          company.companyName === 'Oracle' ? '../images/Entreprise/Oracle.png' :
                          '../images/Entreprise/CGI.png' }
                          nomEntreprise={company.companyName}
                          detailStage={company.description}
                        />
                        <div className='card__footer'>
                        <center>
                        <div>
                           <button onClick={() => handleDeleteCompany(company.id)} className='btn--detail--style btn--detail--size'>
                            Supprimer
                          </button>
                          
                            
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

export default List_companies;
