import React from 'react';
import { Form } from 'react-bootstrap';

/**
* @author
* @function Input
**/

const Input = (props) => {
    return (
        <Form.Group controlId={`formBasic${props.field}`}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                onChange={props.onChange}
            />
            <Form.Text className="text-muted">
                {props.errorMsg}
            </Form.Text>
        </Form.Group>
    );
}

export default Input;