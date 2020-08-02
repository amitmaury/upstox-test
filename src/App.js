import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {RouterPage} from './router/index';

function App() {
  return (
      <>
       <Router>
        <RouterPage/>     
      </Router> 
      </>   
  );
}

export default App;
