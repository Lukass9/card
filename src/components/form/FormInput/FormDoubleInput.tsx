import styled from "styled-components"
import { Input, Label, Wrapp } from "./FormInput";

interface Props {
    name: string,
    name2: string,
    type: string,
    label: string,
}

const InputWrapp = styled.div`
    display: flex;
`

const DoubleInput = styled(Input)`
    max-width: 20%;
`

export const FormDoubleInput: React.FC<Props> = ({name, type, name2, label }) => {
    return (
        <Wrapp>
            <Label htmlFor={name}>{label}</Label>
            <InputWrapp>
                <DoubleInput 
                    id={name} 
                    type={type}
                    placeholder={name}
                    />
                <DoubleInput 
                    id={name2} 
                    type={type}
                    placeholder={name2}
                    />
            </InputWrapp>
        </Wrapp>
    )
};