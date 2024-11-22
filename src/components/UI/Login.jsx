import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 임포트
import { Link } from "react-router-dom"; // Link 컴포넌트 임포트
import "../../styles/login.css";

const Login = () => {
  const navigate = useNavigate(); // navigate 함수 초기화

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    console.log("Form submitted!");
  };

  // 'Create an account' 클릭 시 홈으로 리다이렉트
  const handleRedirectToHome = () => {
    navigate("/"); // '/' 경로로 리다이렉트
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
          {/* Link 컴포넌트를 사용하여 리다이렉트 */}
          <Link to="/home" onClick={handleRedirectToHome}>
            Don't have an account? Create an account
          </Link>
        </div>
      </Form>
    </section>
  );
};

export default Login;
