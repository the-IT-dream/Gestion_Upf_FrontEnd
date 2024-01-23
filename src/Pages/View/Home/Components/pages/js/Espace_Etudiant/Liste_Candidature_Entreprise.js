import React, { useState, useEffect } from 'react';
import Sidebar from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant';
import TopBar from '../../../../../../../Components/Components/Js/TopBar';
import axios from 'axios';
import { useAuth } from '../../../../../../../AuthContext';
function CandidatureList() {
  const [candidatures, setCandidatures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { authData } = useAuth();
  const accessToken = authData.access_token;
  const refreshToken = authData.refresh_token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5555/upf/students/candidacy/company/byUser',
          {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
          }
        );

        setCandidatures(response.data);
      } catch (error) {
        console.error('Error fetching candidatures:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const downloadFile = async (candidacyId, fileType) => {
    try {
      const response = await axios.get(
        `http://localhost:5555/upf/students/candidacy/${fileType}/${candidacyId}`,
        {
          responseType: 'arraybuffer',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${fileType}.pdf`); // Change the file extension based on the actual file type
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(`Error downloading ${fileType}:`, error);
    }
  };

  return (
    <div>
        <Sidebar />
        <div className='content'>
          <div className='content__topbar'>
            <TopBar />
          </div>
          <div className='content__menu'>
            <main>
              <div className='account__container'>
                
                <div className='table__header'>
                    <div className='content__header__account'>
                    <h2>Liste des candidatures</h2>  
                                        
                    </div>
                </div>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className='cards__container'>
                            <div className='cards__cadre account__form'></div>

                                {candidatures.map((candidature) => (
                                    <div className='card__infos'>
                                        <div className='card__header'>
                                        <h2><strong>Company:</strong> {candidature.company.companyName}</h2>
                                        </div>
                                        <br/>
                                        <div className='card__content'>
   
                                            <strong>Status: </strong> &nbsp;&nbsp;&nbsp; {candidature.candidacyForCompanyStatus}
                                            <br />
                                        
                                        <div className='card__footer butt__td'>
                                            <br />
                                            <button className=' btn--save--style btn--save--size' onClick={() => downloadFile(candidature.id, 'get-cv')}>
                                                Download CV
                                            </button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className='btn--save--style btn--save--size' onClick={() => downloadFile(candidature.id, 'get-cover-letter')}>
                                                Download Cover Letter
                                            </button>
                                        </div>
                                    
                                
                                    </div>
                                    </div>
                                ))}
                      
                        </div>
                    )}
              </div>
            </main>
          </div>
        </div>
    </div>
  );
}

export default CandidatureList;
