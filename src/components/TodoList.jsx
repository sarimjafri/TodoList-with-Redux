import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../features/todoSlice";
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul className="list-none p-0">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-4 border-b border-gray-700"
          style={{
            backgroundColor: "#222",
            color: "#fff",
            fontSize: "1.25rem",
            fontFamily: "Roboto, sans-serif",
          }} 
        >
          <span
            className={`flex-1 cursor-default ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
          </span>
          <div className="flex gap-4">
            <FaCheckCircle
              onClick={() => dispatch(toggleComplete(todo.id))}
              className={`cursor-pointer text-2xl transition-transform transform hover:scale-110 ${
                todo.completed ? "text-green-500" : "text-white"
              }`}
            />
            <FaTrashAlt
              onClick={() => dispatch(removeTodo(todo.id))}
              className="cursor-pointer text-2xl transition-transform transform hover:scale-110 hover:text-red-500"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
