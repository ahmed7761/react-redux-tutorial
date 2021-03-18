import './App.css';
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import CarOne from "./components/CarOne";
import CarTwo from "./components/CarTwo";
import Parent from "./components/Parent";
import Condition from "./components/Condition";
import ConditionTwo from "./components/ConditionTwo";
import ConditionThree from "./components/ConditionThree";

function App() {
  return (
    <div className="App">
        <Hello name="Sharif"/>
        <Hello>Child element</Hello>
        <Counter/>
        <CarOne brand="ford" color="black" />
        <CarTwo brand="Toyota" color="red" />
        <Parent />
        <Condition />
        <ConditionTwo />
        <ConditionThree />
    </div>
  );
}

export default App;
