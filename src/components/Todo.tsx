import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Todo = () => {
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
      <div>i am a todo</div>
      <div>
        <IoIosRemoveCircleOutline
          className="icons"
          style={{ marginRight: "8px" }}
        />
        <FaEdit className="icons" />
      </div>
    </div>
  );
};

export default Todo;
