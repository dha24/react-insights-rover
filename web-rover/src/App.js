import './App.css';
// import {Greet} from './components/Greet'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
     <Counter/>
     
     {/* <Message/> */}
     
     
     
     {/* <Greet name ="Dheeru" heroName="Ronak"/>
     <p> This is children </p>
     <Greet name ="Kumar" heroName="Mehak"/>
     <button>Action</button>
     <Greet name ="DSingh" heroName="RonJadonak"/>
     <Welcome name="Bruce" heroName = "Dyana"/>
     <Welcome/> */}
    </div>
  );
}

export default App;
