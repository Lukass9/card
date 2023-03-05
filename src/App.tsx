import './App.css';
import Bg from './components/background/Bg';
import styled, { ThemeProvider } from "styled-components"
import BackCard from './components/back-card/back';
import FrontCard from './components/front-card/Front';
import GlobalStyle from './globalStyle';
import { Form } from './components/form/Form';

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
  return (
    <>
      <GlobalStyle />
      <Wrapp>
        <Bg>
          <BackCard />
          <FrontCard />
        </Bg>
        <Form/>
      </Wrapp>
    </>

  );
}

export default App;
