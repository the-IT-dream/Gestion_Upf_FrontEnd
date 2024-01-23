import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from '../../../../../../../Components/Mini-Components/Js/Input';
import { useAuth } from '../../../../../../../AuthContext';
import { useParams } from 'react-router';
import '../../css/Account.css';
import '../../css/Postuler.css';
import Sidebar_SuperViser from '../../../../../../../Components/Mini-Components/SideBar/components/SideBar_SuperViser';
import TopBar_SuperViser from '../../../../../../../Components/Components/Js/TopBar_SuperViser';
import { useNavigate  } from 'react-router-dom';

function ModifyDefenseDate() {
  const [internshipDetails, setInternshipDetails] = useState(null);
  const [newDefenseDate, setNewDefenseDate] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const { authData } = useAuth();
  const accessToken = authData.access_token;
  const refreshToken = authData.refresh_token;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInternshipDetails = async () => {
      try {
        setIsFetching(true);
        const response = await axios.get(`http://localhost:5555/upf/supervisors/internship/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Replace with your access token
          },
        });
        setInternshipDetails(response.data);
      } catch (error) {
        console.error(error);
        // Handle error, e.g., redirect to login page
      } finally {
        setIsFetching(false);
      }
    };

    fetchInternshipDetails();
  }, [accessToken]);

  const handleUpdateDefenseDate = async () => {
    try {
      setIsUpdating(true);
      const response = await axios.put(
        `http://localhost:5555/upf/supervisors/internship/${id}`,
        {
          defenseDate: newDefenseDate,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${refreshToken}`, // Replace with your access token
          },
        }
      );
      console.log(response.data);
      navigate('/Espace_SuperViser/Liste_Details_Stage')
    } catch (error) {
      console.error(error);
      // Handle error
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div>
      <Sidebar_SuperViser />
      <div className='content'>
        <div className='content__topbar'>
          <TopBar_SuperViser />
        </div>
        <div className='content__menu'>
          <main>
            <div className='cards__container'>
              {isFetching ? (
                <p>Loading...</p>
              ) : (
                <div>
                  <h2>Modify Defense Date</h2>
                  {internshipDetails && (
                    <form className='account__form'>
                        <Input
                            htmlfor={'Nom de societe'}
                            label={'Nom de societe'}
                            type={'text'}
                            id={'Nom de societe'}
                            name={'nom_Societe'}
                            value={internshipDetails.company}
                            placeholder={'Nom de societe'}
                            required={'required'}
                            LoginFormGroup={'Login__Form__Group'}
                        />
                        <Input
                            htmlfor={'Date de debut'}
                            label={'Date de debut'}
                            type={'text'}
                            id={'Date de debut'}
                            name={'date_debut'}
                            value={internshipDetails.startDate}
                            LoginFormGroup={'Login__Form__Group'}
                        />
                        <Input
                            htmlfor={'Date de fin'}
                            label={'Date de fin'}
                            type={'text'}
                            id={'Date de fin'}
                            name={'date_fin'}
                            value={internshipDetails.endDate}
                            LoginFormGroup={'Login__Form__Group'}
                        />
                        <Input
                            htmlfor={'Ville'}
                            label={'Ville'}
                            type={'text'}
                            id={'Ville'}
                            name={'Ville'}
                            value={internshipDetails.city}

                            LoginFormGroup={'Login__Form__Group'}
                        />
                        <Input
                            htmlfor={'Pays'}
                            label={'Pays'}
                            type={'text'}
                            id={'Pays'}
                            name={'pays'}
                            value={internshipDetails.country}
                            placeholder={'Pays'}
                            required={'required'}
                            LoginFormGroup={'Login__Form__Group'}
                        />
                      <p>Date de soutanance courante: {internshipDetails.defenseDate}</p>
                      <Input
                      label={'Date de soutenance'}
                        type='date'
                        value={newDefenseDate}
                        onChange={(e) => setNewDefenseDate(e.target.value)}
                        LoginFormGroup={'Login__Form__Group'}
                      />
                      <button className='btn--save--style btn--save--size' onClick={handleUpdateDefenseDate} disabled={isUpdating}>
                        Update Defense Date
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ModifyDefenseDate;
