import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route } from "react-router-dom";
import "../assets/styles/style.css";


import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      
        <Route exact path="/" component={Homepage}/>
      
      <Footer />
    </BrowserRouter>
  </div>
  )}

export default App;
