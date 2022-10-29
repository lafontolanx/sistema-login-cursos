import { Label, Container, SelectBox, Select } from "./styles"

interface ListaSuspensaProps {
    label: string;
    obrigatorio?: boolean;
    itens: string[];
    placeholder: string;
    valor: string;
    aoAlterado: (valor: string) => void;
}

export const ListaSuspensa = ({label, obrigatorio, itens, placeholder, valor, aoAlterado}: ListaSuspensaProps) => {
    return(
        <Container>
            <Label>{label}</Label>
                <SelectBox>
                    <Select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
                        <option value="" disabled >{placeholder}</option>
                        {itens.map((item, index) => {
                            return <option key={index}>{item}</option>
                        })}
                    </Select>                
                </SelectBox>
        </Container>
    )
}
