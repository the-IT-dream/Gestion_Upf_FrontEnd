import React,{useState} from 'react';
import '../css/Account.css';
import { Button } from '../../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../../Components/Mini-Components/Js/Input';
import Combobox from '../../../../../../Components/Mini-Components/Js/combobox';
import Sidebar from '../../../../../../Components/Mini-Components/SideBar/components/Sidebar';

function Details_Stage() {
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
    <div>
      <Sidebar/>
      
    <div className='account__container'>
        <div className='content__header__account'>
          <h2>Details de stage</h2>
        </div>
        <div className='content__account'>
          <form className='account__form'>
           
            <Input 
              htmlfor={'Nom de societe'}
              label={'Nom de societe'}
              type={'text'}
              id={'Nom de societe'}
              name={'Nom de societe'}
              value={formData.nom_Societe}
              onChange={handleChange}
              onFocus={handleInputFocus}
              placeholder={'Nom de societe'}
              required={'required'}
              LoginFormGroup={'Login__Form__Group'}
            />
            <Input 
              htmlfor={'Durée'}
              label={'Durée'}
              type={'number'}
              id={'Durée'}
              name={'Durée'}
              value={formData.duree}
              onChange={handleChange}
              onFocus={handleInputFocus}
              placeholder={'Durée'}
              required={'required'}
              LoginFormGroup={'Login__Form__Group'}
            />
            <Input 
              htmlfor={'Date de debut'}
              label={'Date de debut'}
              type={'date'}
              id={'Date de debut'}
              name={'Date de debut'}
              value={formData.date_debut}
              onChange={handleChange}
              onFocus={handleInputFocus}
              placeholder={'Date de debut'}
              required={'required'}
              LoginFormGroup={'Login__Form__Group'}
            />
            <Input 
              htmlfor={'Date de fin'}
              label={'Date de fin'}
              type={'date'}
              id={'Date de fin'}
              name={'Date de fin'}
              value={formData.date_fin}
              onChange={handleChange}
              onFocus={handleInputFocus}
              placeholder={'Date de fin'}
              required={'required'}
              LoginFormGroup={'Login__Form__Group'}
            />
            <Input 
              htmlfor={'Ville'}
              label={'Ville'}
              type={'text'}
              id={'Ville'}
              name={'Ville'}
              value={formData.Ville}
              onChange={handleChange}
              onFocus={handleInputFocus}
              placeholder={'Ville'}
              required={'required'}
              LoginFormGroup={'Login__Form__Group'}
            />
            <Input 
              htmlfor={'Pays'}
              label={'Pays'}
              type={'text'}
              id={'Pays'}
              name={'Pays'}
              value={formData.pays}
              onChange={handleChange}
              onFocus={handleInputFocus}
              placeholder={'Pays'}
              required={'required'}
              LoginFormGroup={'Login__Form__Group'}
            />
          </form>
        </div>
        <div className='footer__account' >
          <div className='image__button__footer' >
                  <Button
                    buttonStyle={'btn--save--style'} 
                    buttonSize={'btn--save--size'}
                    children={'Send'} 

                  />
                  <Button
                  className='reset_butt'
                    buttonStyle={'btn--reset--style'} 
                    buttonSize={'btn--reset--size'}
                    children={'Reset'} 

                  />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Details_Stage
