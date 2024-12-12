import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";
import { useState } from "react";

interface TodoProps {
  todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
  const dispatch = useDispatch();
  const { id, content } = todoProps;

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(todoProps.content);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(todoProps.id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id,
      content: newTodo,
    };

    dispatch(updateTodo(payload));
    setEditable(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgray",
        padding: "16px",
        marginTop: "15px",
        borderRadius: "5px",
      }}
    >
      {editable ? (
        <input
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewTodo(e.target.value);
          }}
          style={{
            width: "80%",
            border: "none",
            borderBottom: "1px solid lightgray",
            outline: "none",
          }}
        />
      ) : (
        <div>{content}</div>
      )}
      <div>
        <IoIosRemoveCircleOutline
          onClick={handleRemoveTodo}
          className="icons"
          style={{ marginRight: "8px" }}
        />
        {editable ? (
          <FaCheck onClick={handleUpdateTodo} className="icons" />
        ) : (
          <FaEdit onClick={() => setEditable(true)} className="icons" />
        )}
      </div>
    </div>
  );
};

export default Todo;
