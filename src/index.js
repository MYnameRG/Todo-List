import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './todo';

//React Virtual-DOM (First Call goes to this area)
//function hello(){

ReactDOM.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
  document.getElementById('root')
);

//}
//Normal DOM document.getElementById('root')
//React DOM compares the Normal DOM with recent 
//returned new element

//setInterval(hello, 1000);