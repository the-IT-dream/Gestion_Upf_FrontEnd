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
import ProfileMenu from './Components/Global/Top-Bar/js/ProfileMenu';


function App() {

  return (

  //  <div className='app_css' >
  //   <div>
  //     <Login/>
  //   </div>
  // </div>
  <Router>
        <Routes>
            <Route path='/' element={<Login/>} /> 
            <Route path='/Login' element={<Login/>} />
            <Route path='/ForgotPassword' element={<ForgotPassword/>} /> 
            <Route path='/ResetPassword' element={<ResetPassword/>} />   
        </Routes>
        <Sidebar>
          <Routes>
            <Route path="/info_Stage" element={<Info_Stage />} />
            <Route path="/postule_Stage" element={<Postule_Stage />} />
            <Route path="/Account" element={<Account/>} />            
            <Route path="/Demande_Document" element={<Demande_Document />} />
            <Route path="/Soumettre_document" element={<Soumettre_document />} />
            <Route path="/Securite" element={<Securite />} />
          </Routes>
        </Sidebar>
  </Router>
  );
}

export default App;
