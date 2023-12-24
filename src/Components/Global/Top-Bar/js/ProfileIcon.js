import React,{useState} from 'react';
import '../css/ProfileIcon.css';

function ProfileIcon(props) {
  return (
    <div className='profile__container'>
      <div className='profile__img'>
        <img src={props.ProfileIconImg} />
      </div>
    </div>
  )
}

export default ProfileIcon
