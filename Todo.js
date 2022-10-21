import React, { useState, useReducer } from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";

const defaultState = {
  people: [],
};

const reducer = (state, action) => {
  if (action.type === "ITEM_ADDED") {
    return { ...state, people: [...state.people, action.payload] };
  }
  if (action.type === "DELETED_ITEM") {
    const a = state.people.filter(
      (element) => element.id !== action.payload.id
    );
    return { ...state, people: a };
  }
  if (action.type === "EDIT_ITEM") {
    console.log(action);
  }
  return state;
};

function Todo() {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
        const newItem = { id: new Date().getTime().toString(), name: name };
        dispatch({ type: "ITEM_ADDED", payload: newItem });
        setName("");
    }
  };
  const DeleteItem = (id) =>
    dispatch({ type: "DELETED_ITEM", payload: { id: id } });

  const EditItem = (id) => {
    const newItem = { id: new Date().getTime().toString(), name: name };
    dispatch({ type: "EDIT_ITEM", payload: newItem });
  };

  return (
    <div className="Todo">
      <TodoItem name = {name} handleSubmit = {handleSubmit} setName = {setName} state = {state} DeleteItem = {DeleteItem} EditItem = {EditItem} />
    </div>
  );
}

export default Todo;
