import styled from "styled-components";
import { Link } from "react-router-dom";

import SignupForm from "./SignupForm";
import background from "../images/LoginAndSignup/marissa-grootes-ck0i9Dnjtj0-unsplash.jpg";
import Google from "./GoogleLogin";

export default function Signup() {
  return (
    <Container>
      <SignupBox>
        <h1>Docket</h1>
        <SignupForm />
        <Margin />
        <Google />
      </SignupBox>
      <GoInBox>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div>
            Já tem uma conta? <span>Entre agora</span>
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

  @media (max-width: 600px) {
    width: 250px;
    padding: 15px 30px;

    h1 {
      font-size: 30px;
      margin-bottom: 15px;
    }
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

  @media (max-width: 600px) {
    width: 250px;
    padding: 15px 30px;
    margin-top: 30px;

    div {
      font-size: 12px;
    }
  }
`;

const Margin = styled.div`
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
