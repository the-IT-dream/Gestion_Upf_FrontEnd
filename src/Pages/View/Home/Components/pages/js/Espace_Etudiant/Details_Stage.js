import React,{useState} from 'react';
import '../../../css/Account.css'
import { Button } from '../../../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../../../Components/Mini-Components/Js/Input';
import TopBar from '../../../../../../../Components/Components/Js/TopBar';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Account from './Account';
import Security from './Security';
import Sidebar from '../../../../../../../../src/Components/Mini-Components/SideBar/components/Sidebar_Etudiant.js'

//import Combobox from '../../../../../../Components/Mini-Components/Js/combobox';
import axios from 'axios';
import { useAuth } from '../../../../../../../AuthContext.js';

function Details_Stage() {
  const [formData, setFormData] = useState({
    nom_Societe: '',
    date_debut: '',
    date_fin: '',
    Ville: '',
    pays: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { authData } = useAuth();
  const accessToken = authData.access_token;

  const handleSend = async () => {
    try {
      const data = {
        company: formData.nom_Societe,
        startDate: formData.date_debut,
        endDate: formData.date_fin,
        city: formData.Ville,
        country: formData.pays,
      };

      const response = await axios.post('http://localhost:5555/upf/students/internship', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleReset = () => {
    setFormData({
      nom_Societe: '',
      date_debut: '',
      date_fin: '',
      Ville: '',
      pays: '',
    });
  };

  return (
    <div>
      <Sidebar/>
      <div className='content'>
        <div className='content__topbar'>
          <TopBar />
        </div>
        <div className='content__menu'>
          <main>
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
            name={'nom_Societe'}
            value={formData.nom_Societe}
            onChange={handleChange}
            placeholder={'Nom de societe'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
          />
          <Input
            htmlfor={'Date de debut'}
            label={'Date de debut'}
            type={'date'}
            id={'Date de debut'}
            name={'date_debut'}
            value={formData.date_debut}
            onChange={handleChange}
            placeholder={'Date de debut'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
          />
          <Input
            htmlfor={'Date de fin'}
            label={'Date de fin'}
            type={'date'}
            id={'Date de fin'}
            name={'date_fin'}
            value={formData.date_fin}
            onChange={handleChange}
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
            placeholder={'Ville'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
          />
          <Input
            htmlfor={'Pays'}
            label={'Pays'}
            type={'text'}
            id={'Pays'}
            name={'pays'}
            value={formData.pays}
            onChange={handleChange}
            placeholder={'Pays'}
            required={'required'}
            LoginFormGroup={'Login__Form__Group'}
          />
        </form>
      </div>
      <div className='footer__account'>
        <div className='image__button__footer'>
          
          <button 
          className='btn--save--style btn--save--size'
          onClick={handleSend}
          type="submit"
          >Ajouter</button>
          <Button
            className='reset_butt'
            buttonStyle={'btn--reset--style'}
            buttonSize={'btn--reset--size'}
            children={'Reset'}
            onClick={handleReset}
          />
        </div>
      </div>
    </div>
          </main>
        </div>
      </div>

      
    </div>
  
  );
}
export default Details_Stage
