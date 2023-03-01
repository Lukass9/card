import styled from "styled-components"
import img from "../../assets/images/bg-card-back.png"

const Back = styled.article`
    position: relative;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: contain;
    width: 70%;
    height: 70%;
    top: 15%;
    left: 25%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const CVC = styled.p`
    color: white;
    font-family: 'Rubik', sans-serif;
    font-size: .9em;
    margin-right: 15%;
    margin-bottom: 2%;
`
interface Props {
}

export const BackCard: React.FC<Props> = (props) => {
    return (
        <Back>
            <CVC>000</CVC>
        </Back>
    )
};

export default BackCard