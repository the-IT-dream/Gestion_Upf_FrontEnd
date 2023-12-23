import React from 'react'
import LoginForm from '../../../Components/Components/Js/LoginForm'
import BackgroundLogin from '../../../Components/Components/Js/BackgroundLogin'


function Login() {
  
  return (
    <div >
      <BackgroundLogin>
      <LoginForm 
        titleLogin="Login"
        buttonLogin="Se connecter"
      />
      </BackgroundLogin>
    </div>
  )
}

export default Login
