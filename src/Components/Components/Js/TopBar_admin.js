import React,{useState} from 'react';
import '../Css/TopBar.css';
import ProfileIcon from '../../Global/Top-Bar/js/ProfileIcon';
import ProfileMenu_admin from '../../Global/Top-Bar/js/ProfileMenu_admin';

function TopBar_admin(props) {
  const [openProfile,setOpenProfile] = useState(false);
  return (
    <>

    <div className='TopBar__container'>
      <div className='TopBar__cadre'>
        <div>
        <button className='search__button'>Search</button>
        </div>
        <div>
          <div onClick={() => {setOpenProfile(!openProfile)}}>
            <ProfileIcon  ProfileIconImg='../../images/avatar/1.png'/>
          </div>
        <div className={`dropdown__container ${openProfile? 'active' : 'inactive'} `}>
          <ProfileMenu_admin />
        </div>
        </div>
        
      </div>
    </div>

    </>
  )
}

export default TopBar_admin
