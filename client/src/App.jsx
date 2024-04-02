/* eslint-disable no-unused-vars */
import React from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={< About/>}></Route>
      <Route path="/profile" element={< Profile/>}></Route>
      <Route path="/signin" element={< Signin/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

