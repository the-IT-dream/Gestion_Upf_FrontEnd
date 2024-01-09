import React, { useState } from 'react';
import '../../css/Account.css';
import { Button } from '../../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../../Components/Mini-Components/Js/Input';
import axios from 'axios';
import { useAuth } from '../../../../../../AuthContext.js';

function AjoutEtudiant() {
  const { authData } = useAuth();
  const accessToken = authData.access_token;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    filiere: '',
    cin: '',
    niveau: '',
    cne: '',
  });

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      mail: formData.email,
      major: formData.filiere,
      cin: formData.cin,
      level: formData.niveau,
      cne: formData.cne,
    };

    try {
      const response = await axios.post('http://localhost:5555/upf/students', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`        },
      });

      console.log('Student added successfully:', response.data);
      // Ajoutez ici la logique pour rediriger l'utilisateur ou afficher un message de succès
    } catch (error) {
      console.error('Error adding student:', error);
      // Ajoutez ici la logique pour gérer les erreurs, par exemple, afficher un message d'erreur
    }
  };

  return (
    <div className='account__container'>
      <div className='content__header__account'>
        <h2>Profile Details</h2>
        <div className='image__container'>
          <img src='./images/avatar/1.png' />
          <div className='image__text__account'>
            <div className='image__button'>
              <Button
                buttonStyle={'btn--save--style'}
                buttonSize={'btn--save--size'}
                children={'Upload new photo'}
                buttonPath={'/Espace_Etudiant'}
              />
              <Button
                className='reset_butt'
                buttonStyle={'btn--resetMini--style'}
                buttonSize={'btn--resetMini--size'}
                children={'Reset'}
                buttonPath={'/Espace_Etudiant'}
              />
            </div>
            <div className='parag'>
              <p>allowed image png ....</p>
            </div>
          </div>
        </div>
      </div>
      <div className='content__account'>
        <form className='account__form' onSubmit={'/StudentList'}>
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            htmlfor={'Niveau'}
            label={'Niveau'}
            type={'text'}
            id={'Niveau'}
            name={'niveau'}
            value={formData.niveau}
            placeholder={'Niveau'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
            onChange={handleChange}
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
            onChange={handleChange}
          />
          
        </form>
            </div>
            <div className='footer__account' >
          <div className='image__button__footer' >
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
                        // buttonPath={'/Espace_Etudiant'}
                      />
              </div>
              </div>
              
            
        </div>
      )
    }
    

export default AjoutEtudiant
