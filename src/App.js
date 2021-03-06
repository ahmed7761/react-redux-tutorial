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
import RefDemo from "./components/RefDemo";
import ForwardRefA from "./components/ForwardRefA";
import PortalsDemo from "./components/PortalsDemo";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/User";
import UserTwo from "./components/UserTwo";
import ClickCounterTwo from "./components/ClickCounterTwo";
import CompOne from "./components/CompOne";
import { UserProvider } from "./components/UserContext";
import Posts from "./components/Posts";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import UseStateWithObject from "./components/UseStateWithObject";
import UseStateWithArray from "./components/UseStateWithArray";
import HookCounterThree from "./components/HookCounterThree";
import MouseMove from "./components/MouseMove";
import MouseContainer from "./components/MouseContainer.js";
import FetchData from "./components/FetchData";
import ComponentA from "./components/ComponentA";

import React, {useReducer} from 'react'
import ParentComponent from "./components/ParentComponent";
import MemoCounter from "./components/MemoCounter";
import Input from "./components/Input";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";
import ReducerCounter from "./components/ReducerCounter";
import ReducerCounterTwo from "./components/ReducerCounterTwo";
import MultipleReducerCounter from "./components/MultipleReducerCounter";
import ContextB from "./components/ContextB";
import ContextA from "./components/ContextA";
import CustomHookA from "./components/CustomHookA";
import CustomHookB from "./components/CustomHookB";
import Navbar from "./components/router/Navbar";

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from "./components/router/About";
import Home from "./components/router/Home";
import RouterPosts from "./components/router/RouterPosts";
import SinglePost from "./components/router/SinglePost";
import CounterRedux from "./components/redux/CounterRedux";
import People from "./components/redux/People";

export const UserContext = React.createContext()
export const ProfileContext = React.createContext()



const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1

        case 'decrement':
            return state - 1

        case 'reset':
            return initialState

        default:
            return state
    }
}

export const CountContext = React.createContext()


function App() {

    let success = true
    let styled = {
        color: 'red',
        fontSize: 'font-size: 40px'
    }

    const [ count, dispatch ]  = useReducer(reducer, initialState)

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
        <h1>Ref</h1>
        <RefDemo />
        <ForwardRefA />
        <PortalsDemo />
        <h1>Higher Order Component</h1>
        <ClickCounter name="Sharif" />
        <HoverCounter name="Ahmed" />
        <h1>Render Props</h1>
        <User render={(isUser, value) => isUser ?  "Welcome Sharif": `Value is ${value}`}/>
        <UserTwo  render={(count, increment) => ( <ClickCounterTwo count={count} increment={increment} /> ) } />
        <h1>Context</h1>

    <UserProvider value="Sharif">
          <CompOne  />
    </UserProvider>
        <h1>Http request</h1>
        {/*<Posts />*/}

        <h1>Hook</h1>
        <HookCounter />
        <HookCounterTwo />
        <UseStateWithObject />
        <UseStateWithArray />
        <HookCounterThree />
        {/*<MouseMove />*/}
        <MouseContainer />
        {/*<FetchData />*/}
        <UserContext.Provider value={"Sharif"}>
            <ProfileContext.Provider value={"Developer"}>
                <ComponentA />
            </ProfileContext.Provider>
        </UserContext.Provider>
        <ParentComponent />
        <MemoCounter />
        <Input />
        <ClassTimer />
        <HookTimer />
        <ReducerCounter />
        <ReducerCounterTwo />
        <MultipleReducerCounter />
        <h3>Use Reducer with context</h3>
        <CountContext.Provider value={{countValue: count, countDispatch: dispatch} }>
            <ContextA />
            <ContextB />
        </CountContext.Provider>
        <h1>Custom Hook</h1>
        <CustomHookA/>
        <CustomHookB />
        <h1>React Router Dom</h1>
        <h1>-----------------</h1>

        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/posts' component={RouterPosts} />
                <Route exact path='/posts/:id' component={SinglePost} />
            </Switch>
        </BrowserRouter>
        <h1>-------------------</h1>
        <h1>Redux Part</h1>
        <h1>---------------------</h1>
        <CounterRedux />
        <h1>---------------------</h1>
        <h2>Synchronous & Asynchronous</h2>
        <People />
    </div>
  );
}

export default App;
