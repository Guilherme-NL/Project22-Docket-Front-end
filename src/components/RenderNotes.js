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
  overflow-y: scroll;
`;

const Note = styled.div`
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
  h3 {
    font-size: 10px;
    margin-bottom: 5px;
  }

  p {
    font-size: 8px;
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
    font-size: 15px;
  }

  button {
    font-size: 10px;
    color: crimson;
    background: none;
    border: none;
  }
`;
