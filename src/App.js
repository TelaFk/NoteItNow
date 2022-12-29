import React, { useState } from "react";
import "./scss/index.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
import Logo from "./SecondaryComponents/Logo";
import Form from "./Pages/Form";
import ViewNote from "./Pages/ViewNote";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigator = useNavigate();
  return (
    <>
      <Routes>
        <Route element={<Logo />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/main"
            element={
              <Main notes={notes} setNotes={setNotes} navigator={navigator} />
            }
          />
          <Route
            path="/form"
            element={
              <Form
                title={title}
                setTitle={setTitle}
                content={content}
                setContent={setContent}
                notes={notes}
                setNotes={setNotes}
                navigator={navigator}
              />
            }
          />
          <Route
            path="/view-note/:id"
            element={
              <ViewNote
                title={title}
                setTitle={setTitle}
                content={content}
                setContent={setContent}
                notes={notes}
                setNotes={setNotes}
                navigator={navigator}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
