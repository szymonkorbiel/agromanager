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
        <nav>
          {/* Umieść swoje elementy nawigacyjne tutaj */}
        </nav>

        {/* Główna zawartość */}
        <main>
          {/* Umieść swoje elementy głównej zawartości tutaj */}
        </main>
      </div>

      <footer className="App-footer">
        {/* Umieść swoje elementy stopki tutaj */}
      </footer>
    </div>
  );
}

export default App;