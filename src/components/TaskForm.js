import { useEffect, useState } from "react";
import { addTask, editTask } from "../features/tasks/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    id
      ? dispatch(editTask(task))
      : dispatch(
          addTask({
            ...task,
            id: uuidv4(),
          })
        );
    navigate("/");
  };

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    id && setTask(tasks.find((task) => task.id === id));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <label htmlFor="title">Title Task</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            maxLength="50"
            placeholder="Write a title for your task"
            onChange={handleChange}
            value={task.title}
          />
        </li>
        <label htmlFor="description">Description Task</label>
        <textarea
          name="description"
          id="description"
          required
          maxLength="500"
          placeholder="Write a description for your task"
          onChange={handleChange}
          value={task.description}
        />
        <li>
          <button>Save</button>
        </li>
      </ul>
    </form>
  );
};

export default TaskForm;
