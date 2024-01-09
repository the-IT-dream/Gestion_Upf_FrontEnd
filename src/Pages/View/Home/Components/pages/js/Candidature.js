import React from 'react'
import { Button } from '../../../../../../Components/Mini-Components/Js/Button';

function Candidature() {
    return (
        <div className='account__container'>
          <div className='content__header__account'>
            <h2>Candidater</h2>
          </div>
          <div className='content__account'>
    
          <form className='account__form'>
            <select className='select__role'>
                    <optgroup>
                    <option>capgimini</option>
                    <option>cgi</option>
                    <option>atos</option>
                    </optgroup>
            </select>
            
          </form>
    
          </div>
          <div className='footer__account'>
            <div className='image__button__footer'>
              <Button
                buttonStyle={'btn--save--style'}
                buttonSize={'btn--save--size'}
                children={'Save Changes'}
                buttonPath={'/Espace_Etudiant'}
              />
              <Button
                className='reset_butt'
                buttonStyle={'btn--resetMini--style'}
                buttonSize={'btn--resetMini--size'}
                children={'Security'}
                buttonPath={'/Espace_Etudiant'}
              />
            </div>
          </div>
        </div>
      );
    }

export default Candidature
