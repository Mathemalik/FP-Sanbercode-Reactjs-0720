import React from 'react';
import './App.css';
import {UserProvider} from './Context/UserCon'
import Main from './layout/Main'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <Main/>
      </Router>
    </UserProvider>
    
    </>
    
  );
}

export default App;