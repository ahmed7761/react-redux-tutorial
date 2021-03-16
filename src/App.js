import './App.css';
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
        <Hello name="Sharif"/>
        <Hello>Child element</Hello>
    </div>
  );
}

export default App;
