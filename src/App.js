// General imports
import React, { useState } from 'react';

// Component imports
import Navigation from './components/Navigation';

// Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

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
          { name: "Daniel Johansen", title: "Frontend Developer", age: 23, id: 0 },
          { name: "Svein Axelsson", title: "Machine Learner", age: 53, id: 1 },
          { name: "James Heatfield", title: "Sound Design", age: 40, id: 2 }
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
          { name: "Daniel Johansen", title: "Frontend Developer", age: 23, id: 0 },
          { name: "Svein Axelsson", title: "Machine Learner", age: 53, id: 1 },
          { name: "James Heatfield", title: "Sound Design", age: 40, id: 2 }
        ]
      }
    ]
  );

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleRemoveProject = (projectToRemove) => {
    setProjects(projects.filter(project => project.id !== projectToRemove));
  };

  const [employees, setEmployees] = useState(
    [
        { name: "Daniel Johansen", title: "Frontend Developer", age: 23, id: 0 },
        { name: "Svein Axelsson", title: "Machine Learner", age: 53, id: 1 },
        { name: "James Heatfield", title: "Sound Design", age: 40, id: 2 },
        { name: "Mary Garfield", title: "Interactive Designer", age: 33, id: 3 },
        { name: "Mike Hunt", title: "Product Designer", age: 69, id: 4 },
    ]
  );

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const handleRemoveEmployee = (employeeToRemove) => {
    setEmployees(employees.filter(employee => employee.id !== employeeToRemove));
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
      />
    </div>
  );
}

export default App;
