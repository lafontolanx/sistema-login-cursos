import React from 'react';
import { BotaoCustomizado } from './styles'

interface BotaoProps {
  type: string,
  text: string,
  onClick: any,
  disabled: boolean,
}

const Botao = ({type, text, onClick, disabled}: BotaoProps) => {
  return ( 
    <BotaoCustomizado>
        {text}
    </BotaoCustomizado>
   );
}
 
export default Botao;