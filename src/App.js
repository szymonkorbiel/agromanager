
import Home from './pages/Home';
import Management from './pages/Management';
import Budget from './pages/Budget';
import Warehouses from './pages/Warehouses';
import Machines from './pages/Machines';
import React, { Component } from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class App extends Component {
  render() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/budget" element={<Budget/>}/>
          <Route exact path="/management" element={<Management/>}/>
          <Route path="/warehouses" element={<Warehouses/>}/>
          <Route path="/machines" element={<Machines/>}/>
        </Routes>
    </Router>
        );
      }
    }

    export default App;