import React from 'react';
import { BotaoCustomizado } from './styles'

interface BotaoProps {
  text: string,
}

export const Botao = ({text}: BotaoProps) => {
  return ( 
    <BotaoCustomizado>
        {text}
    </BotaoCustomizado>
   );
}
