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

  const [isLoading, setIsLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState("");

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

  const onAddNote = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const url = `${process.env.REACT_APP_BACK_END_URL}add/notes`;
    const newNote = { title, description, date, time };
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(url, newNote, auth)
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
        <NotesForm
          activeNote={getActiveNote()}
          onAddNote={onAddNote}
          isLoading={isLoading}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
        />
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
