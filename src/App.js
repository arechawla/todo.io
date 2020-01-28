import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

//Animations

//need this to get the input field for todos
import TodoForm from './TodoForm'
//Need this to obtain the clock image from src folder, cannot just put it in raw due to react restriction ?...
import clock from './clockTick.gif'
import pika from './pika.gif'
import SideBar from './SideBar'

const w = window.innerWidth / 8;
const h = window.innerHeight / 5;


var months = ["Jan",
              "Feb",
              "Mar",
              "April",
              "May",
              "June",
              "July",
              "Aug",
              "Sept",
              "Oct",
              "Nov",
              "Dec"];


function showTime() {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var dat = time.getDate()
  var mon = time.getMonth();
  var yea = time.getFullYear();
  var fullTime = months[mon] + " " + dat + ", " + yea + "  " + h + ":" + m + ":" + s;

  document.getElementById("timeDisplay").innerText=fullTime;
}





function App() {





  return (
    <div className="App">
      <header className="App-header">
        {/*Here I call in the image from the import above */}
        <img src = {pika} style = {{ position: 'absolute', left: window.innerWidth - 300, top: 10, height: h, width: w }} />
        


        <h1 id="timeDisplay">{setInterval(showTime, 1000)}</h1>
        
        

        <SideBar/>
        <TodoForm/>
        <p>
          Work in Progess.
        </p>
        <a
          className="App-link"
          href="https://github.com/arechawla"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Projects
        </a>
      </header>
    </div>
  );
}

export default App;
