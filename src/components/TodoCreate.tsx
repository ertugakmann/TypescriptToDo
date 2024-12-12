import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { TodoType } from "../types/Types";

const TodoCreate = () => {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = (): void => {
    if (newTodo.trim().length == 0) {
      alert("Please enter a valid To Do");
      return;
    }

    const payload: TodoType = {
      id: Math.floor(Math.random() * 1000),
      content: newTodo,
    };

    dispatch(createTodo(payload));
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        placeholder="Enter a To Do"
        className="todo-input"
        type="text"
      />
      <button onClick={handleCreateTodo} className="todo-button">
        Create
      </button>
    </div>
  );
};

export default TodoCreate;
