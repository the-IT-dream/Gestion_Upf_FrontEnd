import React, { useState } from 'react';
import '../Css/Input.css';

export const Textarea = ({
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
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleFocus = (event) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event) => {
    setIsFocused(false);
  };

  const handleChange = (event) => {
    setIsActive(!!event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={`${LoginFormGroup} ${isFocused ? 'focused' : ''} ${isActive ? 'active' : ''}`}>
      <label htmlFor={htmlfor} className={`Login__Form__label ${isFocused ? 'focused' : ''} ${isActive ? 'active' : ''}`}>
        {label}
      </label>
      <textarea
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        required={required}
        
      />
    </div>
  );
};

export default Textarea;
