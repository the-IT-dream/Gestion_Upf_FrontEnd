import React,{useState} from 'react';
import '../css/Account.css';
import '../css/DemandeDocuments.css';

import { Button } from '../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../Components/Mini-Components/Js/Input';
import InputCheckBox from '../../../../../Components/Mini-Components/Js/InputCheckBox';

function DemandeDocuments() {
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
        <div className='account__container__demande'>
            <div className='content__account__demande'>
              <form className='demande__formulaire'>
                <InputCheckBox
                  htmlfor={'First Name'}
                  label={'First Name'}
                  type={'checkbox'}
                  id={'First Name'}
                  name={'First Name'}
                  value={formData.Email}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  placeholder={'First Name'}
                  required={'required'}
                  LoginFormGroup={'Login__Form__Group1'}
                  Login__Form__label={'Login__Form__label1'}
                />
                <InputCheckBox
                  htmlfor={'First Name'}
                  label={'First Name'}
                  type={'checkbox'}
                  id={'First Name'}
                  name={'First Name'}
                  value={formData.Email}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  placeholder={'First Name'}
                  required={'required'}
                  LoginFormGroup={'Login__Form__Group1'}
                  Login__Form__label={'Login__Form__label1'}
                />
                <InputCheckBox
                  htmlfor={'First Name'}
                  label={'First Name'}
                  type={'checkbox'}
                  id={'First Name'}
                  name={'First Name'}
                  value={formData.Email}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  placeholder={'First Name'}
                  required={'required'}
                  LoginFormGroup={'Login__Form__Group1'}
                  Login__Form__label={'Login__Form__label1'}
                />
               <InputCheckBox
                  htmlfor={'First Name'}
                  label={'First Name'}
                  type={'checkbox'}
                  id={'First Name'}
                  name={'First Name'}
                  value={formData.Email}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  placeholder={'First Name'}
                  required={'required'}
                  LoginFormGroup={'Login__Form__Group1'}
                  Login__Form__label={'Login__Form__label1'}
                />
                <InputCheckBox
                  htmlfor={'First Name'}
                  label={'First Name'}
                  type={'checkbox'}
                  id={'First Name'}
                  name={'First Name'}
                  value={formData.Email}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  placeholder={'First Name'}
                  required={'required'}
                  LoginFormGroup={'Login__Form__Group1'}
                  Login__Form__label={'Login__Form__label1'}
                />
                <InputCheckBox
                  htmlfor={'First Name'}
                  label={'First Name'}
                  type={'checkbox'}
                  id={'First Name'}
                  name={'First Name'}
                  value={formData.Email}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  placeholder={'First Name'}
                  required={'required'}
                  LoginFormGroup={'Login__Form__Group1'}
                  Login__Form__label={'Login__Form__label1'}
                />
              </form>
            </div>
            <div className='demande__account' >
            <div className='demande__button__footer' >
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

export default DemandeDocuments
