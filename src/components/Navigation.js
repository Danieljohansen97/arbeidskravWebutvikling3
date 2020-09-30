import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Component imports
import Employees from './lists/Employees';
import Customers from './lists/Customers';
import Projects from './lists/Projects';

const Navigation = ({
    projects,
    handleAddProject,
    handleRemoveProject, 
    employees, 
    handleAddEmployee, 
    handleRemoveEmployee,
    customers,
    handleAddCustomer,
    handleRemoveCustomer 
}) =>  
     (
        <div>
            <BrowserRouter>
                <nav>       
                    <Navbar bg="dark" expand="lg" variant="dark" sticky="top" className="mb-2">
                        <Navbar.Brand as={ Link } to="/">ProjectManager</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={ Link } to="/">Projects</Nav.Link>
                                <Nav.Link as={ Link } to="/employees">Employees</Nav.Link>
                                <Nav.Link as={ Link } to="/customers">Customers</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </nav>
                <Container bg="dark">
                    <main>
                        <Switch>
                            <Route 
                                exact 
                                path="/" 
                                render={ 
                                    (props) => <Projects
                                        employees={employees} 
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
                            <Route 
                                path="/customers" 
                                render={ 
                                    (props) => <Customers 
                                        handleAddCustomer={handleAddCustomer}
                                        handleRemoveCustomer={handleRemoveCustomer}
                                        customers={customers}
                                        {...props}
                                    /> 
                                } 
                            />
                        </Switch>
                    </main>
                </Container>
            </BrowserRouter>
        </div>
    )


export default Navigation;