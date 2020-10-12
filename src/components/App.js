import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route } from "react-router-dom";
import "../assets/styles/style.css";


import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";
import LoginForm from "../routeComponent/auth/LoginForm";
import SignupForm from "../routeComponent/auth/SignupForm";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />

      <Footer />
    </BrowserRouter>
  </div>
  )}

export default App;
