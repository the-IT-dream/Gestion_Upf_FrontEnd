import React from 'react'
import LoginForm from '../../../Components/Components/Js/LoginForm'
import ForgetPasswordForm from '../../../Components/Components/Js/ForgetPasswordForm'
import BackgroundLogin from '../../../Components/Components/Js/BackgroundLogin'
import RandomNumForm from '../../../Components/Components/Js/RandomNumForm'

function ForgotPassword() {
  return (
    <BackgroundLogin>
      <RandomNumForm
        titleForgetPassword="Random Number"
        buttonLogin="Suivant"
      />
    </BackgroundLogin>
  )
}

export default ForgotPassword
