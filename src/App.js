import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Logo i nazwa */}
        <div className="header-left">
          <img src="logo.png" alt="Logo" />
          <h1>AgroManager</h1>
        </div>

        {/* Nazwa użytkownika */}
        <div className="header-right">
          <p>Username</p>
        </div>
      </header>

      <div className="container">
        {/* Nawigacja */}
        <div class="items">
          <div class="items-head">
            <p>UX DESIGN</p>
            
          </div>
          
          <div class="items-body">
            <div class="items-body-content">
              <span>Web Usabilty Testing</span>
              <i class="fa fa-angle-right"></i>
            </div>
            <div class="items-body-content">
              <span>Design of Everyday Things</span>
              <i class="fa fa-angle-right"></i>
            </div>
            <div class="items-body-content">
              <span>Practical Empathy: For Collaboration & Creativity in Your Work</span>
              <i class="fa fa-angle-right"></i>
            </div>
            <div class="items-body-content">
              <span>About Face: The Essentials of Interaction Design</span>
              <i class="fa fa-angle-right"></i>
            </div>
          </div>
        </div>

        {/* Główna zawartość */}
        <main>
          {/* Umieść swoje elementy głównej zawartości tutaj */}
        </main>
      </div>

      <footer className="App-footer">
          <p>Copyright</p>
        <div>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </div>
      </footer>

    </div>
  );
}

export default App;