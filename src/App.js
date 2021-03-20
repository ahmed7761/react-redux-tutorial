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
import CompA from "./components/CompA";
import Update from "./components/Update";
import UnmountA from "./components/UnmountA";
import Car from "./components/Car";
import Error from "./components/Error";
import FragmentTest from "./components/FragmentTest";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import MemoA from "./components/MemoA";


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
        <CompA />
        <Update />
        <UnmountA />
        <Error>
            <Car car="Bugati" />
        </Error>
        <Error>
            <Car car="Honda" />
        </Error>
        {/*<Error>*/}
        {/*    <Car car="Symphony" />*/}
        {/*</Error>*/}

        <h1>Fragment</h1>
        <FragmentTest />
        <Table />

        <PureComp />
        <MemoA />

    </div>
  );
}

export default App;
