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
import Cart from "../components/cart/Cart";
import ThankYou from "../components/ThankYou";



import ProductCreate from "../routeComponent/products/ProductCreate";
import ProductEdit from "../routeComponent/products/ProductEdit";
import ProductDetail from "../routeComponent/products/ProductDetail";
import ProductFeed from "../routeComponent/products/ProductFeed";
import ProductDelete from "../routeComponent/products/ProductDelete";




const testeString1 = "batatinha restrita";
const testeString2 = "batatinha publica";


function App() {
  const [products, setProducts] = useState([]);
  
const [data, setData] = useState({});
const [q, setQ] = useState("")

useEffect(() => {
  fetch(products)
  .then((json) => setData(json))
}, [])




const [loggedInUser, setLoggedInUser] = useState({});

const [profile, setProfile] = useState({
  name: "",
  email: "",
  aboutMe: "",
  attachment: "",
  attachmentUrl: "",
  facebook: "",
  instagram: "",
  twitter: "",
  youtube: "",
});


console.log("aqqqqqqqqqqqquuuuuuuuuiiiiiiiii!!!!!!",products)
useEffect(() => {
  console.log(profile)
  const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
  setLoggedInUser({...storedUser.user});
}, []);



const [checkout, setCheckout] = useState([])


useEffect(() => {
  console.log(checkout)
}, [checkout])


const handleLogout = () => {
  setLoggedInUser({user: {}, token: ""});
};

  return (
    <div>
    <BrowserRouter>
    <Navbar user={loggedInUser} />
      {loggedInUser._id ? (
            <Switch>            
               <PrivateRoute exact path="/logout" component={Logout} user={loggedInUser} setUser={setLoggedInUser} handleLogout={handleLogout}/>
       <PrivateRoute
            exact
            path="/profile"
            component={Profile}
            user={loggedInUser}
            profileState={profile}
            testeString2={testeString2}
            setProfile={setProfile}
            productsState={products}
            setProducts={setProducts}
          />    
      <PrivateRoute
            path="/profile/edit"
            exact
            component={ProfileEdit}
            user={loggedInUser}
            profileState={profile}
            setProfile={setProfile}
          />
      <PrivateRoute
            path="/profile/delete/:id"
            exact
            component={ProfileDelete}
            user={loggedInUser}
            setUser={setLoggedInUser} 
          />                
      <PrivateRoute
            path="/product/new/:userId"
            exact
            component={ProductCreate}
            user={loggedInUser}
          />  
      <PrivateRoute
            exact
            path="/product/edit/:id"
            component={ProductEdit}
            user={loggedInUser}
            productsState={products}
            setProducts={setProducts}
          />
      <PrivateRoute
            exact
            path="/product/delete/:id"
            component={ProductDelete}
            user={loggedInUser}
          />          
              <Route exact path="/" component={Homepage} />

              
              <Route 
               exact path="/product/:id"
               render={(props) => {
                return (
                  <ProductDetail
                    {...props}
                    setLoggedInUser={setLoggedInUser}
                    checkout={checkout} 
                    setCheckout={setCheckout}
                  />
                );
              }}
                />
              <Route 
                  exact path="/cart"
                  render={(props) => {
                    return (
                      <Cart
                        {...props}
                        checkout={checkout} 
                        setCheckout={setCheckout}
                      />
                    );
                  }}
              />
             <Route exact path="/thankYou" component={ThankYou} />

              <Route exact path="/product/all"         
              render={(props) => {
                  return (
                    <ProductFeed
                    productsState={products} 
                    setProducts={setProducts}
                      {...props}
                      
                    />
                  );
                }} />
              

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
                      setLoggedInUser={setLoggedInUser}
                    />
                  );
                }}
              />
              <Route exact path="/" component={Homepage} />

              
              <Route exact path="/product/all"  component={ProductFeed} />
              <Route 
                exact path="/product/:id"  
                render={(props) => {
                  return (
                    <ProductDetail
                      {...props}
                      setLoggedInUser={setLoggedInUser}
                      checkout={checkout} 
                      setCheckout={setCheckout}
                    />
                  );
                }}
              /> 

              <Route exact path="/signup" component={SignupForm} />
              
                <Route 
                  exact path="/cart"
                  render={(props) => {
                    return (
                      <Cart
                        {...props}
                        checkout={checkout} 
                        setCheckout={setCheckout}
                      />
                    );
                  }}
              />
              <Route exact path="/thankYou" component={ThankYou} />

              
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