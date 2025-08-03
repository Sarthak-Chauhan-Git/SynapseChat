import './App.css'
import Teamspace from './components/Teamspace/Teamspace';
import ConvoBox from './components/Convobox/ConvoBox';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div id='main-container'>
      <Navbar username={"Sarthak"} role={"Manager"}></Navbar>
      <ConvoBox></ConvoBox>
      <Teamspace username={"Sarthak"}></Teamspace>
    </div>
  )
}

export default App
