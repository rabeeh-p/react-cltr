import React, { Suspense } from 'react';
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
import Reducer2 from './components/second/Reducer';
import AutoComplete from './components/workout/AutoComplete';
import UseCallback from './components/second/UseCallback';
import Suggestions from './components/second/Suggestions';
const Lazy = React.lazy(() => import('./components/workout/Lazy'));

function App() {



  return (
    <>
    
    <Router>

    <Header/>
      <ContextApi>
      <Suspense fallback={<div>Loading...</div>}>
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

      <Route path='/lazy' element={<Lazy />} />
      <Route path='/autocomplete' element={<AutoComplete />} />
      <Route path='/usecallback' element={<UseCallback />} />
      <Route path='/suggestion' element={<Suggestions />} />
      <Route path='/reducer-page' element={<Reducer2 />} />

    </Routes>
      </Suspense>
      </ContextApi>
    <Footer/>
    </Router>





    </>
   
  );
}

export default App;
