import { CardCursos } from "../CardCursos"
import { Container, Section, Title } from "./styles"
import { CursoProps } from '../../Pages/Professor'

interface CategoriaProps {
    cursos: CursoProps[];
    nome: string;
    key: string;
}

export const Categoria = ({cursos, key, nome}: CategoriaProps) => {
    return (
        <>
        {cursos.length > 0 ? 
        (
          <Section>
              <Title>{nome}</Title> 
              <Container>
                  {cursos.map( curso => <CardCursos nome={curso.curso} key={curso.curso}/> )} 
              </Container>
          </Section>
        ) : 
        (
          <></>
        ) 
      }
        </>
    )
}