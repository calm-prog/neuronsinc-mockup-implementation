import React from 'react';
import './App.scss';
// Components
import Header from './components/Header'
import LoginCard from './components/login/LoginCard'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <LoginCard />
      </main>
    </div>
  );
}

export default App;
