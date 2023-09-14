import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateTodo from "./updateTodo";

function TodoCard({ data, handleDelete, handleEdit }) {
  const { _id, title, description } = data;

  return (
    <li key={_id}>
      <div className="title-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="button-container">
        <button name={_id} className="button" onClick={handleEdit}>
          edit
        </button>
        <button name={_id} className="button" onClick={handleDelete}>
          delete
        </button>
      </div>
    </li>
  );
}

const ShowTodoList = () => {
  const [todo, setTodo] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/todo")
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  function handleEdit(e) {
    setId(e.target.name);
    setOpen(true);
  }

  function handleDelete(e) {
    axios.delete(`http://localhost:4000/api/todo/${e.target.name}`);

    setTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  }

  function handleClose() {
    // added
    setId("");
    setOpen(false);
  }

  return (
    <section className="container">
      <Link to="/create-to-do" className="button_new">
        <button className="button">New</button>
      </Link>
      <section className="contents">
        <h1>Todo</h1>
        <ul className="list-container">
          {todo.map((data) => (
            <TodoCard data={data} />
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ShowTodoList;
