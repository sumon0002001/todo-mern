import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateTodo = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      title: data.title,
      description: data.description,
    };
    console.log(todo);

    axios
      .post("http://localhost:4000/api/todo", data)
      .then((res) => {
        setData({ title: "", description: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
  };

  return (
    <section className="container">
      <Link to="/" className="button-back">
        <button type="button" className="button">
          back
        </button>
      </Link>
      <section className="contents">
        <form className="form-container" noValidate onSubmit={handleSubmit}>
          <label htmlFor="title" className="label">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="input"
            onChange={handleChange}
            value={data.title}
          />
          <label htmlFor="" className="label">
            Description
          </label>
          <input
            type="text"
            name="description"
            className="input"
            value={data.description}
            onChange={handleChange}
          />
          <button type="submit" className="button">
            create todo
          </button>
        </form>
      </section>
    </section>
  );
};

export default CreateTodo;
