import React, { useState } from 'react';
import '../Css/LoginForm.css';
import { Link } from 'react-router-dom';

import Input from '../../Mini-Components/Js/Input';
import InputCheckBox from '../../Mini-Components/Js/InputCheckBox';
import { Button } from '../../Mini-Components/Js/Button';


function LoginForm(props) {
  // State to store form data
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
    <div className='Login__Card__Container' >
      <div className='Login__Form__Container'>
        <div className='Login__Form__text'>
          <img src='../images/logoupf.png' className='image__login'/>
          <h2 className='Login__Form__Title'>{props.titleLogin} </h2>
        </div>

        <form onSubmit={handleSubmit} className='Login__Form__Form'>
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
              htmlfor={'Password'}
              label={'Password'}
              type={'Password'}
              id={'Password'}
              name={'Password'}
              value={formData.Password}
              onChange={handleChange}
              onFocus={handleInputFocus}
              placeholder={'azerty'}
              required={'required'}
              LoginFormGroup={'Login__Form__Group'}
            />
          <div className='Login__Form__Group__remember'>
          <InputCheckBox 
              htmlfor={'Password'}
              label={'Se souvenir de moi'}
              type={'Checkbox'}
              id={'Password'}
              name={'Password'}
              value={formData.Password}
              onChange={handleChange}
              onFocus={handleInputFocus}
              LoginFormGroup={'Login__Form__Group__wrap'}
          />
            <Link className='Link__style' to={'/ForgotPassword'}>
              <p className='mot__de_passe__oublie'>Mot de passe oublié?</p>
            </Link>
          </div>
          <Button
            buttonStyle={'btn--seconnecter--style'} 
            buttonSize={'btn--seconnecter--size'}
            children={'Se connecter'} 
            buttonPath={'/Espace_Etudiant'}
          /><br/><br/>
          <Button
            buttonStyle={'btn--remove--style'} 
            buttonSize={'btn--remove--size'}
            children={'Remove All'} 
          />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
