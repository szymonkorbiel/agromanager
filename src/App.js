import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <img src="logo.jpg" alt="Logo" />
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
              <p>Management</p>
            </div>
            <div class="items-body-content">
              <p>Budget</p>
            </div>
            <div class="items-body-content">
              <p>Machines</p>
            </div>
            <div class="items-body-content">
              <p>Magazines</p>
            </div>
          </div>
        </div>

        <main>
          <div class="items-head">
            <p>Dashboard</p>
            <hr />
          </div>
          
          <div className="grid-container">
            <div className="grid-item">Div 1<img src="logo.jpg" alt="Logo" /></div>
            <div className="grid-item">Div 2<img src="logo.jpg" alt="Logo" /></div>
            <div className="grid-item">Div 3<img src="logo.jpg" alt="Logo" /></div>
            <div className="grid-item">Div 4<img src="logo.jpg" alt="Logo" /></div>
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
  );
}

export default App;