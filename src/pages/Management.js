import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Management() {
    return (
      <div>
        <h2>Management</h2>
        <div className="App">
      <header className="App-header">
        <div className="header-left">
          <img src="../logo.jpg" alt="Logo" />
          <h1>AgroManager</h1>
        </div>

        <div className="header-right">
          <p>Username</p>
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
            <hr />
          </div>
          
          <div className="grid-container">
            <div className="grid-item">Div 1<img src=".public/logo.jpg" alt="Logo" /></div>
            <div className="grid-item">Div 2<img src=".public/logo.jpg" alt="Logo" /></div>
            <div className="grid-item">Div 3<img src=".public/logo.jpg" alt="Logo" /></div>
            <div className="grid-item">Div 4<img src=".public/logo.jpg" alt="Logo" /></div>
          </div>
        </main>
      </div>

    <footer className="App-footer">
      <div className="footer-left">

        <div className="footer-links">
          <a href="#">Podstrona login</a>
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
