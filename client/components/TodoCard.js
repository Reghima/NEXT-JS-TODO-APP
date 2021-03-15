import axios from "axios";
import { useState } from "react";
import styles from "../styles/TodoCard.module.css";
import { Card } from "antd";
import { Button } from "antd";

const TodoCard = ({ id, title, deleteTodo }) => {
  const [activeInput, setActiveInput] = useState(false);
  const [input, setInput] = useState(`${title}`);

  const editTodo = (id, input) => {
    if (activeInput) {
      axios.put(`http://localhost:5000/todos/${id}`, { title: input });
    }
    setActiveInput(!activeInput);
  };

  return (
    <Card className={styles.container}>
      <h3
        className={!activeInput ? styles.editTodoActive : styles.editTodoHidden}
      >
        {title}
      </h3>
      <div className={styles.innerContainer}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={
            activeInput ? styles.editTodoActive : styles.editTodoHidden
          }
        />
        <Button onClick={() => editTodo(id, input)}>Edit</Button>
        <Button
          className={
            !activeInput ? styles.editTodoActive : styles.editTodoHidden
          }
          onClick={() => deleteTodo(id)}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};
export default TodoCard;
