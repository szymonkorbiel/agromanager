import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="App">
      <header className="App-header">
        <div className="header-left">
          <img src="../logo.jpg" alt="Logo" />
          <h1>AgroManager</h1>
        </div>

        <div className="header-right">
          <p>You are logged in as: <br />Username</p>
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
            
            <div className="grid-item">
              <img src="../placeholder1.png" alt="placeholder1" className="placeholder"/>
              <p>Take charge of your farm operations by implementing efficient management practices, enabling you to optimize productivity and maximize profitability. </p>
            </div>
            <div className="grid-item">
              <img src="../placeholder2.png" alt="placeholder2" className="placeholder" />
              <p>Take control of your farm's finances and optimize your budget for maximum productivity. Plan wisely and allocate resources efficiently to achieve financial stability and growth in your agricultural operations.</p>
            </div>
            <div className="grid-item">
              <img src="../placeholder3.png" alt="placeholder3" className="placeholder"/>
              <p>Gain comprehensive insights into your agricultural machinery, including their current condition and relevant data, empowering you to make informed decisions and streamline your farming operations.</p>
            </div>
            <div className="grid-item" >
              <img src="../placeholder4.png" alt="placeholder4" className="placeholder"/>
              <p className="description">Visualize essential information through detailed charts that showcase the quantity of raw materials and the availability of stored materials in your warehouses and silos. Access real-time data and trends to effectively manage your inventory, optimize resource utilization, and make informed decisions regarding procurement, storage, and distribution.</p>
            </div>
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
