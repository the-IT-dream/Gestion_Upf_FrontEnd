import React, { useState } from 'react';
import '../../../../css/Account.css';
import { Button } from '../../../../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../../../../Components/Mini-Components/Js/Input';
import Sidebar_admin from '../../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_admin';
import TopBar_admin from '../../../../../../../../Components/Components/Js/TopBar_admin';
import axios from 'axios';
import { useAuth } from '../../../../../../../../AuthContext.js';
import { useNavigate  } from 'react-router-dom';

function AjoutRS() {
  const { authData } = useAuth();
  const navigate = useNavigate();
  const accessToken = authData.access_token;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mail: '',
    cin: '',
    grade: '',
    departement: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5555/upf/employees',
        {
          ...formData,
          role: {
            roleName: 'INTERNSHIP_MANAGER',
          },
          
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`        },
        }
      );
      
      navigate('/Espace_admin/ResponsableStage');
      console.log('Employee added successfully:', response.data);
      // Add any additional logic you want to execute upon successful submission

    } catch (error) {
      console.error('Error adding employee:', error);
      // Handle errors, show a message, etc.
    }
  };

  return (
    <div>
      <Sidebar_admin />
      <div className='content'>
        <div className='content__topbar'>
          <TopBar_admin />
        </div>
        <div className='content__menu'>
          <main>
            <div className='account__container'>
              <div className='content__account'>
                <form className='account__form' onSubmit={handleSubmit}>
                  <Input
                    htmlfor={'Prénom'}
                    label={'Prénom'}
                    type={'text'}
                    id={'Prénom'}
                    name={'firstName'}
                    value={formData.firstName}
                    placeholder={'Prénom'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                    onChange={handleChange}
                  />
                  <Input
                    htmlfor={'Nom'}
                    label={'Nom'}
                    type={'text'}
                    id={'Nom'}
                    name={'lastName'}
                    value={formData.lastName}
                    placeholder={'Nom'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                    onChange={handleChange}
                  />
                  <Input
                    htmlfor={'mail'}
                    label={'Mail'}
                    type={'mail'}
                    id={'mail'}
                    name={'mail'}
                    value={formData.mail}
                    placeholder={'azerty@gmail.com'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                    onChange={handleChange}
                  />
                  <Input
                    htmlfor={'cin'}
                    label={'Cin'}
                    type={'text'}
                    id={'cin'}
                    name={'cin'}
                    value={formData.cin}
                    placeholder={'CD****'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                    onChange={handleChange}
                  />
                  <Input
                    htmlfor={'departement'}
                    label={'departement'}
                    type={'text'}
                    id={'departement'}
                    name={'departement'}
                    value={formData.departement}
                    placeholder={'departement'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                    onChange={handleChange}
                  />
                  <Input
                    htmlfor={'grade'}
                    label={'Grade'}
                    type={'text'}
                    id={'grade'}
                    name={'grade'}
                    value={formData.grade}
                    placeholder={'grade'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                    onChange={handleChange}
                  />

                  {/* Add other input fields as needed */}

                </form>
              </div>
              <div className='footer__account'>
                <div className='image__button__footer'>
                <button
                        className='btn--save--style btn--save--size'                      
                        onClick={handleSubmit}
                        type="submit"
                      >Ajouter</button>
                  <Button
                    className='reset_butt'
                    buttonStyle={'btn--reset--style'}
                    buttonSize={'btn--reset--size'}
                    children={'annuler'}
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

export default AjoutRS;
