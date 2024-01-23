import '../../css/Account.css';
import { Button } from '../../../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../../../Components/Mini-Components/Js/Input';
import Sidebar from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant';
import TopBar from '../../../../../../../Components/Components/Js/TopBar';
import {useNavigate  } from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useAuth } from '../../../../../../../AuthContext';

function Account() {
  const { authData } = useAuth();
  const accessToken = authData.access_token;
  const refreshToken = authData.refresh_token;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    filiere: '',
    cin: '',
    niveau: '',
    cne: '',
  });

  const handleChange = (event, fieldName) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5555/upf/students/myProfil', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        const userProfileData = response.data;
        setUserProfile(userProfileData);
        setFormData({
          firstName: userProfileData.firstName,
          lastName: userProfileData.lastName,
          email: userProfileData.mail,
          filiere: userProfileData.major,
          cin: userProfileData.cin,
          niveau: userProfileData.level,
          cne: userProfileData.cne,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [accessToken]);

  const [clicked, setClicked] = useState(false);
  const handleUpdateStudent = async (event) => {
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
      const response = await axios.put(`http://localhost:5555/upf/students/${userProfile.id}`, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${refreshToken}`        },
      });

      navigate('/Espace_Etudiant/Account');
      console.log('Student updated successfully:', response.data);
      // Ajoutez ici la logique pour rediriger l'utilisateur ou afficher un message de succès
    } catch (error) {
      console.error('Error updating student:', error);
      // Ajoutez ici la logique pour gérer les erreurs, par exemple, afficher un message d'erreur
    }
  };

  return (
    <div>
      {/* <Sidebar /> */}
      <Sidebar/>
      <div className='content'>
        <div className='content__topbar'>
          <TopBar  />
        </div>
        <div className='content__menu'>
          <main>
    <div className='account__container'>
      <div className='header__button'>
        <Button
          onClick={() => { setClicked(!clicked) }}
          className={`butt__account ${clicked ? 'active' : 'inactive'}`}
          buttonStyle={'btn--account--style'}
          buttonSize={'btn--save--size'}
          children={'Account'}
          buttonPath={'/Espace_Etudiant/Account'}
          icon={'FaUser'}
        />
        <Button
          buttonStyle={`btn--account--style ${clicked ? 'active' : 'inactive'}`}
          buttonSize={'btn--save--size'}
          children={'Security'}
          buttonPath={'/Espace_Etudiant/Securite'}
        />
      </div>
      <div className='content__header__account'>
        <h2>Mon profile</h2>
        
      

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
            htmlfor={'Email'}
            label={'Email'}
            type={'email'}
            id={'email'}
            name={'email'}
            value={formData.email}
            placeholder={'azerty@gmail.com'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
            
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
      </form>

      </div>
      <div className='footer__account'>
        <div className='image__button__footer'>
        <button
            className='btn--save--style btn--save--size'
            type='submit'
            onClick={handleUpdateStudent}
          >Modifier </button>
          <Button
            className='reset_butt'
            buttonStyle={'btn--resetMini--style'}
            buttonSize={'btn--resetMini--size'}
            children={'Security'}
            buttonPath={'/Espace_Etudiant'}
          />
        </div>
      </div>
    </div>
          </main>
        </div>
      </div>
    
  </div>
  )

}

export default Account;
