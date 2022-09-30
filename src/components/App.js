import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { gapi } from "gapi-script";

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
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
