import Task from "./Task";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      <p>Tasks: {tasks.length}</p>
      <Link to="/create-task">Create task</Link>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
        />
      ))}
    </div>
  );
};

export default TasksList;
