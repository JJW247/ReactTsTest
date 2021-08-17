import axios from 'axios';
import React, {
  FC,
  useState,
  ChangeEvent,
  FormEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import { ITodoBack } from './Todolist';

import { ITodoProps } from './Todo';

export interface ITodoListProps {
  // todos: ITodoProps[];
  todos: {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    desc: string;
    isCompleted: boolean;
  }[];
  mutate: any;
}

const AddTodo: FC<ITodoListProps> = ({ todos, mutate }) => {
  const [addTodoTitle, setAddTodoTitle] = useState<string>('');
  const onChangeAddTodoTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAddTodoTitle(value);
  };
  const [addTodoDesc, setAddTodoDesc] = useState<string>('');
  const onChangeAddTodoDesc = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAddTodoDesc(value);
  };
  const onSubmitAddTodo = async (event: FormEvent<HTMLFormElement>) => {
    // if (addTodoTitle) {
    //   setTodos([
    //     ...todos,
    //     {
    //       id: Date.now(),
    //       createdAt: Date.now(),
    //       updatedAt: Date.now(),
    //       title: addTodoTitle,
    //       desc: addTodoDesc,
    //       isCompleted: false,
    //     },
    //   ]);
    //   setAddTodoTitle('');
    // }

    try {
      event.preventDefault();
      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/todo`,
        {
          title: addTodoTitle,
          desc: addTodoDesc,
        },
      );
      console.log(response.data);
      if (response.statusText === 'Created') {
        setAddTodoTitle('');
        setAddTodoDesc('');
        mutate();
      }
    } catch (error) {}
  };
  return (
    <form onSubmit={onSubmitAddTodo}>
      <input
        className="input"
        type="text"
        value={addTodoTitle}
        onChange={onChangeAddTodoTitle}
      />
      <input
        className="input"
        type="text"
        value={addTodoDesc}
        onChange={onChangeAddTodoDesc}
      />
      <input className="btn ml-4 mb-4" type="submit" value="add" />
    </form>
  );
};

export default AddTodo;
