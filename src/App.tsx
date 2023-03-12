import './App.css';
import Bg from './components/background/Bg';
import styled, { ThemeProvider } from "styled-components"
import BackCard from './components/back-card/back';
import FrontCard from './components/front-card/Front';
import GlobalStyle from './globalStyle';
import { Form } from './components/form/Form';
import { useEffect, useState } from 'react';

const Wrapp = styled.main`
  display: flex;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  @media(min-width: 536px ){
    flex-flow: row;
  }
`
function App() {
  const [dataCard, setDataCard] = useState({
    "CARDHOLDER NAME": "JANE APPLESED",
    "CARD NUMBER": "0000 0000 0000 0000",
    "MM": "00",
    "YY": "00",
    "CVC": "000"
  });
  
  const changeData = (name: "CARDHOLDER NAME" | "CARD NUMBER" | "MM" | "YY" | "CVC" | undefined, changeData: string) =>{
    setDataCard({...dataCard, [name as string]: changeData})
  }

  return (
    <>
      <GlobalStyle />
      <Wrapp>
        <Bg>
          <BackCard cvc={dataCard["CVC"]}/>
          <FrontCard dataCard={dataCard}/>
        </Bg>
        <Form dataCard={dataCard} changeData={changeData}/>
      </Wrapp>
    </>

  );
}

export default App;
