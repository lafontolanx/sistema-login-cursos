import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Container, Form } from "./styles";

export default function FormPropsTextFields() {
  return (
    <Container>
      <Form>
        <h1>Login</h1>
        
        <div>
            <TextField
            id="outlined-helperText"
            label="E-mail"
            defaultValue=""
            />
        </div>

        <div>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
            />
        </div>

        <Button variant="contained" size="large">login</Button>
      </Form>
    </Container>
  );
}