import React from "react";

const ToDoList = ({ allToDo, handleDelete, handleEdit }) => {
  return (
    <div>
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
  );
};

export default ToDoList;
