import TopBar from "./TopBar";
import styled from "styled-components";
import SideBar from "./SideBar";
import React from "react";
import NotesForm from "./NotesForm";
import axios from "axios";
import { useUserData } from "../contexts/UserDataContext";

export default function Home() {
  const [{ token }] = useUserData();
  const [notes, setNotes] = React.useState([]);
  const [activeNote, setActiveNote] = React.useState(false);
  const [activeFolder, setActiveFolder] = React.useState();

  const [isLoading, setIsLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState("");

  const getNotes = (id) => {
    const url = `${process.env.REACT_APP_BACK_END_URL}get/${id}/notes`;
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
  };

  const onAddNote = (id) => {
    const url = `${process.env.REACT_APP_BACK_END_URL}add/notes`;
    const newNote = {
      title: "Nova nota",
      description: "",
      date: "",
      time: "",
      folderId: id,
    };
    console.log(newNote);
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(url, newNote, auth)
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao cadastrar nova note");
      });
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

  const onEditNote = (updatedNote) => {
    setTitle(updatedNote.title);
    setDescription(updatedNote.description);
    setDate(updatedNote.date);
    setTime(updatedNote.time);

    const updateNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });

    setNotes(updateNotesArray);
  };

  const onUpdateNote = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const noteId = activeNote;
    const folderId = activeFolder;
    const url = `${process.env.REACT_APP_BACK_END_URL}update/${noteId}/notes`;
    const updatedNote = { title, description, date, time, folderId };
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .patch(url, updatedNote, auth)
      .then((res) => {
        setTitle("");
        setDescription("");
        setTime("");
        setDate("");
        setNotes(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao atualizar a nota");
        setIsLoading(false);
      });
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
          getNotes={getNotes}
          activeFolder={activeFolder}
          setActiveFolder={setActiveFolder}
        />
        <Margin />
        <NotesForm
          onUpdateNote={onUpdateNote}
          onEditNote={onEditNote}
          activeNote={getActiveNote()}
          isLoading={isLoading}
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
