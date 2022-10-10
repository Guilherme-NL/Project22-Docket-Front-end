import React from "react";
import styled from "styled-components";

export default function NotesForm({
  activeNote,
  onEditNote,
  onUpdateNote,
  isLoading,
}) {
  const onEditField = (key, value) => {
    onEditNote({
      ...activeNote,
      [key]: value,
    });
  };

  if (!activeNote) return <NoNotes>No note selected</NoNotes>;

  return (
    <Container onSubmit={onUpdateNote}>
      <input
        type="text"
        placeholder="Título"
        required
        value={activeNote.title}
        onChange={(e) => onEditField("title", e.target.value)}
        disabled={isLoading}
        autoFocus
      />
      <textarea
        type="text"
        placeholder="Escreva sua nota aqui..."
        required
        value={activeNote.description}
        onChange={(e) => onEditField("description", e.target.value)}
        disabled={isLoading}
      />
      <input
        type="text"
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
        placeholder="mm/dd/yyyy"
        value={activeNote.date}
        onChange={(e) => onEditField("date", e.target.value)}
        disabled={isLoading}
      />
      <input
        type="text"
        onFocus={(e) => (e.target.type = "time")}
        onBlur={(e) => (e.target.type = "text")}
        placeholder="--:--"
        value={activeNote.time}
        onChange={(e) => onEditField("time", e.target.value)}
        disabled={isLoading}
      />
      <button type="submit">Atualizar Campos</button>
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

  @media (max-width: 600px) {
    input {
      height: 30px;
      padding: 5px;
      font-size: 12px;
      ::placeholder {
        font-size: 12px;
      }
    }
    textarea {
      padding: 5px;
      font-size: 10px;
      ::placeholder {
        font-size: 10px;
      }
    }
    button {
      height: 30px;
      font-size: 12px;
    }
  }
`;

const NoNotes = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  color: gray;
  word-break: break-all;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
