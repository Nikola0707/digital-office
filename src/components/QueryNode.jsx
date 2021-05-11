import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const QueryNode = () => {

    const queryNodeBy = (e) => {

        e.preventDefault()
    }

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Query text</Form.Label>
                <Form.Control type="text" placeholder="Enter document query text" />
                <Form.Text className="text-muted">
                    You can use documnet name or document metadata like query text.
         </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default QueryNode;