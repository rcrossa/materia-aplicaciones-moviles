import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Nav,Navbar,NavLink} from 'react-bootstrap';

class Menu extends React.Component{
    
        
    
    
    render(){

      function Home() {
        return (
          <Navbar bg="light" variant="light">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
           </Nav>
        </Navbar>
        );
      }
      
      function About() {
        return (          
            <Navbar bg="light" variant="light">
              <Nav className="mr-auto">
              <Nav.Link href="#home">About</Nav.Link>
               </Nav>
            </Navbar>
          
        );
      }
      
      function Dashboard() {
        return (
          <Navbar bg="light" variant="light">
            <Nav className="mr-auto">
               <Nav.Link href="#home">Dashboard</Nav.Link>
            </Nav>
        </Navbar>
        );
      }
      

        return(
        <Router>
          <div>
            <ul>
              <li>
                <Link className="Inicio" to="/">Home</Link>
              </li>
              <li>
                <Link className="Acercadenosotros" to="/about">About</Link>
              </li>
              <li>
                <Link className="Panel" to="/dashboard">Dashboard</Link>
              </li>
            </ul>
    
            <hr />
    
            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
            
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
          </div>
        </Router>
      );
    }
  }

export default Menu;