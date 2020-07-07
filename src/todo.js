import React, {Component, Fragment} from 'react';
import Banner from './banner';
import Input from './input';

export default class Todo extends Component
{
  render(){
    return(
      <Fragment>
        <Banner />
        <Input />
      </Fragment>
    );
  }
}

/*function App() 
{
  const name = 'By Rohit Gupta';
  const value = 1;

  if (value)
  {
    return (
      <h1 className="greeting" id={value}>Hello, world!! -- {name}</h1>
      );
  }
  else{
    return (
      <h1 className="greeting" id={value}>Hello, Stranger!!</h1>
      );
  }
}*/

/*class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      a: 1, b: 2, 
      name: "Rohit Gupta",
      date: new Date(),
      counter: 0,
      post: [],
      comments: []
    };
  }

  //ReactDOM will mount the component after render
  componentDidMount()
  {
    //After 1s, change the state
    this.timerId = setInterval(()=> this.tick(), 1000);
  }

  //Old Component will unmount by ReactDOM
  componentWillUnmount(){
    //clearInterval(this.timerId);
    console.log("Unmount")
  }

  //State change ReactDOM will find and again call component 
  //to return new state element
  tick(){
    this.setState((state, props) => ({
      counter: state.counter + 1,
      date: new Date()
    }));
  }

  //Keys should be specifed in the map(()=>{here, 
  //key should be mentioned})
  //elements inside the map() call need keys
  render()
  {
    const numbers = [1,2,3,4,5];
    return(
    <div>
      <h1>Hello, world! -- {this.state.name}</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      <h3>Sum: {this.state.a + this.state.b}</h3>
      <h3>Count: {this.state.counter}</h3>
      <h3>List: {numbers.map((num) => `${num*2} `)}</h3>
      <ul>{numbers.map((num, index) => <li key={num.toString()}>{num*2}</li>)}</ul>
    </div>
    )
  }
}*/

/*function App(props) {
  let sum = parseInt(props.a) + parseInt(props.b); 
  const element = (
    <div>
      <h1>Hello, world! -- {props.name}</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <h3>Sum: {sum}</h3>
    </div>
  );
  return element;
}*/
