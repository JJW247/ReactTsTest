import axios from 'axios';
import React, { FC, useState, useEffect } from 'react';
import useSWR from 'swr';
import AddTodo from './AddTodo';
import Todo, { ITodoProps } from './Todo';

export interface ITodoBack {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  desc: string;
  isCompleted: boolean;
}

const Todolist: FC = () => {
  const fetcher = async (url: string) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, error, mutate } = useSWR<ITodoBack[]>(
    `${process.env.REACT_APP_BACK_URL}/todo`,
    fetcher,
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  const setTodos = () => {
    console.log('DUMMY');
  };

  return (
    <div className="bg-pink-400 min-h-screen font-dgm text-base md:text-2xl">
      <div className="flex justify-center h-screen items-center">
        <div className="bg-gray-200 p-8 max-w-screen-md w-full rounded-2xl mx-8 md:mx-0">
          <div className="flex justify-center items-center">
            <div>
              <AddTodo todos={data} mutate={mutate} />
              <ul>
                {data.map((todo) => {
                  return (
                    // <Todo
                    //   key={todo.id}
                    //   id={todo.id}
                    //   title={todo.title}
                    //   todos={todos}
                    //   setTodos={setTodos}
                    // />
                    <li key={todo.id}>
                      {todo.id} - {todo.title} - {todo.desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
