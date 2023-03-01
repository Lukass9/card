import styled from "styled-components"
import img from "../../assets/images/bg-card-front.png"
import logo from "../../assets/images/card-logo.svg"


const Front = styled.article`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: contain;
    width: 70%;
    height: 70%;
    top: -15%;
    left: 5%;

    position: relative;
    display: flex;
    flex-flow: column;
    padding-left: 5%;
    /* justify-content: center; */
    /* align-items: center; */
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
    font-size: 1.5em;
    margin-top: 15%;
    margin-bottom: 0;
`
const Wrapp = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 7%;
`
const Name = styled.p`
    color: white;   
    font-size: .9em;
`
const CVC = styled.p`
    color: white;   
    font-size: .9em;
`

interface Props {
}

export const FrontCard: React.FC<Props> = (props) => {
    return (
        <Front>
            <Logo src={logo} alt="logo"/>
            <CardNumber>0000 0000 0000 0000</CardNumber>
            <Wrapp>
                <Name>JANE APPLESED</Name>
                <CVC>00/00</CVC>
            </Wrapp>
        </Front>
    )
};

export default FrontCard