import React, { useState } from 'react';
import '../Css/LoginForm.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';

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
          <h2 className='Login__Form__Title'>{props.titleLogin} </h2>
        </div>
        <form onSubmit={handleSubmit} className='Login__Form__Form'> 
          <Button
            buttonStyle={'btn--seconnecter--style'} 
            buttonSize={'btn--seconnecter--size'}
            children={'Se connecter'} 
            buttonPath={'/Espace_Etudiant'}
          />
          <br/><br/><br/>
          <Button
            buttonStyle={'btn--reset--style'}
            buttonSize={'btn--reset--size'}
            children={'Reset'}
          />
          <Button
            buttonStyle={'btn--save--style'}
            buttonSize={'btn--save--size'}
            children={'Save'}
            icon={'tabler:users'}
          />
          <br/><br/>
          <Button
            buttonStyle={'btn--resetMini--style'}
            buttonSize={'btn--resetMini--size'}
            children={'Reset'}
          />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
