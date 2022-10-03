import styled from "styled-components";
import { AiFillFolderOpen, AiOutlineFolderAdd } from "react-icons/ai";

export default function SideBar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  return (
    <Container>
      <Header>
        <h1>Notas</h1>
        <AiOutlineFolderAdd onClick={onAddNote} />
      </Header>
      <Margin />
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
            <h3>{note.body && note.body.substr(0, 100) + "..."}</h3>
            <p>
              {note.date}, {note.hour}
            </p>
          </Note>
        ))}
      </Notes>
    </Container>
  );
}

const Container = styled.div`
  width: 30%;
  height: 100%;
  margin-top: 50px;
  padding: 20px 10px;

  h1 {
    font-size: 20px;
    font-weight: bold;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

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

const Margin = styled.div`
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;
