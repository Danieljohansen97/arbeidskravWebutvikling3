import React from 'react'

import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/Button';

export default function CustomerItem({ name, description, id, handleRemoveCustomer }) {

    const handleDeleteClick = () => {
        handleRemoveCustomer(id);
    }

    return (
        <Col xs={12} sm={6} md={4} lg={3} className="mb-2">
            <article>
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="danger" size="sm" onClick={handleDeleteClick}>Delete</Button>
                    </Card.Footer>
                </Card>
            </article>
        </Col>
    )
}
