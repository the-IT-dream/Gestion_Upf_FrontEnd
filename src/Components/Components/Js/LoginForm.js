import React, { useState } from 'react';
import '../Css/LoginForm.css';
import { Link, useNavigate  } from 'react-router-dom';
//import { Link, useHistory } from 'react-router'; 
import Input from '../../Mini-Components/Js/Input';
import InputCheckBox from '../../Mini-Components/Js/InputCheckBox';
import { Button } from '../../Mini-Components/Js/Button';
import { useAuth } from '../../../AuthContext';
import axios from 'axios';

function LoginForm(props) {
  
  const [formData, setFormData] = useState({
    mail: '',
    password: ''
  });

  const { setAuthInfo } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const data = JSON.stringify({
      mail: formData.mail,
      password: formData.password
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5555/upf/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };

    try {
      const response = await axios.request(config);
      const { role, access_token, refresh_token } = response.data;

      setAuthInfo({ role, access_token, refresh_token });

      if (role === 'STUDENT' || role === 'STUDENT5') {
        navigate('/Espace_Etudiant');
      } else {
        alert("Vous ne pouvez pas accéder à la plateforme");
      }

      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className='Login__Card__Container'>
      <div className='Login__Form__Container'>
        <div className='Login__Form__text'>
          <img src='../images/logoupf.png' className='image__login' alt='logo' />
          <h2 className='Login__Form__Title'>{props.titleLogin} </h2>
        </div>
        <form onSubmit={'/Espace_Etudiant'} className='Login__Form__Form'>
          <Input   
            htmlfor={'Email'}
            label={'Email'}
            type={'email'}
            id={'mail'}
            name={'mail'}
            value={formData.mail}
            onChange={handleChange}
            placeholder={'azerty@gmail.com'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
          />
          <Input 
            htmlfor={'Password'}
            label={'Password'}
            type={'password'}
            id={'password'}
            name={'password'}
            value={formData.password}
            onChange={handleChange}
            placeholder={'azerty'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
          />
          <div className='Login__Form__Group__remember'>
            <InputCheckBox 
              htmlfor={'Remember'}
              label={'Se souvenir de moi'}
              type={'checkbox'}
              id={'remember'}
              name={'remember'}
              value={formData.remember}
              onChange={handleChange}
              LoginFormGroup={'Login__Form__Group__wrap'}
              Login__Form__label={'Login__Form__label'}
            />
            <Link className='Link__style' to="/ForgotPassword">
              <p className='mot__de_passe__oublie'>Mot de passe oublié?</p>
            </Link>
          </div>
          <button
            className="btn--seconnecter--style btn--seconnecter--size"
            type="submit"
            onClick={handleLogin}
          >Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
