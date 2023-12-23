import React from 'react'
import LoginForm from '../../../Components/Components/Js/LoginForm'
import ForgetPasswordForm from '../../../Components/Components/Js/ForgetPasswordForm'
import BackgroundLogin from '../../../Components/Components/Js/BackgroundLogin'

function ForgotPassword() {
  return (
    <BackgroundLogin>
      <ForgetPasswordForm
        titleForgetPassword="Forgot Password ?"
        buttonLogin="Send reset Link"
      />
    </BackgroundLogin>
  )
}

export default ForgotPassword
