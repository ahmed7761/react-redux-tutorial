import './App.css';
import Hello from "./components/Hello";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
        <Hello name="Sharif"/>
        <Hello>Child element</Hello>
        <Counter/>
    </div>
  );
}

export default App;
