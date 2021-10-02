import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import LoginPage from './Components/Pages/LoginPage';
import './App.css';

export default function App () {

    return(
        <Router>
            <Switch>
                <Route exact path="/">
                <Home />
                </Route>
                <Route path="/login">
                <LoginPage />
                </Route>
            </Switch>
        </Router>
    )
}