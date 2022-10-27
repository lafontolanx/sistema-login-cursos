import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Container, Form } from "./styles";

export default function Login() {
  return (
    <Container>
      <Form>
        <h1>Login</h1>
        
        <div>
            <TextField
              id="outlined-helperText"
              label="E-mail"
              size="medium"
              defaultValue=""
            />
        </div>

        <div>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              size="medium"
            />
        </div>

        <Button variant="contained" size="large">login</Button>
      </Form>
    </Container>
  );
}