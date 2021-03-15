import { useState } from "react";
import axios from "axios";
import { Input } from "antd";
import { Button } from "antd";
import styles from "../styles/AddTodo.module.css";

const AddTodo = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const addNewTodo = (e) => {
    const newTodo = { title: title };
    axios.post("http://localhost:5000/todos", newTodo);
    // console.log(newTodo);
    setTodos((oldState) => [...oldState, newTodo]);
    setTitle("");
  };

  return (
    <div className={styles.container}>
      <Input
        value={title}
        onChange={onChangeHandler}
        placeholder='Add a new todo ..'
      />

      <Button disabled={!title} onClick={addNewTodo}>
        Add todo
      </Button>
    </div>
  );
};

export default AddTodo;
