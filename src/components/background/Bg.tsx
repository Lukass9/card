import styled from "styled-components"
import bg from "../../assets/images/bg-main-mobile.png"

const BgDiv = styled.header`
   background-image: url(${bg});
   background-repeat: no-repeat;
   background-size: cover;
   /* position: relative; */
   flex-direction: column;
   width:100%;
   height:30%;
`

interface Props {
    children?: React.ReactNode;
}

export const Bg: React.FC<Props> = ({children}) => {
    return (
        <BgDiv>
            {children}
        </BgDiv>
    )
};

export default Bg