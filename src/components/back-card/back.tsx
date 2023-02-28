import styled from "styled-components"
import img from "../../assets/images/bg-card-back.png"

const Back = styled.article`

`
const Img = styled.img`
   position: absolute;
   width: 60%; 
   top: 8%;
   right: 10%;
`
interface Props {
}

export const BackCard: React.FC<Props> = (props) => {
    return (
        <Back>
            <Img src={img}/>
        </Back>
    )
};

export default BackCard