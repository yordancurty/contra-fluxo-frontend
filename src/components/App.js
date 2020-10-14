import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../assets/styles/style.css";


import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";
//import PrivateRoute from "../routeComponent/auth/PrivateRoute";

import LoginForm from "../routeComponent/auth/LoginForm";
import SignupForm from "../routeComponent/auth/SignupForm";
//import Logout from "../routeComponent/auth/Logout";
import Profile from "../routeComponent/profile/Profile";
import ProfileEdit from "../routeComponent/profile/ProfileEdit";
//import ProfileDelete from "../routeComponent/profile/ProfileDelete";

 import ProductCreate from "../routeComponent/products/ProductCreate";
 import ProductEdit from "../routeComponent/products/ProductEdit";
 //import ProductDetail from "../routeComponent/products/ProductDetail";
 //import ProductFeed from "../routeComponent/products/ProductFeed";
 import ProductDelete from "../routeComponent/products/ProductDelete";



function App() {

/* const [loggedInUser, setLoggedInUser] = useState({
  user: {},
  token: "",
});

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
  setLoggedInUser({...storedUser});
}, []);

const handleLoginSubmit = (data) => {
 setLoggedInUser({token: data.token, user: {...data.user}}); 
};

const handleLogout = () => {
  setLoggedInUser({user: {}, token: ""});
}; */

  return (
    <div>
    <BrowserRouter>
      <Navbar />
      
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile-edit" component={ProfileEdit} />

        <Route exact path="/product/new" component={ProductCreate} />
        <Route exact path="/product/edit" component={ProductEdit} />
        <Route exact path="/product/delete" component={ProductDelete} />

        
        

      <Footer />
    </BrowserRouter>
  </div>
  )}

export default App;


{/* <Route exact path="/product/new/:userId" component={ProductCreate} />
        <Route exact path="/product/edit/:id" component={ProductEdit} />
        <Route exact path="/product/delete/:id" component={ProductDelete} /> */}
