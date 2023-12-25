import React,{useState} from 'react';
import '../css/Account.css';
import { Button } from '../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../Components/Mini-Components/Js/Input';

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
  const [clicked,setClicked] = useState(false);
  return (
    <div className='account__container'>
        <div className='header__button'>
            <Button
                onClick={() => {setClicked(!clicked)}}
                className={`butt__account ${clicked? 'active' : 'inactive'}`}
                buttonStyle={'btn--account--style'} 
                buttonSize={'btn--save--size'}
                children={'Account'} 
                buttonPath={'/Espace_Etudiant'}
                icon={'FaUser'}
            />
             <Button
                buttonStyle={`btn--account--style ${clicked? 'active' : 'inactive'}`} 
                buttonSize={'btn--save--size'}
                children={'Security'} 
                buttonPath={'/Espace_Etudiant'}
            />
        </div>
        <div className='content__header__account'>
          <h2>Profile Details</h2>
          <div className='image__container'>
            <img src='./images/avatar/1.png'/>
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
                  children={'Security'} 
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
            htmlfor={'Telephone'}
            label={'Telephone'}
            type={'text'}
            id={'Telephone'}
            name={'Telephone'}
            value={formData.Email}
            onChange={handleChange}
            onFocus={handleInputFocus}
            placeholder={'06********'}
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
  )
}

export default Account
