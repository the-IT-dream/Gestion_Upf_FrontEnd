import React from 'react';
import '../css/DropMenuContent.css'
import { Link } from 'react-router-dom';

function DropMenuContent(props) {
  return (
    <div>
      <div className='drop__menu__items'>
        <Link className='Link__style' to ={props.link}>
        <h4>{props.DropMenuItem} </h4>
        </Link>
        
      </div>
    </div>
  )
}

export default DropMenuContent
