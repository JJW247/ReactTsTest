import React, { FC } from "react";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo, { ITodoListProps } from "./UpdateTodo";

export interface ITodoProps {
  id: number;
  title: string;
}

const Todo: FC<ITodoListProps> = ({ id, title, todos, setTodos }) => {
  return (
    <li className="flex items-center justify-between bg-white my-4 py-4">
      <UpdateTodo id={id} title={title} todos={todos} setTodos={setTodos} />
      <DeleteTodo id={id} title={title} todos={todos} setTodos={setTodos} />
    </li>
  );
};

export default Todo;
