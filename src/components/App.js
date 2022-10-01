import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { UserDataProvider } from "../contexts/UserDataContext";
import ProtectedRoute from "./ProtectedRouter";

import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserDataProvider>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserDataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
