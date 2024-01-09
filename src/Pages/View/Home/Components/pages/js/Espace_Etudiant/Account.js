import React,{useState} from 'react';
import '../../css/Account.css';
import { Button } from '../../../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../../../Components/Mini-Components/Js/Input';
import Sidebar from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant';
import TopBar from '../../../../../../../Components/Components/Js/TopBar';
import Sidebar_Responsable_de_Stage from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Responsable_de_Stage';

function Account() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // State to track focused input
  const [focusedInput, setFocusedInput] = useState(null);

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle input focus
  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling form submission here
    // For example, you can send the data to a server for authentication
    console.log('Form submitted with data:', formData);
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
                className="butt__account"
                buttonStyle={'btn--account--style'} 
                buttonSize={'btn--save--size'}
                children={'Account'} 
                buttonPath={'/Espace_Etudiant/Account'}
                icon={'FaUser'}
            />
             <Button
                className="butt__account"
                buttonStyle={'btn--account--style'} 
                buttonSize={'btn--save--size'}
                children={'Security'} 
                buttonPath={'/Espace_Etudiant/Securite'}
            />
        </div>
        <div className='content__header__account'>
          <h2>Profile Details</h2>
          <div className='image__container'>
            <img alt='' src='../../images/avatar/1.png'/>
            <div className='image__text__account'>
              <div className='image__button'>
                <input 
                  className='input__image'
                  type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"
                />
                <Button
                className='reset_butt'
                  buttonStyle={'btn--resetMini--style'} 
                  buttonSize={'btn--resetMini--size'}
                  children={'Reset'} 
                  // buttonPath={'/Espace_Etudiant'}
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
              name={'First Name'}
              value={formData.Email}
              onChange={handleChange}
              onFocus={handleInputFocus}
              placeholder={'First Name'}
              required={'required'}
              LoginFormGroup={'Login__Form__Group'}
            />
            <Input 
              htmlfor={'Last Name'}
              label={'Last Name'}
              type={'text'}
              id={'Last Name'}
              name={'Last Name'}
              value={formData.Email}
              onChange={handleChange}
              onFocus={handleInputFocus}
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
              value={formData.Email}
              onChange={handleChange}
              onFocus={handleInputFocus}
              placeholder={'azerty@gmail.com'}
              required={'required'}
              LoginFormGroup={'Login__Form__Group'}
            />
            <Input 
              htmlfor={'Filiere'}
              label={'Filiere'}
              type={'text'}
              id={'Filiere'}
              name={'Filiere'}
              value={formData.Email}
              onChange={handleChange}
              onFocus={handleInputFocus}
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
            onChange={handleChange}
            onFocus={handleInputFocus}
            placeholder={'CD********'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
          />
          <Input 
            htmlfor={'Niveau'}
            label={'Niveau'}
            type={'text'}
            id={'Niveau'}
            name={'Niveau'}
            value={formData.Email}
            onChange={handleChange}
            onFocus={handleInputFocus}
            placeholder={'Niveau'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
          />
          </form>
        </div>
        <div className='footer__account' >
          <div className='image__button__footer' >
                  <Button
                    buttonStyle={'btn--save--style'} 
                    buttonSize={'btn--save--size'}
                    children={'Save Changes'} 
                    // buttonPath={'/Espace_Etudiant'}
                  />
                  <Button
                  className='reset_butt'
                    buttonStyle={'btn--reset--style'} 
                    buttonSize={'btn--reset--size'}
                    children={'Reset'} 
                    // buttonPath={'/Espace_Etudiant'}
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

export default Account
