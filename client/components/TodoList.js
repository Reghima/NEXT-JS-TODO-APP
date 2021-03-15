import axios from "axios";
import { useEffect } from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, setTodos }) => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/todos")
      .then(function (res) {
        const { data } = res.data;
        setTodos([...data]);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/todos")
      .then(function (res) {
        const { data } = res.data;
        setTodos([...data]);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [todos]);

  const deleteTodo = (id) => {
    // alert("hi");
    axios
      .delete(`http://localhost:5000/todos/${id}`, { _id: id })
      .then((res) => {
        const newTodos = todos.filter((todo) => todo._id !== id);
        setTodos(newTodos);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
  return (
    <>
      {todos.map((todo) => (
        <TodoCard
          key={todo._id}
          id={todo._id}
          title={todo.title}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
