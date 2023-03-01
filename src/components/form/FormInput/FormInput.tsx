import styled from "styled-components"

export const Wrapp = styled.div`
    display: flex;
    flex-flow: column;
    width: 90%;
    margin: 2% 0;
`
export const Label = styled.label`
    font-size: 1.1em;
    margin: 2%;
` 
export const Input = styled.input`
    padding: 15px;
    max-width: 98%;
    width: auto;
    margin-left: 2%;
    border: 1px solid lightgray;
    border-radius: 10px;
    font-size: 1.5em;
    
    ::placeholder{
        color: lightgray;
    }
`

interface Props {
    name: string,
    type: string,
    placeholder: string,
}



export const FormInput: React.FC<Props> = ({name, type, placeholder}) => {
    return (
        <Wrapp>
            <Label htmlFor={name}>{name}</Label>
            <Input 
                id={name} 
                type={type}
                placeholder={placeholder}
                />
        </Wrapp>
    )
};