import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Login";

import Signup from "./Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
