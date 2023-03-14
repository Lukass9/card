import CompliteIcon from "../../../assets/images/icon-complete.svg"
import { Button } from "../Form.style";
import styled from "styled-components";

const Wrapp = styled.div`  
    display: flex;
    flex-flow: column;
    width: 25%;
    align-items: center;
`
const Img = styled.img`
    width: 50%;
`
export const FormComplite: React.FC<{}> = () => {
    return (
        <Wrapp>
            <Img src={CompliteIcon} alt="CompliteIcon" />
            <h2>THANK YOU!</h2>
            <h3>We've added your card details</h3>
            <Button>Continue</Button>
        </Wrapp>
    )
};