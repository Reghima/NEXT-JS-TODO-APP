import Head from "next/head";
import { useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";

export default function Home() {
  const [todos, setTodos] = useState([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo Next JS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>TODO APP WITH NEXT JS</h1>
        <AddTodo setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}
