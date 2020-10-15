import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "../assets/styles/style.css";


import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";
import PrivateRoute from "../routeComponent/auth/PrivateRoute";

import LoginForm from "../routeComponent/auth/LoginForm";
import SignupForm from "../routeComponent/auth/SignupForm";
import Logout from "../routeComponent/auth/Logout";
import Profile from "../routeComponent/profile/Profile";
import ProfileEdit from "../routeComponent/profile/ProfileEdit";
import ProfileDelete from "../routeComponent/profile/ProfileDelete";

 import ProductCreate from "../routeComponent/products/ProductCreate";
 import ProductEdit from "../routeComponent/products/ProductEdit";
 import ProductDetail from "../routeComponent/products/ProductDetail";
 import ProductFeed from "../routeComponent/products/ProductFeed";
 import ProductDelete from "../routeComponent/products/ProductDelete";



function App() {

const [loggedInUser, setLoggedInUser] = useState({
  user: {},
  token: "",
});

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
  setLoggedInUser({...storedUser.user});
}, []);

const handleLoginSubmit = (data) => {
 setLoggedInUser({token: data.token, user: {...data.user}}); 
};

const handleLogout = () => {
  setLoggedInUser({user: {}, token: ""});
};

  return (
    <div>
    <BrowserRouter>
      <Navbar user={loggedInUser} />
      {loggedInUser._id ? (
            <Switch>
               <PrivateRoute exact path="/logout" component={Logout} user={loggedInUser} handleLogout={handleLogout}/>
       <PrivateRoute
            exact
            path="/profile"
            component={Profile}
            user={loggedInUser}
          />    
      <PrivateRoute
            path="/profile/edit"
            exact
            component={ProfileEdit}
            user={loggedInUser}
          />
      <PrivateRoute
            path="/profile/delete"
            exact
            component={ProfileDelete}
            user={loggedInUser}
          />                
      <PrivateRoute
            path="/product/new/:userId"
            exact
            component={ProductCreate}
            user={loggedInUser}
          />  
      <PrivateRoute
            path="/product/edit/:id"
            component={ProductEdit}
            user={loggedInUser}
          />
      <PrivateRoute
            path="/product/delete/:id"
            component={ProductDelete}
            user={loggedInUser}
          />          
              <Route exact path="/" component={Homepage} />
              <Route exact path="/product/all"  component={ProductFeed} />
              <Route exact path="/product/:id"  component={ProductDetail} /> 
              <Route>
                <Redirect to="/profile" />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route
                exact
                path="/login"
                render={(props) => {
                  return (
                    <LoginForm
                      {...props}
                      setUserState={handleLoginSubmit}
                    />
                  );
                }}
              />
              <Route exact path="/" component={Homepage} />
              <Route exact path="/product/all"  component={ProductFeed} />
              <Route exact path="/product/:id"  component={ProductDetail} /> 
              <Route exact path="/signup" component={SignupForm} />
              <Route>
                <Redirect to="/login" />
              </Route>
            </Switch>
          )}
      <Footer />
    </BrowserRouter>
  </div>
  )}

export default App;


