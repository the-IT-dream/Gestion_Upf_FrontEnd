import React from 'react';
import '../Css/BackgroundLogin.css'

const BackgroundLogin = ({ children }) => {
    return (
        <div className="background">
            <img className='Background__image' src="./images/upf_logo_nonfond.png" />
          {children}
        </div>
      );
}

export default BackgroundLogin
