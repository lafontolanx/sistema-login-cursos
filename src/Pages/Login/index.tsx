import * as React from "react";
import { Container, Form } from "./styles";
import Botao from "../../Components/Botao";
import Input from "../../Components/Input";

export default function Login() {

  const handleChange = (event: { target: { name: string; value: any; }; }) => {
    console.log('Digitando...', event.target.name, event.target.value)
  }

  return (
    <Container>
      <Form>
        <h1>Login</h1>
        
        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
        />

        <Input
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'
        />

        <Botao
          type="submit"
          text="Entrar"
          onClick={() => {}}
          disabled={false}
        />

      </Form>
    </Container>
  );
}