import './App.css';
import Bg from './components/background/Bg';
import styled, { ThemeProvider } from "styled-components"
import BackCard from './components/back-card/back';
import FrontCard from './components/front-card/Front';
import GlobalStyle from './globalStyle';
import { Form } from './components/form/Form';

const Wrapp = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
