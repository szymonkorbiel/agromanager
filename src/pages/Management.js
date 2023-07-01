import React from 'react';
import Slider from '../Slider';
import '../App.css';
import {Link} from 'react-router-dom';

function Management() {
    return (
      <div>
      <div className="App">
      <header className="App-header">
        <div className="header-left">
          <img src="../logo.jpg" alt="Logo" />
          <h1>AgroManager</h1>
        </div>
        <div className="slider-container">
            <Slider />
          </div>
        <div className="header-right">
          <p>You are logged as: <br />Username</p>
        </div>
      </header>

      <div className="container">
        <div class="items">
          <div class="items-head">
            <p>Modules</p>
            <hr />
          </div>
          <div class="items-body">
            <div class="items-body-content">
              <Link to="/"><p>Dashboard</p></Link>
            </div>
            <div class="items-body-content">
              <Link to="/management"><p>Management</p></Link>
            </div>
            <div class="items-body-content">
              <Link to="/budget"><p>Budget</p></Link>
            </div>
            <div class="items-body-content">
              <Link to="/machines"><p>Machines</p></Link>
            </div>
            <div class="items-body-content">
              <Link to="/warehouses"><p>Warehouses</p></Link>
            </div>
          </div>
        </div>

        <main>
          <div class="items-head">
            <p>Dashboard</p>
            <span className='items-desc'>Take charge of your farm operations by implementing efficient management practices, enabling you to optimize productivity and maximize profitability. </span>
            <hr />
          </div>
          <div className="grid-container">
            
          </div>
        </main>
      </div>

    <footer className="App-footer">
      <div className="footer-left">

        <div className="footer-links">
          <Link to="/login"><p>Podstrona login</p></Link>
          <a href="#">Link 2</a>
        </div>
      </div>
      <p className="footer-text">© 2023 Dekodery. All rights reserved.</p>
    </footer>

    </div>
    </div>
    );
  }

  export default Management;
