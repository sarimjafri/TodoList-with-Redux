import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clearTodos } from "../features/todoSlice";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleClearAll = () => {
    dispatch(clearTodos()); 
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
        className="border border-gray-600 p-3 rounded-md w-full bg-[#333] text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 hover:shadow-lg hover:bg-[#444] hover:scale-105"
        style={{ backgroundColor: "#333", color: "#fff" }}
      />
      <div className="flex gap-5 mt-4">
        {" "}
        <button
          type="submit"
          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-6 py-3 transition duration-300"
        >
          Add Task
        </button>
        <button
          type="button"
          onClick={handleClearAll}
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base px-6 py-3 transition duration-300"
        >
          Clear All
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
