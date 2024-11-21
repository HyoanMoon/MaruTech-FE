import React from "react";
import { Form, Button } from "react-bootstrap";
import "../../styles/login.css";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    console.log("Form submitted!");
  };

  return (
    <section id="login">
      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group controlId="formEmail" className="form-group">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formPassword" className="form-group">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Sign in
        </Button>

        <div className="mt-3">
          <a href="#home">Don't have an account? Create an account</a>
        </div>
      </Form>
    </section>
  );
};

export default Login;
