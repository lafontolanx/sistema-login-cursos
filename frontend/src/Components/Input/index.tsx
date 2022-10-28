import React from 'react';
import { InputCustomizado } from './styles'

interface InputProps {
  name: string,
  placeholder: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  type: string,
}

const Input = ({name, placeholder, onChange, type}: InputProps) => {
  return ( 
    <InputCustomizado
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
   );
}
 
export default Input;