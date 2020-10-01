import React, { useState } from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import ParticipantItem from './ParticipantItem';

export default function ProjectItem({
    customer,
    projectName,
    shortDescription,
    status,
    signed,
    id,
    participants,
    handleRemoveProject,
    employees
}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteClick = () => {
        deleteProjectAndCloseModal(handleRemoveProject, id, handleClose);
    };

    function getParticipants() {
        return mapParticipantsAndReturnItem(participants, employees)
    }

    return (
        <>
            <Col sm={12} md={12} lg={6} xl={4} className="mb-2">
                <Card className="text-center" onClick={handleShow}>
                    <Card.Header>{customer}</Card.Header>
                    <Card.Body>
                        <Card.Title>{projectName}</Card.Title>
                        <Card.Text>
                            {shortDescription}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Card.Text>{status}</Card.Text>
                        <Card.Text>{signed}</Card.Text>
                    </Card.Footer>
                </Card>
            </Col>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{projectName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup className="text-center">
                        <ListGroup.Item>
                            {shortDescription}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {signed}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {status}
                        </ListGroup.Item>
                        <Container>
                            <Row>
                                {getParticipants()}
                            </Row>
                        </Container>
                    </ListGroup>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" onClick={handleDeleteClick}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

function mapParticipantsAndReturnItem(participants, employees) {
    return participants.map((participant, i) => {
        return <ParticipantItem
            key={`participant-${i}`}
            name={participant.name}
            title={participant.title}
            imgUrl={participant.imgUrl}
            id={participant.id}
            employees={employees} />;
    });
}

function deleteProjectAndCloseModal(handleRemoveProject, id, handleClose) {
    handleRemoveProject(id);
    handleClose();
}

