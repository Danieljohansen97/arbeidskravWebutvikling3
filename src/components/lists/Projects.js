import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { v4 as uuidv4 } from 'uuid';

import ProjectItem from '../items/ProjectItem';

const Projects = ({ projects, handleAddProject, handleRemoveProject }) => {

    // State variables
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialInputState = { customer: "", projectName: "", shortDescription: "", status: "Not Started", signed: "", participants: [] };
    const [newProject, setNewProject] = useState(initialInputState);
    const { customer, projectName, shortDescription, status, signed } = newProject;

    const handleInputChange = e => {
        setNewProject({ ...newProject, [e.target.name]: e.target.value });
    }

    const handleFinalSubmit = () => {
        addProjectAndCloseModal(setNewProject, newProject, handleAddProject, handleClose);
    }

    // Get Projects
    function getProjects() {
        return mapProjectsAndReturnItems(projects, handleRemoveProject);
    }

    return (
        <>
            <Row>
                <Col>
                    {/* Button for triggering the modal */}
                    <Button variant="primary" size="lg" className="mb-2" onClick={handleShow} block>Add Project</Button>
                </Col>
            </Row>
            <Row>
                {/* This renders the projects */}
                {getProjects()}
            </Row>

            {/* Modal for adding new projects */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form-Group>
                            <Form.Label>Customer</Form.Label>
                            <Form.Control type="text" placeholder="Customer" name="customer" value={customer} onChange={handleInputChange}></Form.Control>
                            <Form.Text className="text-muted">What is the name of the project?</Form.Text>
                        </Form-Group>
                        <Form-Group>
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control type="text" placeholder="Project Name" name="projectName" value={projectName} onChange={handleInputChange}></Form.Control>
                            <Form.Text className="text-muted">What is the name of the project?</Form.Text>
                        </Form-Group>
                        <Form-Group>
                            <Form.Label>Short Description</Form.Label>
                            <Form.Control type="text" placeholder="Short Description" name="shortDescription" value={shortDescription} onChange={handleInputChange}></Form.Control>
                            <Form.Text className="text-muted">What title does the employee have? (e.g: Developer)</Form.Text>
                        </Form-Group>
                        <Form-Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select" type="radio" name="status" value={status} onChange={handleInputChange}>
                                <option>Not Started</option>
                                <option>Ongoing</option>
                                <option>Complete</option>
                            </Form.Control>
                        </Form-Group>
                        <Form-Group>
                            <Form.Label>Signed Date</Form.Label>
                            <Form.Control type="date" name="signed" value={signed} onChange={handleInputChange}></Form.Control>
                            <Form.Text className="text-muted">When was the contract for this project signed?</Form.Text>
                        </Form-Group>
                        <Button onClick={handleFinalSubmit}>Save</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Projects;

function mapProjectsAndReturnItems(projects, handleRemoveProject) {
    return projects.map((project, i) => {
        return <ProjectItem
            key={`project-${i}`}
            customer={project.customer}
            projectName={project.projectName}
            shortDescription={project.shortDescription}
            status={project.status}
            signed={project.signed}
            id={project.id}
            participants={project.participants}
            handleRemoveProject={handleRemoveProject} />;
    });
}

function addProjectAndCloseModal(setNewProject, newProject, handleAddProject, handleClose) {
    setNewProject({ ...newProject, id: uuidv4() });
    handleAddProject(newProject);
    handleClose();
}
