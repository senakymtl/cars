import React from 'react';
import Navbar from './components/Navbar';
import{BrowserRouter as Router,  Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';



function App() {
  return (
    <>
        <Navbar/>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/sign-up' element={ <SignUp /> } /><Route path='/contact' element={ <Contact /> } />
      </Routes>
        
    <div className='App'>

    </div>

    </>
  );
}

export default App;
