import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUserData } from "../contexts/UserDataContext";

export default function NotesForm() {
  const navigate = useNavigate();
  const [{ token }] = useUserData();

  const [isLoading, setIsLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState("");

  function submitRegistration(e) {
    e.preventDefault();
    setIsLoading(true);

    const url = `${process.env.REACT_APP_BACK_END_URL}add/notes`;
    const body = { title, description, date, time };
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(url, body, auth)
      .then(() => {
        setIsLoading(false);
        setTitle("");
        setDescription("");
        setTime("");
        setDate("");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao cadastrar nova note");
        setIsLoading(false);
      });
  }

  return (
    <Container onSubmit={submitRegistration}>
      <input
        type="text"
        placeholder="Título"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isLoading}
        autoFocus
      />
      <textarea
        type="text"
        placeholder="Escreva sua nota aqui..."
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={isLoading}
      />
      <input
        type="text"
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
        placeholder="mm/dd/yyyy"
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
        disabled={isLoading}
      />
      <input
        type="text"
        onFocus={(e) => (e.target.type = "time")}
        onBlur={(e) => (e.target.type = "text")}
        placeholder="--:--"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        disabled={isLoading}
      />
      <button type="submit">Cadastrar</button>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  height: auto;
  margin-top: 60px;
  padding: 20px 10px;

  textarea {
    width: 100%;
    height: 140px;
    background-color: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 12px;
    font-size: 15px;
    font-family: "Raleway", sans-serif;
    ::placeholder {
      color: #dbdbdb;
      font-size: 15px;
    }
    margin-bottom: 15px;
  }

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
    margin-bottom: 15px;
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
