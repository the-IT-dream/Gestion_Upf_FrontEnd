import React,{useState} from 'react';
import '../../../../css/Account.css';
import { Button } from '../../../../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../../../../Components/Mini-Components/Js/Input';
import Sidebar_admin from '../../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_admin';
import TopBar_admin from '../../../../../../../../Components/Components/Js/TopBar_admin';

function AjoutRS() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        filiere: '',
        cin: '',
        niveau: '',
        cne: '',
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
          <Sidebar_admin/>
          <div className='content'>
            <div className='content__topbar'>
              <TopBar_admin  />        
            </div>
            <div className='content__menu'>
              <main> 
                <div className='account__container'>

                  <div className='content__header__account'>
                    <h2>Ajouter Responsable</h2>
                    <div className='image__container'>
                      <img src='./images/avatar/1.png'/>
                      <div className='image__text__account'>
                        <div className='image__button'>
                          <Button
                            buttonStyle={'btn--save--style'} 
                            buttonSize={'btn--save--size'}
                            children={'Upload new photo'} 
                            buttonPath={''}
                          />
                          <Button
                          className='reset_butt'
                            buttonStyle={'btn--resetMini--style'} 
                            buttonSize={'btn--resetMini--size'}
                            children={'Reset'} 
                            buttonPath={''}
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
                  htmlfor={'First Name'}
                  label={'First Name'}
                  type={'text'}
                  id={'First Name'}
                  name={'firstName'}
                  value={formData.firstName}
                  placeholder={'First Name'}
                  required={'required'}
                  LoginFormGroup={'Login__Form__Group'}
                  />
                  <Input
                  htmlfor={'Last Name'}
                  label={'Last Name'}
                  type={'text'}
                  id={'Last Name'}
                  name={'lastName'}
                  value={formData.lastName}
                  placeholder={'Last Name'}
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
                              children={'Ajouter'} 
                              // buttonPath={'/Espace_Etudiant'}
                            />
                            <Button
                            className='reset_butt'
                              buttonStyle={'btn--reset--style'} 
                              buttonSize={'btn--reset--size'}
                              children={'annuler'} 
                              // buttonPath={'/Espace_Etudiant'}
                            />
                    </div>
                  </div>
                  </div>
              </main>
            </div>
          </div>     
        </div>
      )
    }

export default AjoutRS
