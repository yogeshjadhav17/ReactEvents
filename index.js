import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Course(){
  const shoot = () =>{
    window.alert("Good Choice!");
  }

  return (
    <button onClick={shoot} className="button">Welcome everyone.I am Doing Full Stack development in React and Java springboot with Hubsem Private Limited.</button>
  );
}

ReactDOM.render(<Course/>, document.getElementById('root'));