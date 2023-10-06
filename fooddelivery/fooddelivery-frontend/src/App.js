import './App.css';
import Home from './components/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Menu from './components/Menu';
import Cart from './components/cart/Cart';
import Delivery from './components/cart/Delivery';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { useEffect } from 'react';
import store from './store';
import { loadUser } from './actions/userAction';
function App() {
  useEffect(()=>{
    store.dispatch(loadUser())
  },[]);
  return (
    <Router>

    <div className="App">
      <Navbar/>
      <div className='container container-fluid'>
      <Routes>
      <Route path='/' element={<Home/>} exact />
      <Route path='/eats/stores/:id/menus' element={<Menu/>} exact />
      <Route path='/cart' element={<Cart/>} exact />
      <Route path='/delivery' element={<Delivery/>} exact />
      <Route path='/users/login' element={<Login/>} exact />
      <Route path='/users/signup' element={<Register/>} exact />


      
      </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
