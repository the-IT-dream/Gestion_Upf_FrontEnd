import React from 'react';
import DropMenuHeader from '../Components/js/DropMenuHeader';
import '../css/ProfileMenu.css';
import DropMenuContent from '../Components/js/DropMenuContent';

function ProfileMenu() {
  return (
    <div>
      <div className='dropdown__menu__container'>
        <DropMenuHeader />
        <DropMenuContent 
            
            DropMenuItem="Profile"
        />
         <DropMenuContent 
            DropMenuItem="Déconnecter"
        />
      </div>
    </div>
  )
}

export default ProfileMenu
