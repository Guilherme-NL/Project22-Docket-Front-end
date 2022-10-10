import styled from "styled-components";
import React from "react";
import { AiOutlineFolderAdd } from "react-icons/ai";
import RenderFolders from "./RenderFolders";
import AddFolder from "./AddFolder";
import axios from "axios";
import { useUserData } from "../contexts/UserDataContext";

export default function SideBar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
  getNotes,
  setActiveFolder,
  activeFolder,
}) {
  const [{ token }] = useUserData();
  const [folders, setFolders] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [folderName, setFolderName] = React.useState();

  React.useEffect(() => {
    const url = `${process.env.REACT_APP_BACK_END_URL}get/folder`;
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, auth)
      .then((res) => {
        setFolders(res.data);
      })
      .catch((error) => {
        alert("Ocorreu um erro");
        console.log(error.data);
      });
  }, []);

  const onAddFolder = () => {
    const url = `${process.env.REACT_APP_BACK_END_URL}add/folder`;
    const newFolder = {
      name: folderName,
    };
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(url, newFolder, auth)
      .then((res) => {
        console.log(res.data);
        setFolders(res.data);
        setFolderName("");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao criar nova pasta");
      });

    setIsOpen(false);
  };

  const onDeleteFolder = (id) => {
    const url = `${process.env.REACT_APP_BACK_END_URL}delete/${id}/folder`;
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete(url, auth)
      .then((res) => {
        setFolders(folders.filter((folder) => folder.id !== id));
      })
      .catch((error) => {
        alert("Ocorreu um erro");
        console.log(error.data);
      });
  };

  return (
    <Container>
      <Header>
        <h1>Docket</h1>
        <AiOutlineFolderAdd id="addFolder" onClick={() => setIsOpen(!isOpen)} />
      </Header>
      {isOpen ? (
        <AddFolder
          onAddFolder={onAddFolder}
          folderName={folderName}
          setFolderName={setFolderName}
        />
      ) : null}
      <Margin />
      <RenderFolders
        folders={folders}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
        onDeleteFolder={onDeleteFolder}
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        getNotes={getNotes}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  padding: 20px 10px;

  h1 {
    font-size: 30px;
    font-weight: bold;
    font-family: "Cabin Sketch", cursive;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 20px;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Margin = styled.div`
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;
