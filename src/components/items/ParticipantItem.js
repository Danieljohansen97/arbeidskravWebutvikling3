import React from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const ParticipantItem = ({ name, title, id }) => {
    return (
        <Col style={{ maxWidth: "11rem" }}>
            <Card>
                <Card.Img variant="top" src={ require('../../assets/img/2.jpg')}></Card.Img>
                <Card.Body>
                    <Card.Title>{ name }</Card.Title>
                    <Card.Text>
                        { title }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ParticipantItem;