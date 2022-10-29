import React,{ useState } from "react"
import { Container, Form, Title } from "./styles"
import { CampoTexto } from "../CampoTexto"
import { ListaSuspensa } from "../ListaSuspensa"
import { Botao } from "../BotaoFormulario"

interface FormularioProps {
    listaCursos: string[];
    aoNovoCursoCadastrado: (curso: any) => void;
}

export const Formulario = ({listaCursos, aoNovoCursoCadastrado}: FormularioProps) => {

    const [curso, setCurso] = useState('')
    const [professor, setProfessor] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')

    const aoSalvar = (evento: { preventDefault: () => void }) => {
        evento.preventDefault();
        aoNovoCursoCadastrado({
            curso,
            professor,
            categoria,
            descricao
        })
        setCurso('')
        setProfessor('')
        setCategoria('')
        setDescricao('')
    }

    return(
        <Container>
            <Form onSubmit={aoSalvar}>
                <Title>Cadastrar um novo curso:</Title>
                <CampoTexto  
                    label="Curso:" 
                    placeholder="Digite o nome do curso"
                    obrigatorio={true}
                    valor={curso}
                    aoAlterado={valor => setCurso(valor)}
                />
                <CampoTexto  
                    label="Professor:" 
                    placeholder="Digite o nome do professor"
                    obrigatorio={true}
                    valor={professor}
                    aoAlterado={valor => setProfessor(valor)}
                />
                <ListaSuspensa
                    label="Categoria:"
                    placeholder="Selecione uma categoria"
                    obrigatorio={true}
                    itens={listaCursos}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />
                <CampoTexto  
                    label="Descrição:" 
                    placeholder="Digite a descrição do curso"
                    obrigatorio={true}
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <Botao
                    text="Criar curso"
                />
            </Form>
        </Container>
    )
}