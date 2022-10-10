import React from "react";
import styled from "styled-components";

export default function RenderNotes({
  notes,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  return (
    <Notes>
      {notes.map((note) => (
        <Note
          onClick={() => setActiveNote(note.id)}
          className={note.id === activeNote ? "active" : null}
        >
          <NoteHeader>
            <h2>{note.title}</h2>
            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
          </NoteHeader>
          <h3>{note.description && note.description.substr(0, 20) + "..."}</h3>
          <p>
            {note.date}, {note.time}
          </p>
        </Note>
      ))}
    </Notes>
  );
}

const Notes = styled.div`
  height: 100%;
  margin-left: 20px;
`;

const Note = styled.div`
  box-sizing: border-box;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
  h3 {
    font-size: 15px;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 10px;
    }
    p {
      font-size: 8px;
    }
  }

  background: ${(props) => (props.className === "active" ? "#08c" : "none")};
  color: ${(props) => (props.className === "active" ? "white" : "none")};
`;

const NoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h2 {
    font-size: 17px;
  }

  button {
    font-size: 14px;
    color: crimson;
    background: none;
    border: none;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 12px;
    }
    button {
      font-size: 10px;
    }
  }
`;
