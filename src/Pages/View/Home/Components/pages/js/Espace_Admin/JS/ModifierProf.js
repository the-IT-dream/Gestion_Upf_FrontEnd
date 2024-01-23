import React,{useState} from 'react';
import '../../css/Account.css';
import { Button } from '../../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../../Components/Mini-Components/Js/Input';

function ModifierProf() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        Departement: '',
        // cin: '',
        niveau: '',
        // cne: '',
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

            <div className='content__header__account'>
              <h2>Profile Details</h2>
              <div className='image__container'>
                <img src='./images/avatar/1.png'/>
                <div className='image__text__account'>
                  <div className='image__button'>
                    <Button
                      buttonStyle={'btn--save--style'} 
                      buttonSize={'btn--save--size'}
                      children={'Upload new photo'} 
                      buttonPath={'/Espace_Etudiant'}
                    />
                    <Button
                    className='reset_butt'
                      buttonStyle={'btn--resetMini--style'} 
                      buttonSize={'btn--resetMini--size'}
                      children={'Reset'} 
                      buttonPath={'/Espace_Etudiant'}
                    />
                  </div>
                  <div className='parag'>
                    <p>allowed image png ....</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='content__account'>
              <form className='account__form'>
              <Input
          htmlfor={'Prénom'}
          label={'Prénom'}
          type={'text'}
          id={'Prénom'}
          name={'firstName'}
          value={formData.firstName}
          placeholder={'Prénom'}
          required={'required'}
          LoginFormGroup={'Login__Form__Group'}
        />
        <Input
          htmlfor={'Nom'}
          label={'Nom'}
          type={'text'}
          id={'Nom'}
          name={'lastName'}
          value={formData.lastName}
          placeholder={'Nom'}
          required={'required'}
          LoginFormGroup={'Login__Form__Group'}
        />
        <Input
          htmlfor={'Email'}
          label={'Email'}
          type={'email'}
          id={'email'}
          name={'email'}
          value={formData.email}
          placeholder={'azerty@gmail.com'}
          required={'required'}
          LoginFormGroup={'Login__Form__Group'}
        />
         <Input
          htmlfor={'cin'}
          label={'Cin'}
          type={'text'}
          id={'cin'}
          name={'cin'}
          value={formData.cin}
          placeholder={'CD****'}
          required={'required'}
          LoginFormGroup={'Login__Form__Group'}
        />
        <Input
          htmlfor={'Departement'}
          label={'Departement'}
          type={'text'}
          id={'Departement'}
          name={'Departement'} 
          value={formData.Departement}
          placeholder={'Departement'}
          required={'required'}
          LoginFormGroup={'Login__Form__Group'}
        />
        <select className='select__role'>
                <optgroup>
                  <option>capgimini</option>
                  <option>cgi</option>
                  <option>atos</option>
                </optgroup>
        </select>
        {/* <Input
          htmlfor={'cin'}
          label={'Cin'}
          type={'text'}
          id={'cin'}
          name={'cin'}
          value={formData.cin}
          placeholder={'CD****'}
          required={'required'}
          LoginFormGroup={'Login__Form__Group'}
        /> */}
        <Input
          htmlfor={'Niveau'}
          label={'Niveau'}
          type={'text'}
          id={'Niveau'}
          name={'niveau'}
          value={formData.niveau}
          placeholder={'Niveau'}
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
                        children={'Modifier Etudiant'} 
                        // buttonPath={'/Espace_Etudiant'}
                      />
                      <Button
                      className='reset_butt'
                        buttonStyle={'btn--reset--style'} 
                        buttonSize={'btn--reset--size'}
                        children={'Supprimer'} 
                        // buttonPath={'/Espace_Etudiant'}
                      />
              </div>
            </div>
        </div>
      )
    }
    

export default ModifierProf
