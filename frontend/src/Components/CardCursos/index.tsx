import { Container, ImageUpload, Title } from "./styles"

interface CardCursosProps {
    nome: string;
    key: string;
}

export const CardCursos = ({nome, key}: CardCursosProps) => {
    return (
        <Container key={key}>
            <ImageUpload />
            <Title>{nome}</Title>
        </Container>
    )
}