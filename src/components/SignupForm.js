import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignupForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [image, setImage] = React.useState("");

  function submitRegistration(e) {
    e.preventDefault();
    setIsLoading(true);

    const url = `${process.env.REACT_APP_URL} + signup`;
    const body = { name, email, image, password };

    axios
      .post(url, body)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao cadastrar o usuário");
        setIsLoading(false);
        navigate("/registration");
      });
  }

  return (
    <Container onSubmit={submitRegistration}>
      <input
        type="name"
        placeholder="Nome"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
      />
      <input
        type="email"
        placeholder="E-mail"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <input
        type="url"
        placeholder="Imagem"
        required
        value={image}
        onChange={(e) => setImage(e.target.value)}
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
      <button type="submit">Cadastrar</button>
    </Container>
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
