import React from 'react';
import '../Css/DetailsCard.css';
import '../Css/InfosCard.css';
import { Button } from '../../Mini-Components/Js/Button';
import CapgeminiImage from '../../../images/Entreprise/Capgemini.png';
import OracleImage from '../../../images/Entreprise/Oracle.png';
import CgiImage from  '../../../images/Entreprise/CGI.png';
import AtosImage from '../../../images/Entreprise/Atos.png';
import IbmImage from '../../../images/Entreprise/ibm.jpg';

function DetailsCard(props) {
  return (
    <div className='card__infos__det'>
      <div className='card__header__det'>
        <img src={props.nomEntreprise === 'Capgemini' ? CapgeminiImage :props.nomEntreprise === 'CGI' ? CgiImage :props.nomEntreprise === 'Atos' ? AtosImage : props.nomEntreprise === 'IBM' ? IbmImage : OracleImage} alt={props.nomEntreprise} />
        <h1>{props.nomEntreprise} </h1>
      </div>
      <div className='card__content__det'>
        <h2>{props.lieuEntreprise}</h2>
        <p>{props.detailStage}</p>
      </div>
    </div>
  );
}

export default DetailsCard;
