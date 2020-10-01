import React, { useState } from 'react';
import CustomerItem from '../items/CustomerItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { v4 as uuidv4 } from 'uuid';

const Customers = ({ customers, handleAddCustomer, handleRemoveCustomer }) => {

    // State variables
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialInputState = { name: "", description: "", }
    const [newCustomer, setNewCustomer] = useState(initialInputState);
    const { name, description } = newCustomer;

    const handleInputChange = e => {
        setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
    }

    const handleFinalSubmit = e => {
        addCustomerAndCloseModal(setNewCustomer, newCustomer, handleAddCustomer, handleClose);
    }

    function getCustomers() {
        return mapCustomersAndReturnItem(customers, handleRemoveCustomer);
    }

    return (
        <>
            <Row>
                <Col>
                    {/* Button for triggering the modal */}
                    <Button variant="primary" size="lg" className="mb-2" onClick={handleShow} block>Add Customer</Button>
                </Col>
            </Row>
            <Row>
                {/* This is what's rendering the employees */}
                {getCustomers()}
            </Row>

            {/* Modal for adding new employees */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form-Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Customers name" name="name" value={name} onChange={handleInputChange}></Form.Control>
                            <Form.Text className="text-muted">Enter name of customer.</Form.Text>
                        </Form-Group>
                        <Form-Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description of customer" name="description" value={description} onChange={handleInputChange}></Form.Control>
                            <Form.Text className="text-muted">A short description of the customer</Form.Text>
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

export default Customers;

function mapCustomersAndReturnItem(customers, handleRemoveCustomer) {
    return customers.map((customer, i) => {
        return <CustomerItem
            key={`customer-${i}`}
            name={customer.name}
            description={customer.description}
            id={customer.id}
            handleRemoveCustomer={handleRemoveCustomer} />;
    });
}

function addCustomerAndCloseModal(setNewCustomer, newCustomer, handleAddCustomer, handleClose) {
    setNewCustomer({ ...newCustomer, id: uuidv4() });
    handleAddCustomer(newCustomer);
    handleClose();
}
