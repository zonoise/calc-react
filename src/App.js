import React from 'react';
import './App.css';
import About from './components/About';
import CalcMain from './components/CalcMain';
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={CalcMain} />
      <Route path='/about' component={About} />
    </div>
  </BrowserRouter>
)

export default App;