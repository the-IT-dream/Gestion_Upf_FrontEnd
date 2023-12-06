import React from 'react'
import ResetPasswordForm from '../../../Components/Components/Js/ResetPasswordForm'
import BackgroundLogin from '../../../Components/Components/Js/BackgroundLogin'

function ResetPassword() {
  return (
    <BackgroundLogin>
      <ResetPasswordForm 
         titleResetPassword="Modifier Mot De Passe ?"
         resetpassword="Modifier"
      />
   </BackgroundLogin>
  )
}

export default ResetPassword
