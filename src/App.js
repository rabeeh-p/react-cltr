import React from 'react';
// import {useState} from 'react'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'; // Import Router components

import './app.css'
import Task from './components/Task';
import Pending from './components/Pending';

function App() {

  // let [count,setCount] = useState(0)

  // let countButtonIncreament= ()=>{
  //   console.log('clicked');
  //   setCount(count+1)
    
  // }
  // let countButtoDecrement= ()=>{
  //   console.log('clicked');
  //   if (count === 0){
  //     return
  //   }
  //   setCount(count-1)
    
  // }

  return (
    <>
    {/* <h1 >the count is {count}</h1>
    <button onClick={countButtonIncreament}>clicked</button>
    <button onClick={countButtoDecrement}>Downclicked</button> */}
    <Router>

    <Header/>
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/task' element={<Task/>} />
      <Route path='/pending' element={<Pending/>} />

    
    </Routes>
    <Footer/>
    </Router>


    </>
   
  );
}

export default App;
