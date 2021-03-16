import './App.css';
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import CarOne from "./components/CarOne";
import CarTwo from "./components/CarTwo";

function App() {
  return (
    <div className="App">
        <Hello name="Sharif"/>
        <Hello>Child element</Hello>
        <Counter/>
        <CarOne brand="ford" color="black" />
        <CarTwo brand="Toyota" color="red" />
    </div>
  );
}

export default App;
