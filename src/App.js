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


function App() {



  

  return (
    <>
    
    <Router>

    <Header/>
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/task' element={<Task/>} />
      <Route path='/pending' element={<Pending/>} />
      <Route path='/data' element={<DataFetcher/>} />

      
    
    </Routes>
    <Footer/>
    </Router>


    </>
   
  );
}

export default App;
