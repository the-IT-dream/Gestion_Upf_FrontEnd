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
          <div className={`Login__Form__Group ${focusedInput === 'username' ? 'focused' : ''}`}>
            <label htmlFor="username" className='Login__Form__label'>Email</label>
            <input
              className='input__login__email'
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onFocus={() => handleInputFocus('username')}
              onBlur={() => handleInputFocus(null)}
              placeholder="amine@gmail.com"
              required
            />
          </div>
          <div className={`Login__Form__Group ${focusedInput === 'password' ? 'focused' : ''}`}>
            <label htmlFor="password" className='Login__Form__label'>Password</label>
            <input 
              className='input__login__password'
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => handleInputFocus('password')}
              onBlur={() => handleInputFocus(null)}
              required
            />
          </div>
          <div className='Login__Form__Group__remember'>
            <div className='Login__Form__Group__remember__check'>
              <input 
              type="checkbox"
              id="remember"
              name="remember"
              value={formData.password}
              onChange={handleChange}
              />
              <label htmlFor="password" className='Login__Form__label'>Se Souvenir de moi</label>
            </div>
            <Link className='Link__style'>
              <p className='mot__de_passe__oublie'>Mot de passe oublié?</p>
            </Link>
          </div>
          
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
