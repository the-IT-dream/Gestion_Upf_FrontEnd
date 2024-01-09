import React,{useState} from 'react';
import '../../css/Account.css';
import '../../css/Security.css'
import { Button } from '../../../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../../../Components/Mini-Components/Js/Input';
import Sidebar from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant';
import TopBar_Rs from '../../../../../../../Components/Components/Js/TopBar_Rs';
import Sidebar_Responsable_de_Stage from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Responsable_de_Stage';

function Security_Rs() {
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
      <Sidebar_Responsable_de_Stage/>
      <div className='content'>
        <div className='content__topbar'>
          <TopBar_Rs />
          
        </div>
        <div className='content__menu'>
          <main>
            <div className='account__container'>
              <div className='header__button'>
                  <Button
                      className="butt__account"
                      buttonStyle={'btn--account--style'} 
                      buttonSize={'btn--save--size'}
                      children={'Account'} 
                      buttonPath={'/Espace_R_Stage/Account_Rs'}
                      icon={'FaUser'}
                  />
                  <Button
                      className="butt__account"
                      buttonStyle={'btn--account--style'} 
                      buttonSize={'btn--save--size'}
                      children={'Security'} 
                      buttonPath={'/Espace_R_Stage/Securite_Rs'}
                  />
              </div>
              <div className='content__account'>
              <h2>Profile Securite</h2>
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
                  <p><li>Minimum 8 characters long- the more ,the better</li></p>
                  <p><li>At least one lowercase & one uppercase character</li></p>
                  <p><li>At least one number, symbol, or whitespace character</li></p>
              </div>
              <div className='footer__account' >
                <div className='image__button__footer' >
                        <Button
                          buttonStyle={'btn--save--style'} 
                          buttonSize={'btn--save--size'}
                          children={'Save Changes'} 
                          // buttonPath={'/Espace_Etudiant'}
                        />
                        <Button
                        className='reset_butt'
                          buttonStyle={'btn--reset--style'} 
                          buttonSize={'btn--reset--size'}
                          children={'Reset'} 
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

export default Security_Rs
