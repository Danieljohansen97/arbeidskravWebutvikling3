// General imports
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


// Component imports
import Navigation from './components/Navigation';

// Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// Images
import pb1 from './assets/img/pb1.jpg';
import pb2 from './assets/img/pb2.jpg';
import pb3 from './assets/img/pb3.jpg';
import pb4 from './assets/img/pb4.png';
import pb5 from './assets/img/pb5.png';

// Bootstrap imports

function App() {

  // Global State and dummy data
  const [projects, setProjects] = useState(
    [
      {
        id: 0,
        customer: "Eventia",
        projectName: "Eventia Shop",
        shortDescription: "An online store for Eventias products.",
        status: "Complete",
        signed: "19.03.2020",
        participants: [
          { name: "Mary Garfield", title: "Interactive Designer", age: 33, id: 3, imgUrl: pb2 },
          { name: "Svein Axelsson", title: "Machine Learner", age: 53, id: 1, imgUrl: pb3 },
          { name: "Mike Hunt", title: "Product Designer", age: 69, id: 4, imgUrl: pb5 }
        ]
      },
      {
        id: 1,
        customer: "John & CO",
        projectName: "Job Portal",
        shortDescription: "A portal for customers to hire lawyers.",
        status: "Ongoing",
        signed: "02.07.2019",
        participants: [
          { name: "Daniel Johansen", title: "Frontend Developer", age: 23, id: 0, imgUrl: pb4 },
          { name: "Svein Axelsson", title: "Machine Learner", age: 53, id: 1, imgUrl: pb3 },
          { name: "James Heatfield", title: "Sound Design", age: 40, id: 2, imgUrl: pb1 }
        ]
      }
    ]
  );
  
  const [employees, setEmployees] = useState(
    [
      { name: "Daniel Johansen", title: "Frontend Developer", age: 23, id: uuidv4(), imgUrl: pb4 },
      { name: "Svein Axelsson", title: "Machine Learner", age: 53, id: uuidv4(), imgUrl: pb3 },
      { name: "James Heatfield", title: "Sound Design", age: 40, id: uuidv4(), imgUrl: pb1 },
      { name: "Mary Garfield", title: "Interactive Designer", age: 33, id: uuidv4(), imgUrl: pb2 },
      { name: "Mike Hunt", title: "Product Designer", age: 69, id: uuidv4(), imgUrl: pb5 },
    ]
  );
  
  const [customers, setCustomers] = useState(
    [
      { name: "Eventia", description: "Eventia sells different products on public events and happenings around the world.", id: 0 },
      { name: "John & CO", description: "A law firm stationed in Texas US.", id: 1 },
      { name: "Twutter AS", description: "They are the owners of the very popular social media application Twutter.", id: 2 },
    ]
  );

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };
  
  const handleAddCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  const handleRemoveProject = (projectToRemove) => {
    setProjects(projects.filter(project => project.id !== projectToRemove));
  };

  const handleRemoveEmployee = (employeeToRemove) => {
    setEmployees(employees.filter(employee => employee.id !== employeeToRemove));
  };

  const handleRemoveCustomer = (customerToRemove) => {
    setCustomers(customers.filter(customer => customer.id !== customerToRemove));
  };

  return (
    <div className="App">
      <Navigation
        handleAddProject={handleAddProject}
        handleRemoveProject={handleRemoveProject}
        projects={projects}
        handleAddEmployee={handleAddEmployee}
        handleRemoveEmployee={handleRemoveEmployee}
        employees={employees}
        customers={customers}
        handleAddCustomer={handleAddCustomer}
        handleRemoveCustomer={handleRemoveCustomer}
      />
    </div>
  );
}

export default App;
