
import React,{useState , useEffect} from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Contact from './components/Contact';
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import "assets/css/material-dashboard-react.css?v=1.8.0";
import Dashboard from "views/Dashboard/Dashboard";
import Typography from "views/Typography/Typography";
import TypographyBranches from "./views/Typography/TypographyBranches"




const hist = createBrowserHistory();




ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={()=>{return <Admin  />}} />
      <Route path="/admin/logs" component={()=>{return <Contact/> }} />
      <Route path="/admin/typography" component={()=>{return <Typography  /> }} />
      <Route path="/admin/typography-branches" component={()=>{return <TypographyBranches  /> }} />
      {/* <Route path="/admin/stations" component={()=>{return <Contact/> }} /> */}
      {/* <Route path="/rtl" component={RTL} /> */}
      <Redirect from="/" to="/admin/dashboard" component={()=>{return <Dashboard  />}} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
