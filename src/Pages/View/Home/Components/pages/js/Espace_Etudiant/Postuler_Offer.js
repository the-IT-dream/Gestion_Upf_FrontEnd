import React, { useEffect, useState } from 'react';
import '../../css/Account.css';
import '../../css/Postuler.css';

import { Button } from '../../../../../../../Components/Mini-Components/Js/Button'
import Input from '../../../../../../../Components/Mini-Components/Js/Input';
import Sidebar from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant';
import TopBar from '../../../../../../../Components/Components/Js/TopBar';
import axios from 'axios';
import { useAuth } from '../../../../../../../AuthContext';
import { useNavigate  } from 'react-router-dom';
function PostulerOffer(){
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState('');
  const { authData } = useAuth();
  const accessToken = authData.access_token;
  const refreshToken = authData.refresh_token;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cv: null,
    coverLetter: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5555/upf/offers/student', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          },
        });

        setOffers(response.data);

      } catch (error) {
        console.error('Error fetching offers:', error);
      }
    };

    fetchData();
  }, [accessToken]);

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('cv', formData.cv);
      formDataToSend.append('coverLetter', formData.coverLetter);
      formDataToSend.append('offer', selectedOffer);

      const response = await axios.post(
        'http://localhost:5555/upf/students/candidacy-for-offer',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${refreshToken}`          },
        }
      );

      console.log('Candidacy submitted successfully:', response.data);
      navigate('/Espace_Etudiant');
      // Ajoutez ici la logique pour gérer la réponse si nécessaire

    } catch (error) {
      console.error('Error submitting candidacy:', error);
      // Ajoutez ici la logique pour gérer les erreurs si nécessaire
    }
  };

  // State to track focused input
  const [focusedInput, setFocusedInput] = useState(null);

  // Function to handle input focus
  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  return (
    <div>
      <Sidebar/>
      <div className='content'>
        <div className='content__topbar'>
          <TopBar />
            
        </div>
        <div className='content__menu'>
          <main>
            <div className='Postuler__account__container'>
              <div className='content__header__account'>
                <h2>Postuler</h2>
                <div className='image__container'>
                  <div className='image__text__account'>
                    <div className='image__button'>
                    <select
                        id="company"
                        name="company"
                        value={selectedOffer}
                        onChange={(e) => setSelectedOffer(e.target.value)}
                      >
                        <option value="">Sélectionnez une entreprise</option>
                        {offers.map((offer) => (
                          <option key={offer.id} value={offer.title}>
                            {offer.companyName} : {offer.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className='content__account'>
                <form className='account__form'>
                <Input
                      htmlfor={'cv'}
                      label={'CV:'}
                      type={'file'}
                      id={'cv'}
                      name={'cv'}
                      onChange={handleFileChange}
                      onFocus={() => handleInputFocus('cv')}
                      placeholder={'cv'}
                      required={'required'}
                      LoginFormGroup={'Login__Form__Group'}
                    />
                  <Input
                      htmlfor={'coverLetter'}
                      label={'Lettre de motivation:'}
                      type={'file'}
                      id={'coverLetter'}
                      name={'coverLetter'}
                      onChange={handleFileChange}
                      onFocus={() => handleInputFocus('coverLetter')}
                      placeholder={'coverLetter'}
                      required={'required'}
                      LoginFormGroup={'Login__Form__Group'}
                    />
                  </form>
              </div>
              <div className='footer__account'>
                <div className='image__button__footer'>
            
                  <button className='btn--save--style btn--save--size' onClick={handleSubmit} type='submit'>Postuler</button>
                  <Button
                    className='reset_butt'
                    buttonStyle={'btn--remove--style'}
                    buttonSize={'btn--remove--size'}
                    children={'Annuler'}
                    buttonPath={'/Espace_Etudiant'}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    
    </div>
  );

}
export default PostulerOffer;