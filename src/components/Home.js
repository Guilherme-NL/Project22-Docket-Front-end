import TopBar from "./TopBar";
import styled from "styled-components";
import SideBar from "./SideBar";
import Notes from "./Notes";
import React from "react";
import NotesForm from "./NotesForm";
import axios from "axios";
import { useUserData } from "../contexts/UserDataContext";

export default function Home() {
  const [{ token }] = useUserData();
  const [notes, setNotes] = React.useState([]);
  const [activeNote, setActiveNote] = React.useState(false);

  React.useEffect(() => {
    const url = `${process.env.REACT_APP_BACK_END_URL}get/notes`;
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, auth)
      .then((res) => {
        setNotes(res.data);
      })
      .catch((error) => {
        alert("Ocorreu um erro");
        console.log(error.data);
      });
  }, []);

  const onAddNote = () => {
    const newNote = {
      id: 1,
      title: "New Notes",
      body: "Olá",
      date: "14-05-2017",
      time: "14:34",
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (id) => {
    const url = `${process.env.REACT_APP_BACK_END_URL}delete/${id}/notes`;
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete(url, auth)
      .then((res) => {
        setNotes(notes.filter((note) => note.id !== id));
      })
      .catch((error) => {
        alert("Ocorreu um erro");
        console.log(error.data);
      });
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <Container>
      <TopBar />
      <Body>
        <SideBar
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Margin />
        <NotesForm activeNote={getActiveNote()} />
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Margin = styled.div`
  border-left: 1px solid #dbdbdb;
  height: 100%;
  margin-bottom: 10px;
  margin-top: 60px;
`;
