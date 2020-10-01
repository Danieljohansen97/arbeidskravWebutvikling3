import React, { useState } from 'react';
import EmployeeItem from '../items/EmployeeItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { v4 as uuidv4 } from 'uuid';

import DefaultImage from '../../assets/img/nopb.jpg'

const EmployeeList = ({ employees, handleAddEmployee, handleRemoveEmployee }) => {


    // State variables
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialInputState = { name: "", title: "", age: "", imgUrl: DefaultImage, id: "" };
    const [newEmployee, setNewEmployee] = useState(initialInputState);
    const { name, title, age } = newEmployee;

    const handleInputChange = e => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
    }

    const handleFinalSubmit = () => {
        addEmployeeAndCloseModal(setNewEmployee, newEmployee, handleAddEmployee, handleClose);
    }

    // Get Employees
    function getEmployees() {
        return mapEmployeesAndReturnItems(employees, handleRemoveEmployee);
    }


    return (
        <>
            <Row>
                <Col>
                    {/* Button for triggering the modal */}
                    <Button variant="primary" size="lg" className="mb-2" onClick={handleShow} block>Add Employee</Button>
                </Col>
            </Row>
            <Row>
                {/* This is what's rendering the employees */}
                {getEmployees()}
            </Row>

            {/* Modal for adding new employees */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form-Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Employee Name" name="name" value={name} onChange={handleInputChange}></Form.Control>
                            <Form.Text className="text-muted">Enter Employee's full name</Form.Text>
                        </Form-Group>
                        <Form-Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" name="title" value={title} onChange={handleInputChange}></Form.Control>
                            <Form.Text className="text-muted">What title does the employee have? (e.g: Developer)</Form.Text>
                        </Form-Group>
                        <Form-Group>
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Age" name="age" value={age} onChange={handleInputChange}></Form.Control>
                            <Form.Text className="text-muted">How old is the employee?</Form.Text>
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

export default EmployeeList;

function mapEmployeesAndReturnItems(employees, handleRemoveEmployee) {
    return employees.map((employee, i) => {
        return <EmployeeItem
            key={`employee-${i}`}
            name={employee.name}
            title={employee.title}
            age={employee.age}
            imgUrl={employee.imgUrl}
            id={employee.id}
            handleRemoveEmployee={handleRemoveEmployee} />;
    });
}

function addEmployeeAndCloseModal(setNewEmployee, newEmployee, handleAddEmployee, handleClose) {
    setNewEmployee({ ...newEmployee, id: uuidv4() });
    handleAddEmployee(newEmployee);
    handleClose();
}

