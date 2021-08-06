import React, { FC } from "react";

export interface ITodoProps {
  id: number;
  title: string;
}

const Todo: FC<ITodoProps> = ({ id, title }) => {
  return <li>{title}</li>;
};

export default Todo;
