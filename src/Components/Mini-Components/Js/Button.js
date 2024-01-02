import React,{useState} from 'react';
import '../../Mini-Components/Css/Button.css';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const STYLES = [
    'btn--seconnecter--style',
    'btn--reset--style',
    'btn--resetMini--style',
    'btn--save--style',
    'btn--remove--style',
    'btn--account--style',
    'btn--detail--style'
];
const SIZES = [
    'btn--seconnecter--size',
    'btn--reset--size',
    'btn--resetMini--size',
    'btn--save--size',
    'btn--remove--size',
    'btn--detail--size'
];
export const Button = ({
    children,
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    buttonPath,
    icon
}) => {  
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    :SIZES[0];
    const [clicked,setClicked] = useState(false);

    return(
        <Link className='link' to={buttonPath}>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${clicked? 'active' : 'inactive'}`} 
            onClick={() => {setClicked(!clicked)}}
            type={type}
            >
            <Icon className='icon' icon={icon} fontSize={18} />
            {children}  
            </button>
        </Link>
    )
};