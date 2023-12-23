import './App.css';

import BackgroundLogin from './Components/Components/Js/BackgroundLogin';
import { Button } from './Components/Mini-Components/Js/Button';
import BackgroundLogin from './Components/Components/Js/BackgroundLogin';
import ForgotPassword from './Pages/Auth/Js/ForgotPassword';
import Login from './Pages/Auth/Js/Login';
import ResetPassword from './Pages/Auth/Js/ResetPassword';


function App() {

  return (

   <div className='app_css' style={{ backgroundImage: `url('${backgroundImagePath}')` }}>
    <div>
      <Login/>
    </div>
  </div>
  );
}

export default App;
