import CompliteIcon from "../../../assets/images/icon-complete.svg"
import { Button } from "../Form.style";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrapp = styled.div`  
    display: flex;
    flex-flow: column;
    width: 90%;
    align-items: center;
    transform: translateX(200%);
    @media(min-width: 536px){
        width: 25%;
    }
`
const Img = styled.img`
    width: 25%;
    margin: 5% 0;

    @media(min-width: 536px){
        width: 50%;
    }
`
const H1 = styled.h1`
    color: #21092f;
    font-weight: 200;
    margin: 5% 0;

`

const H2 = styled.h2`
    color: #8e8593;
    font-size: 1rem;
    font-weight: 200;
    margin: 5% 0;

`
interface Props {
    resetInput: () => void,
}

export const FormComplite: React.FC<Props> = ({ resetInput }) => {

    return (
        <Wrapp as={motion.div}
            key="thanks"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: .8 } }}
            exit={{ x: -100, opacity: 0, transition: { duration: .8 } }}
        >
            <Img src={CompliteIcon} alt="CompliteIcon" />
            <H1>THANK YOU!</H1>
            <H2>We've added your card details</H2>
            <Button
                as={motion.button}
                onClick={resetInput}
                whileTap={{ scale: 0.9 }}
            >
                Continue
            </Button>
        </Wrapp>

    )
};