import './App.css';

import Login from './Pages/Auth/Js/Login';
import ForgotPassword from './Pages/Auth/Js/ForgotPassword';
import ResetPassword from './Pages/Auth/Js/ResetPassword';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Espace_Etudiant from '../src/Pages/View/Home/Js/Espace_Etudiant'
import Sidebar from './Components/Mini-Components/SideBar/components/Sidebar';
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
               {/* <Route path="/Espace_Etudiant" element={<Espace_Etudiant />} /> */}
               {/* <Route path="/Details_Stage" element={<Details_Stage />} /> */}
           </Routes>
           <Espace_Etudiant>
                <Routes>
                    <Route path="/Account" element={<Account />} />
                </Routes>
            </Espace_Etudiant>
      </Router>
  );
}

export default App;
