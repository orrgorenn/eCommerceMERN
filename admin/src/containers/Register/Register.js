import React from 'react';
import Layout from '../../components/Layout/Layout';
import Input from '../../components/UI/Input/Input';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

/**
* @author
* @function Register
**/

const Register = (props) => {
  return(
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{span: 6, offset: 3}}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    field="FirstName"
                    label="First Name"
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                      field="LastName"
                      label="Last Name"
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      value=""
                      onChange={() => {}}
                  />
                </Col>
              </Row>

              <Input
                field="Username"
                label="Username"
                type="text"
                placeholder="Username"
                name="username"
                value=""
                onChange={() => {}}
              />

              <Input
                field="Email"
                label="Email"
                type="email"
                placeholder="Email"
                name="email"
                value=""
                errorMsg="We'll never share your email with anyone else."
                onChange={() => {}}
              />

              <Input
                field="Password"
                label="Password"
                type="password"
                placeholder="Password"
                name="password"
                value=""
                onChange={() => {}}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Register;