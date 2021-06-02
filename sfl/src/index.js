import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import Header from "./Header";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

