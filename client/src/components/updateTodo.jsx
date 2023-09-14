import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UpdateTodo = ({ _id, handleClose, handleEdited }) => {
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

    console.log({ _id }, { data });

    axios
      .post(`http://localhost:4000/api/todo/${_id})`, data)
      .then((res) => {
        setData({ title: "", description: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't update TODO");
        console.log(err.message);
      });
  };

  return (
    <section className="container">
      <section className="contents">
        <form
          className="form-container"
          onSubmit={(e) => {
            handleSubmit(e);
            handleEdited();
            handleClose();
          }}
        >
          <label htmlFor="title" className="label">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="input"
            onChange={handleChange}
          />
          <label htmlFor="" className="label">
            Description
          </label>
          <input
            type="text"
            name="description"
            className="input"
            onChange={handleChange}
          />
          <button type="submit" className="button">
            Update
          </button>
        </form>
      </section>
    </section>
  );
};

export default UpdateTodo;
