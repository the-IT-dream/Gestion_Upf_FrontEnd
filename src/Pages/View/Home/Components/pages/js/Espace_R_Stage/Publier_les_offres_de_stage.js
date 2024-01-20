import '../../css/Account.css';
import { Button } from '../../../../../../../Components/Mini-Components/Js/Button';
import Input from '../../../../../../../Components/Mini-Components/Js/Input';
import Sidebar_Responsable_de_Stage from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Responsable_de_Stage';
import TopBar_Rs from '../../../../../../../Components/Components/Js/TopBar_Rs';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useAuth } from '../../../../../../../AuthContext';

function Publier_les_offres_de_stage() {
  const { authData } = useAuth();
  const accessToken = authData.access_token;
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',  // Add this line if "description" is part of your form data
    durationPerWeek: '',
    startDate: '',
    deadLine: '',
    city: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5555/upf/companies', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          },
        });

        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchData();
  }, [accessToken]);

  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payloadData = {
      title: formData.title,
      description: formData.description,
      durationPerWeek: formData.durationPerWeek,
      startDate: formData.startDate,
      deadLine: formData.deadLine,
      city: formData.city,
      companyName: selectedCompany,
    };

    try {
      const response = await axios.post('http://localhost:5555/upf/offers', payloadData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      console.log('Form submitted successfully with data:', response.data);
      // Add any additional logic or state updates you need after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
      // Add any error handling or state updates you need in case of an error
    }
  };

  return (
    <div>
      <Sidebar_Responsable_de_Stage />
      <div className='content'>
        <div className='content__topbar'>
          <TopBar_Rs />
        </div>
        <div className='content__menu'>
          <main>
            <div className='account__container'>
              <div className='content__header__account'>
                <h2>Publier une nouvelle offre de stage</h2>
                <div className='image__container'>
                  <div className='image__text__account'>
                    <div className='image__button'>
                      <label htmlFor="company">Choisissez une entreprise:</label>
                      <select
                        id="company"
                        name="company"
                        value={selectedCompany}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                      >
                        <option value="">Sélectionnez une entreprise</option>
                        {companies.map((company) => (
                          <option key={company.id} value={company.companyName}>
                            {company.companyName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className='content__account'>
                <form className='account__form'>
                  <Input
                    htmlfor={'Titre de poste'}
                    label={'Titre de poste'}
                    type={'text'}
                    id={'Titre de poste'}
                    name={'title'}
                    value={formData.title}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus('Titre de poste')}
                    placeholder={'Titre de poste'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />

                  <Input
                    htmlfor={'Description de l\'offre'}
                    label={'Description de l\'offre'}
                    type={'text'}
                    id={'Description de l\'offre'}
                    name={'description'}
                    value={formData.description}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus('Description de l\'offre')}
                    placeholder={'Description de l\'offre'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />

                  <Input
                    htmlfor={'durée du stage '}
                    label={'durée du stage '}
                    type={'text'}
                    id={'durée du stage '}
                    name={'durationPerWeek'}
                    value={formData.durationPerWeek}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus('durée du stage')}
                    placeholder={'durée du stage '}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />

                  <Input
                    htmlfor={'Date de debut'}
                    label={'Date de debut'}
                    type={'date'}
                    id={'Date de debut'}
                    name={'startDate'}
                    value={formData.startDate}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus('Date de debut')}
                    placeholder={'Date de debut'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />

                  <Input
                    htmlfor={'Date de fin'}
                    label={'Date de fin'}
                    type={'date'}
                    id={'Date de fin'}
                    name={'deadLine'}
                    value={formData.deadLine}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus('Date de fin')}
                    placeholder={'Date de fin'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />

                  <Input
                    htmlfor={'Lieu de stage'}
                    label={'Lieu de stage'}
                    type={'text'}
                    id={'Lieu de stage'}
                    name={'city'}
                    value={formData.city}
                    onChange={handleChange}
                    onFocus={() => handleInputFocus('Lieu de stage')}
                    placeholder={'Lieu de stage'}
                    required={'required'}
                    LoginFormGroup={'Login__Form__Group'}
                  />
                </form>
              </div>
              <div className='footer__account'>
                <div className='image__button__footer'>
                <button
                        className='btn--save--style btn--save--size'                      
                        onClick={handleSubmit}
                        type="submit"
                      >Ajouter</button>
                  <Button
                    className='reset_butt'
                    buttonStyle={'btn--reset--style'}
                    buttonSize={'btn--reset--size'}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Publier_les_offres_de_stage;
