import React from 'react';
import Navbar from './components/NavBar/Navbar';
import RouterURL from './routerURL/RouterURL';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
function App() {
  return (
    <Router>
      <div className=' container'>
        <div className='row flex-column flex-md-row'>
          <Navbar />
          <RouterURL />
        </div>
      </div>
    </Router>
  );
}

export default App;
