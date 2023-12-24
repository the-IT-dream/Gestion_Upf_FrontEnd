import React from 'react';
import '../css/Account.css';
import { Button } from '../../../../../Components/Mini-Components/Js/Button';

function Account() {
  return (
    <div className='account__container'>
        <div className='header__button'>
            <Button
                className="butt__account"
                buttonStyle={'btn--save--style'} 
                buttonSize={'btn--save--size'}
                children={'Account'} 
                buttonPath={'/Espace_Etudiant'}
            />
             <Button
                className="butt__account"
                buttonStyle={'btn--save--style'} 
                buttonSize={'btn--save--size'}
                children={'Security'} 
                buttonPath={'/Espace_Etudiant'}
            />
        </div>
      ozifnzindio
    </div>
  )
}

export default Account
