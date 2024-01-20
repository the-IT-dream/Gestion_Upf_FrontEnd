import React, { useState, useEffect } from 'react';
import '../../../../css/Account.css';
import Input from '../../../../../../../../Components/Mini-Components/Js/Input';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../../../../../../../AuthContext.js';
import {useNavigate  } from 'react-router-dom';
import Sidebar from '../../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant.js';
import TopBar from '../../../../../../../../Components/Components/Js/TopBar.js';
import Sidebar_admin from '../../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_admin.js';
import TopBar_admin from '../../../../../../../../Components/Components/Js/TopBar_admin.js';

function ModifierEtudiant() {
  const { authData } = useAuth();
  const accessToken = authData.access_token;
  const navigate = useNavigate();

  const { id } = useParams();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    filiere: '',
    cin: '',
    niveau: '',
    cne: '',
  });

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/upf/students/${id}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`     
           }
        });
        setFormData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.mail,
          filiere: response.data.major,
          cin: response.data.cin,
          niveau: response.data.level,
          cne: response.data.cne,
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

  const handleUpdateStudent = async () => {
    try {
      const response = await axios.put(`http://localhost:5555/upf/students/${id}`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });
      navigate('/Espace_admin/Student_list');
      console.log('Student updated successfully:', response.data);
      // Ajoutez ici la logique pour gérer la mise à jour réussie
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
            htmlfor={'First Name'}
            label={'First Name'}
            type={'text'}
            id={'First Name'}
            name={'firstName'}
            value={formData.firstName}
            placeholder={'First Name'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
            onChange={(e) => handleChange(e, 'firstName')}
          />
          <Input
            htmlfor={'Last Name'}
            label={'Last Name'}
            type={'text'}
            id={'Last Name'}
            name={'lastName'}
            value={formData.lastName}
            placeholder={'Last Name'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
            onChange={(e) => handleChange(e, 'lastName')}
          />
          <Input
            htmlfor={'Email'}
            label={'Email'}
            type={'email'}
            id={'email'}
            name={'email'}
            value={formData.email}
            placeholder={'azerty@gmail.com'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
            onChange={(e) => handleChange(e, 'email')}
          />
          <Input
            htmlfor={'Filiere'}
            label={'Filiere'}
            type={'text'}
            id={'Filiere'}
            name={'filiere'}
            value={formData.filiere}
            placeholder={'Filiere'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
            onChange={(e) => handleChange(e, 'filiere')}
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
            htmlfor={'Niveau'}
            label={'Niveau'}
            type={'text'}
            id={'Niveau'}
            name={'niveau'}
            value={formData.niveau}
            placeholder={'Niveau'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
            onChange={(e) => handleChange(e, 'niveau')}
          />
          <Input
            htmlfor={'CNE'}
            label={'CNE'}
            type={'text'}
            id={'Cne'}
            name={'cne'}
            value={formData.cne}
            placeholder={'A****'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
            onChange={(e) => handleChange(e, 'cne')}
          />
          <div className='footer__account'>
        <div className='image__button__footer'>
          <button
            className='btn--save--style btn--save--size'
            type='submit'
            onClick={handleUpdateStudent}
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
  );
}
export default ModifierEtudiant;
