import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { ITodoProps } from "./Todo";

export interface ITodoListProps extends ITodoProps {
  todos: ITodoProps[];
  setTodos: Dispatch<SetStateAction<ITodoProps[]>>;
}

const UpdateTodo: FC<ITodoListProps> = ({ id, title, todos, setTodos }) => {
  const [updateToggle, setUpdateToggle] = useState<boolean>(false);
  const [updateTodoTitle, setUpdateTodoTitle] = useState<string>(title);

  const onClickUpdateToggle = () => {
    setUpdateToggle(!updateToggle);
  };

  const onChangeUpdateTodo = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setUpdateTodoTitle(value);
  };

  const onSubmitUpdateTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return { id, title: updateTodoTitle };
        }
        return todo;
      })
    );
    setUpdateToggle(false);
  };

  return (
    <React.Fragment>
      {updateToggle ? (
        <form onSubmit={onSubmitUpdateTodo}>
          <input
            className="focus:outline-none border-2 focus:border-yellow-600"
            type="text"
            value={updateTodoTitle}
            onChange={onChangeUpdateTodo}
          />
          <input className="btn m-4" type="submit" value="confirm" />
        </form>
      ) : (
        <div>{title}</div>
      )}
      <button className="btn" onClick={onClickUpdateToggle}>
        {updateToggle ? "Cancel" : "Update"}
      </button>
    </React.Fragment>
  );
};

export default UpdateTodo;
