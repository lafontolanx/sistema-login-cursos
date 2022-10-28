import { Label, Container, SelectBox, Select, Option } from "./styles"

interface ListaSuspensaProps {
    label: string;
    obrigatorio?: boolean;
    itens: string[];
    placeholder: string;
}

export const ListaSuspensa = ({label, obrigatorio, itens, placeholder}: ListaSuspensaProps) => {
    return(
        <Container>
            <Label>{label}</Label>
                <SelectBox>
                    <Select required={obrigatorio}>
                        <Option value="" disabled >{placeholder}</Option>
                        {itens.map((item, index) => {
                            return <Option key={index}>{item}</Option>
                        })}
                    </Select>                
                </SelectBox>
        </Container>
    )
}
