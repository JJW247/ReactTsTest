import React, { FC, Fragment, useState } from "react";
import AddTodo from "./AddTodo";
import Todo, { ITodoProps } from "./Todo";

const Todolist: FC = () => {
  const [todos, setTodos] = useState<ITodoProps[]>([
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
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </ul>
    </Fragment>
  );
};

export default Todolist;
