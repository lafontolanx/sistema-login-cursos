import React from 'react';
import { BotaoCustomizado } from './styles'

interface BotaoProps {
  type: string,
  text: string,
  //onClick: any,
  disabled: boolean,
}

export const Botao = ({type, text, disabled}: BotaoProps) => {
  return ( 
    <BotaoCustomizado>
        {text}
    </BotaoCustomizado>
   );
}
