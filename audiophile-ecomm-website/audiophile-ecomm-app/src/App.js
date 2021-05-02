import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import Bringing from './components/Bringing';
import Footer from './components/Footer';
import HeadPhonesScreen from './Screen/HeadPhonesScreen';
import SpeakersScreen from './Screen/SpeakersScreen';
import EarPhonesScreen from './Screen/EarPhonesScreen';


function App() {



  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={HomeScreen}></Route>
        <Route path='/headphones' exact component={HeadPhonesScreen}></Route>
        <Route path='/speakers' exact component={SpeakersScreen}></Route>
        <Route path='/earphones' exact component={EarPhonesScreen}></Route>
      </Switch>
      <Bringing/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
