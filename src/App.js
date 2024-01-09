import './App.css';

import Login from './Pages/Auth/Js/Login';
import ForgotPassword from './Pages/Auth/Js/ForgotPassword';
import ResetPassword from './Pages/Auth/Js/ResetPassword';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Espace_Etudiant from '../src/Pages/View/Home/Js/Espace_Etudiant'
import Espace_R_Stage from '../src/Pages/View/Home/Js/Espace_R_Stage'
// import Sidebar from './Components/Mini-Components/SideBar/components/Sidebar';
// import Postule_Stage from './Pages/View/Home/Components/pages/js/Espace_Etudiant/Postuler'
import Account from './Pages/View/Home/Components/pages/js/Espace_Etudiant/Account'
import Publier_les_offres_de_stage from './Pages/View/Home/Components/pages/js/Espace_R_Stage/Publier_les_offres_de_stage';
import Infos from './Pages/View/Home/Components/pages/js/Espace_Etudiant/Infos';
import Details_Stage from './Pages/View/Home/Components/pages/js/Espace_Etudiant/Details_Stage';
import Postuler from './Pages/View/Home/Components/pages/js/Espace_Etudiant/Postuler';
import DemandeDocuments from './Pages/View/Home/Components/pages/js/Espace_Etudiant/DemandeDocuments';
import Soumettre_document from './Pages/View/Home/Components/pages/js/Espace_Etudiant/Soumettre_document';
import Security from './Pages/View/Home/Components/pages/js/Espace_Etudiant/Security';
import Account_Rs from './Pages/View/Home/Components/pages/js/Espace_R_Stage/Account_Rs';
import Security_Rs from './Pages/View/Home/Components/pages/js/Espace_R_Stage/Security_Rs';
// import Demande_Document from './Pages/View/Home/Components/pages/js/Demande_Document'
// import Soumettre_document from './Pages/View/Home/Components/pages/js/Espace_Etudiant/Soumettre_document'
// import Securite from './Pages/View/Home/Components/pages/js/Espace_Etudiant/Security'
// import DemandeDocuments from './Pages/View/Home/Components/pages/js/Espace_Etudiant/DemandeDocuments';
// import Infos from './Pages/View/Home/Components/pages/js/Espace_Etudiant/Infos';
// import Details_Stage from './Pages/View/Home/Components/pages/js/Espace_Etudiant/Details_Stage';
// import Espace_Admin from './Pages/View/Home/Js/Responsable _de_Stage';



function App() {

  return (
      <Router>
          <Routes>
            <Route path='/' element={<Login/>} /> 
            <Route path='/Login' element={<Login/>} />
            <Route path='/ForgotPassword' element={<ForgotPassword/>} /> 
            <Route path='/ResetPassword' element={<ResetPassword/>} /> 
            //Espaces  
            <Route path="/Espace_Etudiant" element={<Espace_Etudiant />} />
            <Route path='/Espace_R_Stage' element={<Espace_R_Stage/>} />
            //Espace Etudiant
            <Route path="/Espace_Etudiant/info_Stage" element={<Infos />} />
            <Route path="/Espace_Etudiant/Details_Stage" element={<Details_Stage />} />
            <Route path="/Espace_Etudiant/info_Stage" element={<Infos />} />
            <Route path="/Espace_Etudiant/postule_Stage" element={<Postuler />} />
            <Route path="/Espace_Etudiant/Account" element={<Account/>} />
            <Route path="/Espace_Etudiant/Securite" element={<Security />} />
            <Route path="/Espace_Etudiant/Demande_Document" element={<DemandeDocuments />} />
            <Route path="/Espace_Etudiant/Soumettre_document" element={<Soumettre_document />} />
            //Espace Responsable de stage
            <Route path='/Espace_R_Stage/Publier_les_offres_de_stage' element={<Publier_les_offres_de_stage />}/>
            <Route path="/Espace_R_Stage/Account_Rs" element={<Account_Rs/>} />
            <Route path="/Espace_R_Stage/Securite_Rs" element={<Security_Rs />} />
           </Routes>

            
      </Router>
  );
}

export default App;
