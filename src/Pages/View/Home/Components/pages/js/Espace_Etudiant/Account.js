import '../../css/Account.css';
import { Button } from '../../../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../../../Components/Mini-Components/Js/Input';
import Sidebar from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant';
import TopBar from '../../../../../../../Components/Components/Js/TopBar';
import Sidebar_Responsable_de_Stage from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Responsable_de_Stage';

import React,{useState, useEffect} from 'react';


import axios from 'axios';
import { useAuth } from '../../../../../../../AuthContext';
function Account() {
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

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5555/upf/students/myProfil', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        const userProfile = response.data;
        setFormData({
          firstName: userProfile.firstName,
          lastName: userProfile.lastName,
          email: userProfile.mail,
          filiere: userProfile.major,
          cin: userProfile.cin,
          niveau: userProfile.level,
          cne: userProfile.cne,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [accessToken]);

  const [clicked, setClicked] = useState(false);


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
        <h2>Profile Details</h2>
        <div className='image__container'>
          <img src='../../images/avatar/1.png' alt='avatar' />
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
                children={'reset'}
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
          placeholder={'CD********'}
          required={'required'}
          LoginFormGroup={'Login__Form__Group'}
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
          placeholder={'A********'}
          required={'required'}
          LoginFormGroup={'Login__Form__Group'}
        />
      </form>

      </div>
      <div className='footer__account'>
        <div className='image__button__footer'>
          <Button
            buttonStyle={'btn--save--style'}
            buttonSize={'btn--save--size'}
            children={'Save Changes'}
            buttonPath={'/Espace_Etudiant'}
          />
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
