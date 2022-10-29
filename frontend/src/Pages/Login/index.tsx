import React, { useState, useContext } from "react";
import { Circle, Container, Form, Stripes, Title, Triangle } from "./styles";
import Botao from "../../Components/BotaoLogin";
import Input from "../../Components/InputLogin";
import circle from "../../assets/circle.svg";
import triangle from "../../assets/triangle.svg";
import stripes from "../../assets/stripes.svg";
import { AuthContext } from '../../Context/context'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate()

 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    try {
      const data = signIn(email, password);

      navigate('/user')

      console.log(data);
    } catch (error) {
      console.log(error)
    }


  };

  return (
    <Container>
      <Circle src={circle} alt={'circle'}/>
      <Triangle src={triangle} alt={'triangle'}/>
      <Stripes src={stripes} alt={'stripes'}/>

      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
          name='email'
          placeholder='E-mail'
          onChange={(e: any) => setEmail(e.target.value)}
          type='email'
        />

        <Input
          name='password'
          placeholder='Password'
          onChange={(e: any) => setPassword(e.target.value)}
          type='password'
        />

        <Botao
          type="submit"
          text="Login"
          onClick={handleSubmit}
          disabled={false}
        />

      </Form>
    </Container>
  );
}

export default Login;