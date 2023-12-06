import './App.css';
import ForgotPassword from './Pages/Auth/Js/ForgotPassword';
import Login from './Pages/Auth/Js/Login';


function App() {
  const backgroundImagePath = "./images/upf.jpeg";
  return (
   <div className='app_css' style={{ backgroundImage: `url('${backgroundImagePath}')` }}>
     <Login />
   </div>
  );
}

export default App;
