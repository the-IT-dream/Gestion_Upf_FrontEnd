import './App.css';

import Login from './Pages/Auth/Js/Login';
import ForgotPassword from './Pages/Auth/Js/ForgotPassword';
import ResetPassword from './Pages/Auth/Js/ResetPassword';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Espace_Etudiant from '../src/Pages/View/Home/Js/Espace_Etudiant'
import Sidebar from './Components/Mini-Components/SideBar/components/Sidebar';
import Info_Stage from './Pages/View/Home/Components/pages/js/info_stage'
import Postule_Stage from './Pages/View/Home/Components/pages/js/Postuler'
import Account from './Pages/View/Home/Components/pages/js/Account'
import Demande_Document from './Pages/View/Home/Components/pages/js/Demande_Document'
import Soumettre_document from './Pages/View/Home/Components/pages/js/Soumettre_document'
import Securite from './Pages/View/Home/Components/pages/js/Security'
import DemandeDocuments from './Pages/View/Home/Components/pages/js/DemandeDocuments';
import Infos from './Pages/View/Home/Components/pages/js/Infos';
import Details_Stage from './Pages/View/Home/Components/pages/js/Details_Stage';



function App() {

  return (

  <Router>
        <Routes>
            <Route path='/' element={<Login/>} /> 
            <Route path='/Login' element={<Login/>} />
            <Route path='/ForgotPassword' element={<ForgotPassword/>} /> 
            <Route path='/ResetPassword' element={<ResetPassword/>} />   
        </Routes>
        <Sidebar>
          <Routes>
            <Route path='/Details_Stage' element={<Details_Stage/>} />
            <Route path="/info_Stage" element={<Infos />} />
            <Route path="/postule_Stage" element={<Postule_Stage />} />
            <Route path="/Account" element={<Account/>} />
            <Route path="/Demande_Document" element={<DemandeDocuments />} />
            <Route path="/Soumettre_document" element={<Soumettre_document />} />
            <Route path='/Infos' element={<Infos /> } />
            <Route path="/Securite" element={<Securite />} />
          </Routes>
        </Sidebar>
  </Router>
  );
}

export default App;
