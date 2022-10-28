import { Container, Form, Title } from "./styles"
import { CampoTexto } from "../CampoTexto"
import { ListaSuspensa } from "../ListaSuspensa"
import { Botao } from "../BotaoFormulario"

interface FormularioProps {
    listaCursos: string[];
}

export const Formulario = ({listaCursos}: FormularioProps) => {
    return(
        <Container>
            <Form>
                <Title>Cadastrar um novo curso:</Title>
                <CampoTexto  
                    label="Curso:" 
                    placeholder="Digite o nome do curso"
                    obrigatorio={true}
                />
                <CampoTexto  
                    label="Professor:" 
                    placeholder="Digite o nome do professor"
                    obrigatorio={true}
                />
                <ListaSuspensa
                    label="Categoria:"
                    placeholder="Selecione uma categoria"
                    obrigatorio={true}
                    itens={listaCursos}
                />
                <CampoTexto  
                    label="Descrição:" 
                    placeholder="Digite a descrição do curso"
                    obrigatorio={true}
                />
                <Botao
                    type="submit"
                    text="Criar curso"
                    //onClick={handleSubmit}
                    disabled={false}
                />
            </Form>
        </Container>
    )
}