import './App.css';
import React from 'react';
import { Navbar } from './components/Navbar';
import { Quotes } from './components/Quotes';
function App() {
 
  return (
    <div className="App">
      <Navbar></Navbar>
      <Quotes></Quotes>
    </div>
  );
}

export default App;
