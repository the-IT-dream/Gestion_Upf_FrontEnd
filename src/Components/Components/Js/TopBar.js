import React,{useState} from 'react';
import '../Css/TopBar.css';
import ProfileIcon from '../../Global/Top-Bar/js/ProfileIcon';
import ProfileMenu from '../../Global/Top-Bar/js/ProfileMenu';

function TopBar(props) {
  const [openProfile,setOpenProfile] = useState(false);
  return (
    <>

    <div className='TopBar__container'>
      <div className='TopBar__cadre'>
        <div>
        </div>
        <div>
          <div onClick={() => {setOpenProfile(!openProfile)}}>
            <ProfileIcon  ProfileIconImg='../images/avatar/1.png'/>
          </div>
        <div className={`dropdown__container ${openProfile? 'active' : 'inactive'} `}>
          <ProfileMenu />
        </div>
        </div>
        
      </div>
    </div>
    {/* {
      openProfile && <ProfileMenu />
    }   */}
    </>
  )
}

export default TopBar
