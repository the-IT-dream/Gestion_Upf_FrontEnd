import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Account.css';
import { Button } from '../../../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../../../Components/Mini-Components/Js/Input';
import Sidebar_Responsable_de_Stage from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Responsable_de_Stage';
import TopBar_Rs from '../../../../../../../Components/Components/Js/TopBar_Rs';
import { useAuth } from '../../../../../../../AuthContext';
import { useNavigate  } from 'react-router-dom';

function Add_company() {
  const { authData } = useAuth();
  const accessToken = authData.access_token;
  const navigate = useNavigate();
  const [focusedInput, setFocusedInput] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '',
    description: '',
    logo: null, // Ajout du champ pour le logo
  });

  const handleChange = (event) => {
    const { name, type } = event.target;
  
    // Gérer les changements de champ de fichier séparément
    if (type === 'file') {
      setFormData({ ...formData, [name]: event.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: event.target.value });
    }
  };

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5555/upf/companies',
        {
          companyName: formData.companyName,
          description: formData.description,
          // Add other fields as needed
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      navigate('/Espace_R_Stage/gestion_des_entreprises_partenaires');

      console.log('Company added successfully:', response.data);
    } catch (error) {
      console.error('Error adding company:', error);
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
              <div className='content__header__account'>
                <h2>Publier une nouvelle offre de stage</h2>
              </div>
              <div className='content__account'>
                <form className='account__form'>
                  <Input
                    htmlfor={'Nom de l\'entreprise'}
                    label={'Nom de l\'entreprise'}
                    type={'text'}
                    id={'companyName'}
                    name={'companyName'}
                    value={formData.companyName}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus('Nom de l\'entreprise')}
                    placeholder={'Nom de l\'entreprise'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />
                  <Input
                    htmlfor={'Description de l\'entreprise'}
                    label={'Description de l\'entreprise'}
                    type={'text'}
                    id={'description'}
                    name={'description'}
                    value={formData.description}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus('Description de l\'entreprise')}
                    placeholder={'Description de l\'entreprise'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />
                  <Input
                    htmlfor={'logo de l\'entreprise'}
                    label={'logo de l\'entreprise'}
                    type={'file'}
                    id={'logo'}
                    name={'logo'}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus('logo de l\'entreprise')}
                    placeholder={'logo de l\'entreprise'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />
                  
                </form>
              </div>
              <div className='footer__account'>
                <div className='image__button__footer'>
                  <button
                    className='btn--save--style btn--save--size'
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Ajouter
                  </button>
                  <Button
                    className='reset_butt'
                    buttonStyle={'btn--reset--style'}
                    buttonSize={'btn--reset--size'}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Add_company;
