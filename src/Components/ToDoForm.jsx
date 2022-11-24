import React from "react";

const ToDoForm = ({ handleSubmit, toDo, setToDo, editId }) => {
  return (
    <div>
      <form className="toDoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a Item"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <button type="submit">{editId ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
};

export default ToDoForm;
