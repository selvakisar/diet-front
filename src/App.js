
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Login from './components/user/login';
import Signup from './components/user/signup';
import Forgot from './components/user/forgot';
import Reset from './components/user/reset';
import Home from './components/pages/Home';
import Plan from './components/pages/Plan';
import BmiCalculator from './components/pages/Bmi';

function App() {
  return (
<div className="App ">
      <div>
       
      <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/forgetpass" element={<Forgot/>}></Route>
          <Route path="/resetpass/:token" element={<Reset/>}></Route>



          <Route  path="/dashboard" element= {<Home/>} ></Route>

          <Route  path="/plan" element= {<Plan/>} ></Route>



          <Route  path="/bmi" element= {<BmiCalculator/>} ></Route>

      </Routes>
      </div>
    </div>
  );
}

export default App;
