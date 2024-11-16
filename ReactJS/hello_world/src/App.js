import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greet />
      <Greet name="Dev" heroName="SuperMan"/>          {/*Greet is a component. name,heroName are attributes bundles into object called as props*/}
        <p>This is a children props</p>
      <Greet name="Emily" heroName="Wonder Women">
        <button>Power</button>
      </Greet>                 {/* if we want to use components multiple times we have to call that tags multiple times with attributes */}
      <Greet name="Max" heroName="Thor"/>
      <Welcome name="Dev" heroName="SuperMan"/> 
      <Welcome name="Emily" heroName="Wonder Women"/> 
      <Welcome name="Max" heroName="Thor"/> 

      <Message />
      <Counter />
      {/*<Hello /> */}                              
    </div>
  );
}

export default App;
