import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

const EmployeeItem = ({ name, title, age, id, imgUrl, handleRemoveEmployee }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteClick = e => {
        handleRemoveEmployee(id);
        handleClose();
    };

    return (
        <>
            <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } className="mb-2">
                <article>
                    <Card>
                        <Card.Img variant="top" src={ imgUrl }></Card.Img>
                        <Card.Body>
                            <Card.Title>{ name }</Card.Title>
                            <Card.Text>{ title }</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center" onClick={ handleShow }>
                            <Card.Link href="#">More info</Card.Link>
                        </Card.Footer>
                    </Card>
                </article>
            </Col>

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>{ name }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Title: { title }</p>
                    <p>Age: { age }</p>
                    <Image src={ imgUrl } fluid />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>Close</Button>
                    <Button variant="danger" onClick={ handleDeleteClick }>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EmployeeItem;