import React,{useState} from 'react';
import '../../css/Account.css';
import { Button } from '../../../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../../../Components/Mini-Components/Js/Input';
import Combobox from '../../../../../../../Components/Mini-Components/Js/combobox';
import Sidebar from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant';
import Textarea from '../../../../../../../Components/Mini-Components/Js/Textarea';
import InputCheckBox from '../../../../../../../Components/Mini-Components/Js/InputCheckBox';
import Sidebar_Responsable_de_Stage from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Responsable_de_Stage';
import TopBar_Rs from '../../../../../../../Components/Components/Js/TopBar_Rs';

function Publier_les_offres_de_stage() {
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
              <div className='content__header__account'>
                <h2>Publier les offres de stage</h2>
              </div>
              <div className='content__account'>
                <form className='account__form'>
                
                  <Input 
                    htmlfor={'Titre de poste'}
                    label={'Titre de poste'}
                    type={'text'}
                    id={'Titre de poste'}
                    name={'Titre de poste'}
                    value={formData.titre_poste}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    placeholder={'Titre de poste'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />
                  
                  <Input 
                    htmlfor={'durée du stage '}
                    label={'durée du stage '}
                    type={'text'}
                    id={'durée du stage '}
                    name={'durée du stage '}
                    value={formData.duree_du_stage }
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    placeholder={'durée du stage '}
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
                  <Textarea 
                    htmlfor={'Les compétences et qualifications requises '}
                    label={'Les compétences et qualifications requises '}
                    type={'text'}
                    id={'Les compétences et qualifications requises '}
                    name={'Les compétences et qualifications requises '}
                    value={formData.competence_requises}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    placeholder={'Les compétences et qualifications requises '}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />        
                  <Textarea 
                    htmlfor={'description du poste'}
                    label={'description du poste'}
                    type={'text'}
                    id={'description du poste'}
                    name={'description du poste'}
                    value={formData.description_du_poste}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    placeholder={'description du poste'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />
                  <Input 
                    htmlfor={'Lieu de stage'}
                    label={'Lieu de stage'}
                    type={'text'}
                    id={'Lieu de stage'}
                    name={'Lieu de stage'}
                    value={formData.Lieu_de_stage}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    placeholder={'Lieu de stage'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />
                  <Input
                    htmlfor={'La rémunération si nécessaire'}
                    label={'La rémunération si nécessaire'}
                    type={'text'}
                    id={'La rémunération si nécessaire'}
                    name={'La rémunération si nécessaire'}
                    value={formData.rémunération}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    placeholder={'La rémunération si nécessaire'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />
                  <Input
                    htmlfor={'Les avantages sociaux si nécessaire'}
                    label={'Les avantages sociaux si nécessaire'}
                    type={'text'}
                    id={'Les avantages sociaux si nécessaire'}
                    name={'Les avantages sociaux si nécessaire'}
                    value={formData.avantages_sociaux}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    placeholder={'Les avantages sociaux si nécessaire'}
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
          </main>
        </div>
      </div>
    
    </div>
  )
}

export default Publier_les_offres_de_stage
