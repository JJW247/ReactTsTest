import React, { FC, useState } from "react";

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
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default Todolist;
