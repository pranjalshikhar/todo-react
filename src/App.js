import React, { useState } from "react";
import "./App.css";

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
        <form className="toDoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a Item"
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
          />
          <button type="submit">{editId ? "Edit" : "Add"}</button>
        </form>

        <ul className="allToDo">
          {allToDo.map((item) => (
            <li className="singleToDo">
              <span className="toDoText" key={item.id}>
                {item.toDo}
              </span>
              <button onClick={() => handleEdit(item.id)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
