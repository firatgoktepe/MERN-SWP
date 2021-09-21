import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
