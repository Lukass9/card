import './App.css';
import Bg from './components/background/Bg';
import styled from "styled-components"
import BackCard from './components/back-card/back';
import FrontCard from './components/front-card/Front';

const Wrapp = styled.main`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <Wrapp>
      <Bg>
        <BackCard/>
        <FrontCard/>
      </Bg>
    </Wrapp>
  );
}

export default App;
