import React from "react";
import { Form, Container } from "react-bootstrap";

function AddTrainee() {
    return (
        <Container>
            <Form>
                <Form.Control placeholder="enter a name "></Form.Control>
                <Form.Control placeholder="enter a position "></Form.Control>
                <Form.Control placeholder="enter a email "></Form.Control>
                <Form.Control placeholder="enter a dob "></Form.Control>
                <Form.Control placeholder="enter a city "></Form.Control>

            </Form>
      </Container>
    )
}

export default AddTrainee;
