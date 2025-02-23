import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormComponent from './FormComponent';
import Earning from './Earning';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Enoylity Media Creations Private Limited</h1>
          <h2>Bangalore, Karnataka</h2>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<FormComponent />} />
            <Route path="/earning" element={<Earning />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;