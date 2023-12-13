import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import '../Css/LoginForm.css';
import { Link } from 'react-router-dom';

import Input from '../../Mini-Components/Js/Input';
import InputCheckBox from '../../Mini-Components/Js/InputCheckBox';
import { Button } from '../../Mini-Components/Js/Button';


function ResetPasswordForm(props) {
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
          <h2 className='Login__Form__Title'>{props.titleResetPassword} </h2>
        </div>

        <form onSubmit={handleSubmit} className='Login__Form__Form'>
             <Input 
              htmlfor={'Password'}
              label={'Password'}
              type={'Password'}
              id={'Password'}
              name={'Password'}
              value={formData.Password}
              onChange={handleChange}
              onFocus={handleInputFocus}
              placeholder={'Nouveau mot de passe'}
              required={'required'}
              LoginFormGroup={'Login__Form__Group'}
            />
            <Input 
              htmlfor={'Password'}
              label={'Confirm Password'}
              type={'Password'}
              id={'Password'}
              name={'Password'}
              value={formData.Password}
              onChange={handleChange}
              onFocus={handleInputFocus}
              placeholder={'Confirmer Nouveau mot de passe '}
              required={'required'}
              LoginFormGroup={'Login__Form__Group'}
            />
          <div className='Login__Form__Group__remember'>
          </div>
          <Button
            buttonStyle={'btn--seconnecter--style'} 
            buttonSize={'btn--seconnecter--size'}
            children={props.resetpassword} 
            buttonPath={'/Espace_Etudiant'}
          />
          <Link className='Link__style' to='/Login'>
            <div className='backto__login__butt'>
                <Icon 
                    className='left__arrow'
                    icon='mingcute:left-line'
                />
                <p className='mot__de_passe__oublie'>Back to login</p>
            </div>
           
        </Link>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordForm
