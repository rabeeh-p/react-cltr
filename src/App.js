import React from 'react';
// import {useState} from 'react'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'; 

import './app.css'
import Task from './components/Task';
import Pending from './components/Pending';
import DataFetcher from './components/DataFetcher';
import Counter from './components/Counter';
import Hello from './components/Hello';
import Counter2 from './components/Counter2';
import Callback from './components/workout/Callback';
import Memo from './components/workout/Memo';
import ReactMemo from './components/workout/ReactMemo';
import ContextApi from './components/workout/ContextApi';
import Reducer from './components/workout/Reducer';
 

function App() {



  return (
    <>
    
    <Router>

    <Header/>
      <ContextApi>
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/task' element={<Task/>} />
      <Route path='/pending' element={<Pending/>} />
      <Route path='/data' element={<DataFetcher/>} />
      <Route path='/counter' element={<Counter/>} />
      <Route path='/hello' element={<Hello/>} />
      <Route path='/counter2' element={<Counter2/>} />
      <Route path='/callback' element={<Callback/>} />
      <Route path='/memo' element={<Memo/>} />
      <Route path='/reactmemo' element={<ReactMemo/>} />
      <Route path='/reducer' element={<Reducer/>} />

      
    
    </Routes>
      </ContextApi>
    <Footer/>
    </Router>


    </>
   
  );
}

export default App;
