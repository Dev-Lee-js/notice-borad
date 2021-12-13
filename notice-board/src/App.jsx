import React from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import './App.css';

function App() {
  return (    
    <>
      <Header />      
         <BrowserRouter> 
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={RegisterPage}/>
          </Switch>
        </BrowserRouter>         
      <Footer />
    </>
  );
}

export default App;
