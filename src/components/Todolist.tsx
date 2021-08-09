import React, { FC, useState } from "react";
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
    <div className="bg-pink-400 min-h-screen font-dgm text-base md:text-2xl">
      <div className="flex justify-center h-screen items-center">
        <div className="bg-gray-200 p-8 max-w-screen-md w-full rounded-2xl mx-8 md:mx-0">
          <div className="flex justify-center items-center">
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
