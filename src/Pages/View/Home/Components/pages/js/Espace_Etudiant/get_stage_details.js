import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../../../../AuthContext';
import Sidebar from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant';
import TopBar from '../../../../../../../Components/Components/Js/TopBar';

function GetStageDetails() {
  const { authData } = useAuth();
  const accessToken = authData.access_token;
  const navigate = useNavigate();

  const [internshipDetails, setInternshipDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5555/upf/students/internship', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setInternshipDetails(response.data);
      } catch (error) {
        console.error(error);
        // Handle error (e.g., redirect to login page)
        
      }
    };

    fetchData();
  }, [accessToken]);

  return (
    <div>
      <Sidebar />
      <div className='content'>
        <div className='content__topbar'>
          <TopBar />
        </div>
        <div className='content__menu'>
          <main>
            <div className='cards__container'>
              {internshipDetails ? (
                <div className='account__container'>
                    <div className='content__header__account'>
                    <h2>Internship Details</h2>
                    </div>
                    
                    <div className='card__content__detail'>
                    <p><b>Entreprise:</b> {internshipDetails.company}</p>
                    <p><b>Date de début de stage:</b> {internshipDetails.startDate}</p>
                    <p><b>Date de fin de stage:</b> {internshipDetails.endDate}</p>
                    <p><b>ville:</b> {internshipDetails.city}</p>
                    <p><b>Pays:</b> {internshipDetails.country}</p>
                    <p><b>Durée de stage avec semaine: </b>{internshipDetails.duration}</p>
                    <p><b>Date de soutenance:</b>{internshipDetails.defenseDate}</p>
                    </div>
                    
                    </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default GetStageDetails;
