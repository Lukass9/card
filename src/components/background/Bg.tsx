import styled from "styled-components"
import bgMobile from "../../assets/images/bg-main-mobile.png"
import bgDesktop from "../../assets/images/bg-main-desktop.png"

const BgDiv = styled.header`
   position: relative;
   background-image: url(${bgMobile});
   background-repeat: no-repeat;
   background-size: cover;
   /* flex-direction: column; */
   width: 100%;
   height: 30%;
   @media(min-width: 536px ){
    display: flex;
    flex-flow: column-reverse;
    background-image: url(${bgDesktop});
    width: 45%;
    height: 100%;
    background-size: cover;
   }
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