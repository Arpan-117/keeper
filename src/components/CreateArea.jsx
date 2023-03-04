import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  // function handleTitleChange(event) {
  //   const value = event.target.value;
  //   setNewNote((prevValue) => {
  //     return { title: value, content: prevValue.content };
  //   });
  // }

  // function handleContentChange(event) {
  //   const text = event.target.value;
  //   setNewNote((prevValue) => {
  //     return { title: prevValue.title, content: text };
  //   });
  // }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(newNote);
    setNewNote( { title: "", content: "" } );
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={newNote.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={newNote.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
