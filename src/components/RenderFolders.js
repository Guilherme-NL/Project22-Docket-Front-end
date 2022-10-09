import styled from "styled-components";
import { MdOutlineNoteAdd, MdFolderOpen } from "react-icons/md";
import { FiFolderMinus } from "react-icons/fi";
import RenderNotes from "./RenderNotes";

export default function RenderFolders({
  folders,
  setActiveFolder,
  activeFolder,
  onDeleteFolder,
  onAddNote,
  notes,
  onDeleteNote,
  activeNote,
  setActiveNote,
  getNotes,
}) {
  return (
    <Container>
      {folders.map((folder) => (
        <FolderContainer onClick={() => getNotes(folder.id)}>
          <Folder
            onClick={() => setActiveFolder(folder.id)}
            className={folder.id === activeFolder ? "active" : null}
          >
            <FolderTitle>
              <MdFolderOpen />
              <div>{folder.name}</div>
            </FolderTitle>
            <div>
              <MdOutlineNoteAdd onClick={() => onAddNote(folder.id)} />
              <FiFolderMinus onClick={() => onDeleteFolder(folder.id)} />
            </div>
          </Folder>
          {folder.id === activeFolder ? (
            <RenderNotes
              notes={notes}
              onDeleteNote={onDeleteNote}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
            />
          ) : null}
        </FolderContainer>
      ))}
    </Container>
  );
}

const FolderContainer = styled.div``;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  div {
    font-size: 15px;
    font-weight: bold;
    margin-left: 3px;
    word-break: break-all;
  }
`;

const FolderTitle = styled.div`
  display: flex;
  align-items: center;
`;

const Folder = styled.div`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  cursor: pointer;
  &:hover {
    background: #ddd;
  }

  background: ${(props) => (props.className === "active" ? "#08c" : "none")};
  color: ${(props) => (props.className === "active" ? "white" : "none")};
`;
