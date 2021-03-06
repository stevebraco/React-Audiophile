import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import Footer from './components/Footer';
import HeadPhonesScreen from './Screen/HeadPhonesScreen';
import SpeakersScreen from './Screen/SpeakersScreen';
import EarPhonesScreen from './Screen/EarPhonesScreen';
import ScrollToTop from './components/ScrollToTop';
import ProductDetailScreen from './Screen/ProductDetailScreen';
import CartScreen from './Screen/CartScreen';
import CheckoutScreen from './Screen/CheckoutScreen';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listProducts } from './actions/productsActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  });

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomeScreen}></Route>
        <Route path="/headphones" exact component={HeadPhonesScreen}></Route>
        <Route path="/speakers" exact component={SpeakersScreen}></Route>
        <Route path="/earphones" exact component={EarPhonesScreen}></Route>
        <Route path="/product/:slug" component={ProductDetailScreen}></Route>
        <Route path="/cart/:slug" component={CartScreen}></Route>
        <Route path="/checkout" component={CheckoutScreen}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
