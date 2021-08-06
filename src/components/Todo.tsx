import React, { FC } from "react";
import UpdateTodo, { ITodoListProps } from "./UpdateTodo";

export interface ITodoProps {
  id: number;
  title: string;
}

const Todo: FC<ITodoListProps> = ({ id, title, todos, setTodos }) => {
  return (
    <li>
      <UpdateTodo id={id} title={title} todos={todos} setTodos={setTodos} />
    </li>
  );
};

export default Todo;
