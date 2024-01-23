import React, { useState } from 'react';
import '../Css/LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../Mini-Components/Js/Input';
import { Button } from '../../Mini-Components/Js/Button';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ResetPasswordForm(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { access_token } = location.state;

  // State to store form data
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // State to track focused input
  const [focusedInput, setFocusedInput] = useState(null);

  // Function to handle form input changes
  
  // Function to handle input focus
  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/Login");

    const data ={
      password : formData.password,
      confirmPassword : formData.confirmPassword,
    }
  
    try {
      const response = await axios.post(
        `http://localhost:5555/upf/changePassword?token=${access_token}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      // For example, if the request was successful, you can navigate to another page
      navigate("/Login");
      console.log('Response:', response.data);
      setResponseMessage(JSON.stringify(response.data));
    } catch (error) {
      console.error('Error:', error);
      console.log('Error Response:', error.response.data);
      setResponseMessage('An error occurred while changing the password.');
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className='Login__Card__Container'>
      <div className='Login__Form__Container'>
        <div className='Login__Form__text'>
          <h2 className='Login__Form__Title'>{props.titleResetPassword} </h2>
        </div>

        <form onSubmit={handleSubmit} className='Login__Form__Form'>
          <Input
            htmlfor={'Password'}
            label={'Password'}
            type={'password'}
            id={'password'}
            name={'password'}
            value={formData.password}
            onChange={handleChange}
            onFocus={handleInputFocus}
            placeholder={'Nouveau mot de passe'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
          />
          <Input
            htmlfor={'confirmPassword'}
            label={'Confirm Password'}
            type={'password'}
            id={'confirmPassword'}
            name={'confirmPassword'}
            value={formData.confirmPassword}
            onChange={handleChange}
            onFocus={handleInputFocus}
            placeholder={'Confirmer Nouveau mot de passe '}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
          />
          <div className='Login__Form__Group__remember'></div>

          <button className='btn--seconnecter--style btn--seconnecter--size' type='submit'>
            Modifier
          </button>
          <Link className='Link__style' to='/Login'>
            <div className='backto__login__butt'>
              <p className='mot__de_passe__oublie'>Back to login</p>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
