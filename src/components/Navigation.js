import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Component imports
import Home from './Home';
import { About } from './About';
import Employees from './lists/Employees';
import CustomerList from './lists/CustomerList';
import Projects from './lists/Projects';

const Navigation = ({
    projects,
    handleAddProject,
    handleRemoveProject, 
    employees, 
    handleAddEmployee, 
    handleRemoveEmployee 
}) =>  
     (
        <div>
            <BrowserRouter>
                <Navbar bg="dark" expand="lg" variant="dark" sticky="top" className="mb-2">
                    <Navbar.Brand as={ Link } to="/">ProjectManager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={ Link } to="/">Home</Nav.Link>
                            <Nav.Link as={ Link } to="/projects">Projects</Nav.Link>
                            <Nav.Link as={ Link } to="/employees">Employees</Nav.Link>
                            <Nav.Link as={ Link } to="/customers">Customers</Nav.Link>
                            <Nav.Link as={ Link } to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container bg="dark">
                    <main>
                        <Switch>
                            <Route exact path="/" component={ Home }></Route>
                            <Route 
                                path="/projects" 
                                render={ 
                                    (props) => <Projects 
                                        handleAddProject={handleAddProject}
                                        handleRemoveProject={handleRemoveProject}
                                        projects={projects}
                                        {...props}
                                    /> 
                                } 
                            />
                            <Route 
                                path="/employees" 
                                render={
                                    (props) => <Employees
                                        handleAddEmployee={handleAddEmployee} 
                                        handleRemoveEmployee={handleRemoveEmployee} 
                                        employees={employees} 
                                        {...props} 
                                    /> 
                                } 
                            />
                            <Route path="/customers" component={ CustomerList }></Route>
                            <Route path="/about" component={ About }></Route>
                        </Switch>
                    </main>
                </Container>
            </BrowserRouter>
        </div>
    )


export default Navigation;