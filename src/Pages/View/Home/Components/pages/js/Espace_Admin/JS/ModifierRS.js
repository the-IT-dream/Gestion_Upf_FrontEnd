import React, { useState, useEffect } from 'react';
import '../../../../css/Account.css';
import Input from '../../../../../../../../Components/Mini-Components/Js/Input';
import { Button } from '../../../../../../../../Components/Mini-Components/Js/Button';
import Sidebar_admin from '../../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_admin';
import TopBar_admin from '../../../../../../../../Components/Components/Js/TopBar_admin';
import { useAuth } from '../../../../../../../../AuthContext.js';
import {useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ModifierRS() {
  const { authData } = useAuth();
  const accessToken = authData.access_token;
  const refreshToken = authData.refresh_token;
  const navigate = useNavigate();

  const { id } = useParams();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mail: '',
    cin: '',
    grade: '',
    departement: '',
  });

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/upf/employees/${id}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`     
           }
        });
        setFormData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          mail: response.data.mail,
          departement: response.data.departement,
          cin: response.data.cin,
          grade: response.data.grade,
          
        });
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, [id, accessToken]);

  const handleChange = (event, fieldName) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleUpdateRS = async (event) => {
    event.preventDefault();

    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      mail: formData.mail,
      departement : formData.departement,
      grade : formData.grade,
      cin : formData.cin,
    };

    try {
      const response = await axios.put(`http://localhost:5555/upf/employees/${id}`, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${refreshToken}`        },
      });

      navigate('/Espace_admin/ResponsableStage');
      console.log('Student updated successfully:', response.data);
      // Ajoutez ici la logique pour rediriger l'utilisateur ou afficher un message de succès
    } catch (error) {
      console.error('Error updating student:', error);
      // Ajoutez ici la logique pour gérer les erreurs, par exemple, afficher un message d'erreur
    }
  };
      return (
        <div>
      <Sidebar_admin/>

      <div className='content'>
        <div className='content__topbar'>
          <TopBar_admin  />      
        </div>
        <div className='content__menu'>
          <main> 
          <div className='account__container'>
      <div className='content__account'>
        <form className='account__form'>
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
            onChange={(e) => handleChange(e, 'firstName')}
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
            onChange={(e) => handleChange(e, 'lastName')}
          />
          <Input
            htmlfor={'mail'}
            label={'mail'}
            type={'mail'}
            id={'mail'}
            name={'mail'}
            value={formData.mail}
            placeholder={'azerty@gmail.com'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
            onChange={(e) => handleChange(e, 'mail')}
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
            onChange={(e) => handleChange(e, 'grade')}
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
            onChange={(e) => handleChange(e, 'cin')}
          />
          <Input
            htmlfor={'Departement'}
            label={'Departement'}
            type={'text'}
            id={'Niveau'}
            name={'niveau'}
            value={formData.departement}
            placeholder={'Niveau'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
            onChange={(e) => handleChange(e, 'departement')}
          />
          
          <div className='footer__account'>
        <div className='image__button__footer'>
          <button
            className='btn--save--style btn--save--size'
            type='submit'
            onClick={handleUpdateRS}
          >Modifier Etudiant</button>
          
        </div>
      </div>
        </form>
      </div>
      
    </div>
          </main>
        </div>
      </div>
    
    </div>
      )
    }
    

export default ModifierRS
