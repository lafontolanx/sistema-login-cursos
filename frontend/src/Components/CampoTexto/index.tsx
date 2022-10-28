import { Container, Label, Input } from "./styles"

interface CampoTextoProps {
    label: string;
    placeholder: string;
    obrigatorio?: boolean;
}

export const CampoTexto = ({label, placeholder, obrigatorio}: CampoTextoProps) => {
    
    return(
        <Container>
            <Label>{label}</Label>
            <Input placeholder={placeholder} required={obrigatorio}/>
        </Container>
    )
}