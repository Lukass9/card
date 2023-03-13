import styled from "styled-components"


interface PropsStyled {
    isSmall?: boolean,
    error?: boolean,
}

///////////FORM/////////////////////

export const FormCard = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 15%;
    /* padding: 0 5%; */
    @media(min-width: 536px ){
        width: 100%;
    }
`
export const FormWrapp = styled.div`
    width: 90%;
    @media(min-width: 536px){
        width: 40%;
    }
`
export const Wrapp = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #21092f;
    color: white;
    font-size: 1.2rem;
    padding: 5%;
    border-radius: 10px;
    margin-top: 7%;
    width: 100%;

    @media (min-width: 536px ){
        padding: 1%;
        margin-top: 3%;
    }

`

export const Error = styled.p`  
    color:red;
`

//////////////////////////////////

export const Wrapp2 = styled.div<PropsStyled>`
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
    border:  ${props=> props.error? "1px solid red" : "1px solid lightgrey"};  
    
    ::placeholder{
        color: lightgray;
    }

    @media(min-width: 536px ){
            margin: .5% 0;
    }
`

export const WrappDoubleInput = styled(Wrapp2)`
    width: 50%;

    @media(min-width: 536px ){
        width: 50%;
    }
`

export const InputWrapp = styled.div`
    display: flex;
    
`

export const DoubleInput = styled(Input)<PropsStyled>`
    max-width: 40%;
`