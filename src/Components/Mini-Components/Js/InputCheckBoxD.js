import React,{useState} from 'react';
import '../Css/Input.css'

export const InputCheckBoxD = ({
    children,
    type,
    id,
    name,
    value,
    onChange,
    onFocus,
    placeholder,
    label,
    htmlfor,
    required,
    LoginFormGroup
}) => {
  return (
    <div className={LoginFormGroup}>
      <input 
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        required={required}
      />
      <label htmlFor={htmlfor} className='Login__Form__label'>{label}</label>  
    </div>
  )
}

export default InputCheckBoxD
