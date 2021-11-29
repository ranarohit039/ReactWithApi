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
import { Nav,Navbar,Container } from 'react-bootstrap';

function App() {
  return (
  
    <div ><header>
      <Router>
      <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">React Api</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#features"><Link to="/Details">Edit</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/Create">Register</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>

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
