import styled from "styled-components"
import { FormDoubleInput } from "./FormInput/FormDoubleInput";
import { FormInput } from "./FormInput/FormInput";

const FormWrapp = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 15%;
`
const Wrapp = styled.div`
    display: flex;
    /* justify-content: center; */
    width: 100%;
`
interface Props {}

export const Form: React.FC<Props> = props => {
    return (
        <FormWrapp>
            <FormInput name="CARDHOLDER NAME" type="text" placeholder="e.g. Jane Applesed"/>
            <FormInput name="CARD NUMBER" type="number" placeholder="e.g. 1234 5678 9123 0000"/>
            <Wrapp>
                <FormDoubleInput label="EXP. DATE (MM/YY)" name="MM" name2="YY" type="text"/> 
                <FormInput name="CVC" type="number" placeholder="e.g. 123"/>
            </Wrapp>
        </FormWrapp>
    )
};