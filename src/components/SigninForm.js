import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  useUserData,
  saveUserDataInLocalStorage,
} from "../contexts/UserDataContext";

export default function SigninForm() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  //const [, setUserData] = useUserData();

  function submitLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    const url = "http://localhost:5000/";
    const body = { email, password };

    axios
      .post(url, body)
      .then((res) => {
        //setUserData(res.data);
        saveUserDataInLocalStorage(res.data);
        console.log(res.data);
        setIsLoading(false);
        navigate("/balance");
      })
      .catch((err) => {
        alert(err.response.statusText);
        setIsLoading(false);
      });
  }

  return (
    <>
      <Container onSubmit={submitLogin}>
        <input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit">Entrar</button>
      </Container>
    </>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;

  input {
    width: 100%;
    height: 48px;
    background-color: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 12px;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    ::placeholder {
      color: #dbdbdb;
      font-size: 15px;
    }
    margin-bottom: 7px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 46px;
    background-color: #ef1c1c;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    color: #ffffff;
  }
`;
