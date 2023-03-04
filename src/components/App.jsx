import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, { title: newNote.title, content: newNote.content }];
    });
  }

  function deleteNote(uid) {
    setNotes((prevNotes) => {
        return prevNotes.filter((note, index) => {return uid !== index});
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((note, index) => (
        <Note key={index} id={index} noteTitle={note.title} noteContent={note.content} onDelete={deleteNote} />
      ))}
      {/* {notes.map((note, index) => (<Note key={index} title={note.title} content={note.content}/>))} */}
      {/* {notes.map((note, index) => (<Note key={index} title={note.title} content={note.content} />))} */}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
