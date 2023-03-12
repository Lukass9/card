import styled from "styled-components"
import img from "../../assets/images/bg-card-back.png"

const Back = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: contain;
    width: 74.5%;
    height: 40.836vw;
    top: 3vw;
    left: 23%;
    display: flex;
    font-size: 16px;
    @media(min-width: 536px ){
        width: 447px;
        height: 245px;
        top:-20%;
        left:70%;
        font-size: 25px;
    }
`
const CVC = styled.p`
    position: relative;
    color: white;
    font-size: .7em;
    left: -10%;
    top: 45%;
`
interface Props {
    cvc: string
}

export const BackCard: React.FC<Props> = ({cvc}) => {
    return (
        <Back>
            <CVC>{cvc}</CVC>
        </Back>
    )
};

export default BackCard