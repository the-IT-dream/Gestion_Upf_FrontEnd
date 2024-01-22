import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Css/LoginForm.css';
import { Link } from 'react-router-dom';

import Input from '../../Mini-Components/Js/Input';
import InputCheckBox from '../../Mini-Components/Js/InputCheckBox';
import { Button } from '../../Mini-Components/Js/Button';

function ForgetPasswordForm(props) {
  const [formData, setFormData] = useState({
    email: '', // Change from 'username' to 'email' to match the state variable
  });

  const navigate = useNavigate();

  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5555/upf/randomNumber', {
        mail: formData.email,
      });

      console.log(JSON.stringify(response.data));
      navigate(`/RandomNum/${formData.email}`);
      // Handle the response as needed

      // Your existing form submission logic here
      console.log('Form submitted with data:', formData);
    } catch (error) {
      console.error(error);
      // Handle errors as needed
    }
  };
  return (
    <div className='Login__Card__Container'>
      <div className='Login__Form__Container'>
        <div className='Login__Form__text'>
          <h2 className='Login__Form__Title'>{props.titleForgetPassword} </h2>
          <div className='text__desc__forgetform'>
            <p>Enter your email and we′ll send you instructions to reset your password</p>
          </div>
        </div>

        <form className='Login__Form__Form'>
          <Input
            htmlfor={'Email'}
            label={'Email'}
            type={'email'}
            id={'email'}
            name={'email'}
            value={formData.email}
            onChange={handleChange}
            onFocus={handleInputFocus}
            placeholder={'azerty@gmail.com'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
          />
          
          <button className='btn--seconnecter--style btn--seconnecter--size' type='submit' onClick={handleSubmit}>Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPasswordForm;
