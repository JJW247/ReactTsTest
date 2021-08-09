import React, {
  FC,
  useState,
  ChangeEvent,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";

import { ITodoProps } from "./Todo";

export interface ITodoListProps {
  todos: ITodoProps[];
  setTodos: Dispatch<SetStateAction<ITodoProps[]>>;
}

const AddTodo: FC<ITodoListProps> = ({ todos, setTodos }) => {
  const [addTodoTitle, setAddTodoTitle] = useState<string>("");
  const onChangeAddTodo = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAddTodoTitle(value);
  };
  const onSubmitAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (addTodoTitle) {
      setTodos([...todos, { id: Date.now(), title: addTodoTitle }]);
      setAddTodoTitle("");
    }
  };
  return (
    <form onSubmit={onSubmitAddTodo}>
      <input type="text" value={addTodoTitle} onChange={onChangeAddTodo} />
      <input className="btn ml-4 mb-4" type="submit" value="add" />
    </form>
  );
};

export default AddTodo;
