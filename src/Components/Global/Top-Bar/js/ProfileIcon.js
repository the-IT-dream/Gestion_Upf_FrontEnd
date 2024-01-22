import React,{useState} from 'react';
import '../css/ProfileIcon.css';
import ProfileImage from '../../../../images/avatar/1.png'

function ProfileIcon(props) {
  return (
    <div className='profile__container'>
      <div className='profile__img'>
        <img src={ProfileImage} />
      </div>
    </div>
  )
}

export default ProfileIcon
