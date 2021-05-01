import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';


function App() {



  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={HomeScreen}></Route>
        <Route path='/'></Route>
        <Route path='/'></Route>
        <Route path='/'></Route>
      </Switch>

    </Router>
    </>
  );
}

export default App;
