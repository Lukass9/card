import { motion } from "framer-motion"
import styled from "styled-components"
import img from "../../assets/images/bg-card-front.png"
import logo from "../../assets/images/card-logo.svg"


const Front = styled.article`
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    width: 74.5%;
    height: 40.836vw;
    top: -15vw;
    left: 3%;
    position: relative;
    display: flex;
    flex-flow: column;
    padding-left: 5%;
    font-size: 16px;

    @media(min-width: 536px ){
        width: 447px;
        height: 245px;
        top:-25%;
        left:50%;
        font-size: 25px;
    }
`
const Logo = styled.img`
    align-self: flex-start;
    margin-top: 7%;
    margin-left: 0%;
    width: 20%;
`
const CardNumber = styled.p`
    color: white;   
    letter-spacing: .1em;
    font-size: 1.2em;
    margin-top: 15%;
    margin-bottom: 0;
`
const Wrapp = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    margin-top: 7%;
`
const Name = styled.p`
    color: white;   
    font-size: .5em;
`
const Data = styled.p`
    color: white;   
    font-size: .5em;
`

interface Props {
    dataCard:{
        "CARDHOLDER NAME": string,
        "CARD NUMBER": string,
        "MM": string,
        "YY": string,
    }
}

const defineCardNumber = (cardNumber: string): string =>{
    const initialState = "0000 0000 0000 0000"
    return (cardNumber + initialState.substring(cardNumber.length)).toUpperCase()
}

export const FrontCard: React.FC<Props> = ({dataCard}) => {
    return (
        <Front as={motion.div}
            animate={{
                    y:[5,-5,0],
                    x:[10,0],
                    rotate: ['1deg','-1deg'],
                }}
            transition={{
                    type: "tweet",
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 5,
                }}
        >
            <Logo src={logo} alt="logo"/>
            <CardNumber>{defineCardNumber(dataCard["CARD NUMBER"])}</CardNumber>
            <Wrapp>
                <Name>{dataCard["CARDHOLDER NAME"].toUpperCase()}</Name>
                <Data>{dataCard["MM"]}/{dataCard["YY"]}</Data>
            </Wrapp>
        </Front>
    )
};

export default FrontCard