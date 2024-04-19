import React from "react";
import { Todos } from "../types/Type";
type Props = {
  todos: Todos[];
  deleteMessage: (id: number) => void;
};

const Messages: React.FC<Props> = ({ todos, deleteMessage }) => {
  return (
    <div className="rounded-lg color-white mt-3 text-white">
      {todos.map((todo, i) => (
        <div
          key={i}
          className="shadow-sm shadow-emerald-400 mt-[20px] flex flex-column items-center justify-between p-2 text-lg"
        >
          {" "}
          {todo.message}
          <span
            className="hover:scale-90"
            onClick={() => deleteMessage(todo.id)}
            style={{ cursor: "pointer" }}
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
};

export default Messages;
