import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/tasksSlice";

const Task = ({ id, title, description }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <Link to={`/edit-task/${id}`}>Edit</Link>
    </div>
  );
};

export default Task;
