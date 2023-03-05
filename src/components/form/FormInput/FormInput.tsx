import styled from "styled-components"

export const Wrapp = styled.div<PropsStyled>`
    display: flex;
    flex-flow: column;
    /* width: 90%; */
    width: ${props => props.isSmall? "50%" : "100%"};
    margin: 2% 0;

    @media(min-width: 536px ){
        width: ${props => props.isSmall? "50%" : "100%"};
        margin: .5% 0;
    }
`
export const Label = styled.label`
    font-size: .9rem;
    margin: 2%;
` 
export const Input = styled.input<PropsStyled>`
    padding: 15px;
    /* max-width: 100%; */
    /* width: ${props=> props.isSmall? "20%" : "98%"}; */
    margin-left: 2%;
    border: 1px solid lightgray;
    border-radius: 10px;
    font-size: 1rem;
    
    ::placeholder{
        color: lightgray;
    }

    @media(min-width: 536px ){
            margin: .5% 0;
    }
`

interface PropsStyled {
    isSmall?: boolean,
}

interface Props {
    name: string,
    type: string,
    placeholder: string,
    isSmall?: boolean,
}

export const FormInput: React.FC<Props> = ({name, type, placeholder, isSmall = false}) => {
    return (
        <Wrapp
            isSmall={isSmall}>
            <Label htmlFor={name}>{name}</Label>
            <Input 
                id={name} 
                type={type}
                placeholder={placeholder}
                />
        </Wrapp>
    )
};