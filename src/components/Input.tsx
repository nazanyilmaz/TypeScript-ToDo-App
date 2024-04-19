import React from "react";
type IProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addMessage: () => void;
};

const Input: React.FC<IProps> = ({ todo, setTodo, addMessage }) => {
  return (
    <div className="flex gap-3 items-center justify-center mt-[50px]">
      <input
        className="  p-2 outline-none w-[500px] mb-3 hover:outline-emerald-500 text-lg"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="type your ToDo..."
      />
      <button
        type="submit"
        className="  p-2 bg-white mb-3  hover:scale-90  hover:bg-emerald-100"
        onClick={addMessage}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
