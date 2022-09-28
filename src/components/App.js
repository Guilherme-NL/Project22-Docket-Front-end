import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Signin from "./Signin";

import Signup from "./Signup";

function App() {
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
