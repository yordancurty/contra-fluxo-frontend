import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route } from "react-router-dom";
import "../assets/styles/style.css";


import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";
import LoginForm from "../routeComponent/auth/LoginForm";
import SignupForm from "../routeComponent/auth/SignupForm";
import Profile from "../routeComponent/profile/Profile";
import ProfileEdit from "../routeComponent/profile/ProfileEdit";
import ProfileDelete from "../routeComponent/profile/ProfileDelete";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile-edit" component={ProfileEdit} />
        <Route exact path="/profile-delete" component={ProfileDelete} />
        

      <Footer />
    </BrowserRouter>
  </div>
  )}

export default App;
