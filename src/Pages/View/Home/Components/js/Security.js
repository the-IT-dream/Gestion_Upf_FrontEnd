import React,{useState} from 'react';
import '../css/Account.css';
import '../css/Security.css'
import { Button } from '../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../Components/Mini-Components/Js/Input';

function Security() {
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
    <div className='account__container'>
        <div className='header__button'>
            <Button
                className="butt__account"
                buttonStyle={'btn--account--style'} 
                buttonSize={'btn--save--size'}
                children={'Account'} 
                buttonPath={'/Securite'}
                icon={'FaUser'}
            />
             <Button
                className="butt__account"
                buttonStyle={'btn--account--style'} 
                buttonSize={'btn--save--size'}
                children={'Security'} 
                buttonPath={'/Account'}
            />
        </div>
        <div className='content__account'>
        <h2>Profile Details</h2>
          <form className='account__form'>
            <Input 
              htmlfor={'Current Password'}
              label={'Current Password'}
              type={'password'}
              id={'Current Password'}
              name={'Current Password'}
              value={formData.Email}
              onChange={handleChange}
              onFocus={handleInputFocus}
              placeholder={'Current Password'}
              required={'required'}
              LoginFormGroup={'Login__Form__Group'}
            />
            <Input 
                htmlfor={'New Password'}
                label={'New Password'}
                type={'password'}
                id={'New Password'}
                name={'New Password'}
                value={formData.Email}
                onChange={handleChange}
                onFocus={handleInputFocus}
                placeholder={'New Password'}
                required={'required'}
                LoginFormGroup={'Login__Form__Group'}
            />
            <Input 
                htmlfor={'Confirm Password'}
                label={'Confirm Password'}
                type={'password'}
                id={'Confirm Password'}
                name={'Confirm Password'}
                value={formData.Email}
                onChange={handleChange}
                onFocus={handleInputFocus}
                placeholder={'Confirm Password'}
                required={'required'}
                LoginFormGroup={'Login__Form__Group'}
            />
          </form>
        </div>
        <div className='password__info'>
            <h2>Password Requierements</h2>
            <p>Minimum 8 characters long- the more ,the better</p>
            <p>Minimum 8 characters long- the more ,the better</p>
            <p>Minimum 8 characters long- the more ,the better</p>
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

export default Security
