import { Container, Label, Input } from "./styles"

interface CampoTextoProps {
    label: string;
    placeholder: string;
    obrigatorio?: boolean;
    valor: string;
    aoAlterado: (valor: string) => void;
}

export const CampoTexto = ({label, placeholder, obrigatorio, valor, aoAlterado}: CampoTextoProps) => {

    const aoDigitado = (evento: { target: { value: any; }; }) => {
        aoAlterado(evento.target.value)
    }
    
    return(
        <Container>
            <Label>{label}</Label>
            <Input placeholder={placeholder} required={obrigatorio} value={valor} onChange={aoDigitado}/>
        </Container>
    )
}