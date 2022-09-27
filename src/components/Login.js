import { Link } from "react-router-dom";
import styled from "styled-components";

import LoginForm from "./LoginForm";
import background from "../images/LoginAndSignup/marissa-grootes-ck0i9Dnjtj0-unsplash.jpg";

export default function Login() {
  return (
    <Container>
      <SignupBox>
        <h1>Docket</h1>
        <LoginForm />
      </SignupBox>
      <GoInBox>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <div>
            Primeira vez? <span>Cadastre-se</span>
          </div>
        </Link>
      </GoInBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background-color: #f9fafc;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`;

const SignupBox = styled.div`
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
  width: 400px;
  padding: 25px 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 50px;
    color: #ef1c1c;
    font-family: "Cabin Sketch", cursive;
    font-weight: bold;
    margin-bottom: 25px;
  }
`;

const GoInBox = styled.div`
  margin-top: 50px;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
  width: 400px;
  padding: 25px 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    font-size: 15px;
    color: #000000;
  }

  span {
    color: #ef1c1c;
  }
`;
