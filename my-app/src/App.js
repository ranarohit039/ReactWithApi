/* eslint-disable no-unused-vars */
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DetailsComponent from './Components/DetailsComponent';
import HomeComponent from './Components/HomeComponent';
import Create from './Components/Create';
function App() {
  return (
    <div ><header>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Details">Edit</Link>
          </li>
          <li>
            <Link to="/Create">Register</Link>
          </li>
         
        </ul>
        <Switch>

        <Route path="/Details/:id" render={(props)=>(<DetailsComponent{...props} />)}>
          
        </Route>
        <Route exact path="/">
          <HomeComponent/>
        </Route>
        <Route path="/Create">
          <Create />
        </Route>
        </Switch>

      </Router>
      </header>
    </div>
  );
}

export default App;
