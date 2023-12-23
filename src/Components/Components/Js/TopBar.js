import React from 'react';
import '../Css/TopBar.css';
import ProfileIcon from '../../Global/Top-Bar/js/ProfileIcon';
import ProfileMenu from '../../Global/Top-Bar/js/ProfileMenu';

function TopBar() {
  return (
    <div className='TopBar__container'>
      <div className='TopBar__cadre'>
        <div>
        <button className='search__button'>Search</button>
        </div>
        <div>
        <ProfileIcon 
          ProfileIconImg='../images/avatar/1.png'
        />
        <ProfileMenu />
        </div>
        
      </div>
    </div>
  )
}

export default TopBar
