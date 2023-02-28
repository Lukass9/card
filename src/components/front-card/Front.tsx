import styled from "styled-components"
import img from "../../assets/images/bg-card-front.png"

const Front = styled.article`

`
const Img = styled.img`
   width: 60%; 
`

interface Props {
}

export const FrontCard: React.FC<Props> = (props) => {
    return (
        <Front>
            <Img src={img}/>
        </Front>
    )
};

export default FrontCard