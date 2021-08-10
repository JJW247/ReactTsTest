import { FC } from "react";
import { ITodoListProps } from "./UpdateTodo";

const DeleteTodo: FC<ITodoListProps> = ({ id, title, todos, setTodos }) => {
  const onClcikDeleteTodo = () => {
    setTodos(
      todos.filter((todo) => {
        return id !== todo.id;
      })
    );
  };

  return (
    <button className="btn" onClick={onClcikDeleteTodo}>
      Delete
    </button>
  );
};

export default DeleteTodo;
