import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { Todos } from "./types/Type";
import Messages from "./components/Messages";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);
  // console.log(todo, "todo");
  const addMessage = () => {
    if (todo) setTodos([...todos, { message: todo, id: todos.length + 1 }]);
    setTodo("");
  };
  const deleteMessage = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  //console.log(todos, "todos");
  return (
    <div className=" bg-neutral-900 min-h-screen flex flex-row justify-center items-center  ">
      <h1 className=" absolute mt-[-900px] text-white text-5xl ">
        TypeScript ToDo-App
      </h1>
      <div className=" border border-transparent min-h-[700px] shadow-emerald-400 shadow-2xl px-10">
        <Input todo={todo} setTodo={setTodo} addMessage={addMessage} />
        <Messages todos={todos} deleteMessage={deleteMessage} />
      </div>
    </div>
  );
};

export default App;
