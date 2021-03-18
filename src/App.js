import './App.css';
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import CarOne from "./components/CarOne";
import CarTwo from "./components/CarTwo";
import Parent from "./components/Parent";
import Condition from "./components/Condition";
import ConditionTwo from "./components/ConditionTwo";
import ConditionThree from "./components/ConditionThree";
import List from "./components/List";
import StudentList from "./components/StudentList";

import MyStyle from "./components/MyStyle";
import "./components/myStyle.css"
import style from "./components/style.module.css"
import Form from "./components/Form";

function App() {

    let success = true
    let styled = {
        color: 'red',
        fontSize: 'font-size: 40px'
    }

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
        <List />
        <h1>Student List</h1>
        <StudentList />
        <h2 className={ success ? 'success font-md' : ''}>Hello Styled User</h2>
        <h2 style={styled}>Hello Inline Styled User</h2>
        <MyStyle />
        <h3 className={style.primary}>Styled Module</h3>
        <Form />
    </div>
  );
}

export default App;
