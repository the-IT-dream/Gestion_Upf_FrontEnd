
import './App.css';

import Login from './Pages/Auth/Js/Login';
import ForgotPassword from './Pages/Auth/Js/ForgotPassword';
import ResetPassword from './Pages/Auth/Js/ResetPassword';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Espace_Etudiant from '../src/Pages/View/Home/Js/Espace_Etudiant'
import Espace_R_Stage from '../src/Pages/View/Home/Js/Espace_R_Stage'
import Espace_SuperViser from '../src/Pages/View/Home/Js/Espace_SuperViser'
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
import Roles from './Pages/View/Home/Components/pages/js/Espace_Admin/JS/Roles'
import Espace_Admin from './Pages/View/Home/Js/Espace_Admin';
import Account_ad from './Pages/View/Home/Components/pages/js/Espace_Admin/JS/Account_ad';
import Securit_ad from './Pages/View/Home/Components/pages/js/Espace_Admin/JS/Security_ad';
import StudentList from './Pages/View/Home/Components/pages/js/Espace_Admin/JS/StudentList';
import ResponsableStage from './Pages/View/Home/Components/pages/js/Espace_Admin/JS/ResponsableStage';
import AjouterEtudiant from './Pages/View/Home/Components/pages/js/Espace_Admin/JS/AjoutEtudiant';
import AjouterRS from './Pages/View/Home/Components/pages/js/Espace_Admin/JS/AjoutRS';
import DetailsInfo from './Pages/View/Home/Components/pages/js/Espace_Etudiant/DetailsInfo';
import ModifierEtudiant from './Pages/View/Home/Components/pages/js/Espace_Admin/JS/ModifierEtudiant';
import Liste_Offres from './Pages/View/Home/Components/pages/js/Espace_R_Stage/Liste_Offres';
import Offer_Detail from './Pages/View/Home/Components/pages/js/Espace_R_Stage/Offer_Detail';
import List_companies from './Pages/View/Home/Components/pages/js/Espace_R_Stage/List_companies';
import Add_company from './Pages/View/Home/Components/pages/js/Espace_R_Stage/Ajouter_Company';
import List_companies_Etudiant from './Pages/View/Home/Components/pages/js/Espace_Etudiant/List_Companies';
import ModifierRS from './Pages/View/Home/Components/pages/js/Espace_Admin/JS/ModifierRS';
import GetStageDetails from './Pages/View/Home/Components/pages/js/Espace_Etudiant/get_stage_details';
import Account_SuperViser from './Pages/View/Home/Components/pages/js/Espace_SuperViser/Account_SuperViser';
import Security_SuperViser from './Pages/View/Home/Components/pages/js/Espace_SuperViser/Security_SuperViser';

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
            <Route path='/Espace_admin' element={<Espace_Admin/>} />
            <Route path='/Espace_SuperViser' element={<Espace_SuperViser/>} />
            //Espace Etudiant
            <Route path="/Espace_Etudiant/Infos" element={<Infos />} />
            <Route path="/Espace_Etudiant/Details_Stage" element={<Details_Stage />} />
            <Route path="/Espace_Etudiant/DetailsInfo/:id" element={<DetailsInfo />} />
            <Route path="/Espace_Etudiant/postule_Stage" element={<Postuler />} />
            <Route path="/Espace_Etudiant/Account" element={<Account/>} />
            <Route path="/Espace_Etudiant/Securite" element={<Security />} />
            <Route path="/Espace_Etudiant/Demande_Document" element={<DemandeDocuments />} />
            <Route path="/Espace_Etudiant/Soumettre_document" element={<Soumettre_document />} />
            <Route path="/Espace_Etudiant/Entreprises" element={<List_companies_Etudiant />} />
            <Route path="/Espace_Etudiant/Stage" element={<GetStageDetails />} />

            //Espace Responsable de stage
            <Route path='/Espace_R_Stage/Publier_les_offres_de_stage' element={<Publier_les_offres_de_stage />}/>
            <Route path='/Espace_R_Stage/Liste_Offres' element={<Liste_Offres />}/>
            <Route path="/Espace_R_Stage/Account_Rs" element={<Account_Rs/>} />
            <Route path="/Espace_R_Stage/Securite_Rs" element={<Security_Rs />} />
            <Route path="/Espace_R_Stage/Offer_Detail/:id" element={<Offer_Detail />} />
            <Route path="/Espace_R_Stage/gestion_des_entreprises_partenaires" element={<List_companies />} />
            <Route path="/Espace_R_Stage/Ajouter_Entreprise" element={<Add_company/>} />
            //Espace_admin
            <Route path="/Espace_admin/Account_admin" element={<Account_ad/>} />
            <Route path="/Espace_admin/Securite_admin" element={<Securit_ad />} />
            <Route path="/Espace_admin/Roles" element={<Roles/>} />
            <Route path="/Espace_admin/Student_list" element={<StudentList/>} />
            <Route path="/Espace_admin/ResponsableStage" element={<ResponsableStage/>} />
            <Route path="/Espace_admin/Ajouter_Etudiant" element={<AjouterEtudiant/>} />
            <Route path="/Espace_admin/Ajouter_Rs" element={<AjouterRS/>} />
            <Route path="/Espace_admin/Modifier_Etudiant/:id" element={<ModifierEtudiant/>} />
            <Route path="/Espace_admin/ModifierRS/:id" element={<ModifierRS/>} />
            //Espace_SuperViser
            <Route path="/Espace_SuperViser/Account_SuperViser" element={<Account_SuperViser/>} />
            <Route path="/Espace_SuperViser/Securite_SuperViser" element={<Security_SuperViser/>} />
           </Routes>

            
      </Router>
  );
}

export default App;
