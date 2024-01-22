import React, { useState } from 'react';
import '../Css/LoginForm.css';
import { useParams, useNavigate } from 'react-router-dom';
import Input from '../../Mini-Components/Js/Input';
import { useAuth } from '../../../AuthContext';
import axios from 'axios';

function RandomNumForm(props) {
  const { authData } = useAuth();
  const accessToken = authData.access_token;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    R_num: '', // Keep it consistent with the state variable
  });

  const { mail } = useParams();

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5555/upf/resetPassword', {
        mail: mail,
        randomNumber: formData.R_num,
      });

      console.log(JSON.stringify(response.data));
      //navigate("/ResetPassword");
      console.log('Form submitted with data:', formData);
    } catch (error) {
      alert("Erreur lors de la soumission du formulaire.");
      console.error(error);
    }
  };

  return (
    <div className='Login__Card__Container'>
      <div className='Login__Form__Container'>
        <div className='Login__Form__text'>
          <h2 className='Login__Form__Title'>{props.titleForgetPassword}</h2>
          <div className='text__desc__forgetform'>
            {/* <p >Enter your email and we′ll send you instructions to reset your password</p> */}
          </div>
        </div>

        <form onSubmit={handleSubmit} className='Login__Form__Form'>
          <Input
            htmlfor={'R_num'}
            label={'Random number'}
            type={'text'}
            id={'R_num'}
            name={'R_num'}
            value={formData.R_num}
            onChange={handleChange}
            placeholder={'5636939652'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
          />
          <button className='btn--seconnecter--style btn--seconnecter--size' type='submit'>Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default RandomNumForm;