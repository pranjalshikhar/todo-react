import React, { useState } from "react";
import "./App.css";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";

const App = () => {
  const [toDo, setToDo] = useState("");
  const [allToDo, setAllToDo] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (toDo !== "") {
      setAllToDo([{ id: `${toDo}-${Date.now()}`, toDo }, ...allToDo]);
      setToDo("");
    }

    if (editId) {
      const editTodo = allToDo.find((item) => item.id === editId);
      const updateToDo = allToDo.map((item) =>
        item.id === editTodo.id
          ? (item = { id: item.id, toDo })
          : { id: item.id, toDo: item.toDo }
      );
      setAllToDo(updateToDo);
      setEditId(0);
      setToDo("");
      return;
    }
  };

  const handleDelete = (id) => {
    const deleToDo = allToDo.filter((item) => item.id !== id);
    setAllToDo([...deleToDo]);
  };

  const handleEdit = (id) => {
    const editToDo = allToDo.find((item) => item.id === id);
    setToDo(editToDo.toDo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List App</h1>
        <ToDoForm
          handleSubmit={handleSubmit}
          toDo={toDo}
          setToDo={setToDo}
          editId={editId}
        />
        <ToDoList
          allToDo={allToDo}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
