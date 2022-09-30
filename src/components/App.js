import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { UserDataProvider } from "../contexts/UserDataContext";
import { gapi } from "gapi-script";

import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";

function App() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  React.useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <>
      <BrowserRouter>
        <UserDataProvider>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </UserDataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
