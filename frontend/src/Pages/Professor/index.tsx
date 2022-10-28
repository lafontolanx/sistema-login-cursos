import * as React from "react";
import { Formulario } from "../../Components/Formulario";
import { Header } from "../../Components/Header";

export default function UserDashboard() {

  const cursos = ['Programação','Front-End','Back-End','Mobile','Data Science','UX e Design']

  return (
    <div>
      <Header name="Professor" />
      <Formulario listaCursos={cursos.map(listaCurso => listaCurso)}/>
    </div>
    );
}