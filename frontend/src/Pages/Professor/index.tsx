import React , { useState } from "react";
import { Formulario } from "../../Components/Formulario";
import { Header } from "../../Components/Header";
import { Categoria } from "../../Components/Categoria";

export interface CursoProps {
  curso: string;
  categoria: string;
  descricao: string;
  professor: string;
}

export default function UserDashboard() {
  const cursosCategoria = ['Programação','Front-End','Back-End','Mobile','Data Science','UX e Design']

  const [cursos, setCursos] = useState<CursoProps[]>([])

  const aoNovoCursoAdicionado = (curso: any) => {
    setCursos((prev) => [...cursos, curso])

    console.log(curso)
  }

  return (
    <div>
      <Header name="Professor" />
      <Formulario 
        listaCursos={cursosCategoria.map(listaCurso => listaCurso)} 
        aoNovoCursoCadastrado={curso => aoNovoCursoAdicionado(curso)}
      />

      {cursosCategoria.map(cursoCategoria => <Categoria 
        key={cursoCategoria} 
        nome={cursoCategoria}  
        
        cursos={cursos.filter(curso => curso.categoria === cursoCategoria)}
      />)}
    </div>
  );
}