
import React, { useState, useEffect} from 'react';
import './App.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './components/dashboard';


import Login from './auth/login';
import Header from './layout/header';

function App() {
  
  const [header,setHeader]=useState(false)
    
  return (
    <div className="App">
         
      {header ? <Header/> : null}
     <Routes>
       <Route path="/" element={<Login/>}></Route>
     </Routes>
     <Routes>
       <Route path="/dashboard" element={<Dashboard/>}></Route>
     </Routes>
     <Routes>
       <Route path="/header" element={<Header/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
