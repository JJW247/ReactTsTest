import React, { FC, Fragment, useState } from "react";
import AddTodo from "./AddTodo";

export interface ITodo {
  id: number;
  title: string;
}

const Todolist: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Pray",
    },
    {
      id: 3,
      title: "Love",
    },
  ]);
  return (
    <Fragment>
      <AddTodo todos={todos} setTodos={setTodos} />
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default Todolist;
