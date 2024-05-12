import { useDispatch } from "react-redux";
import { toggleTaskDone, removeTask } from "../../store/tasks/tasks.reducer";
import { ITasks } from "../../store/tasks/tasks.types";

import styles from "./TaskCard.module.css";

interface ITaskCard {
  task: ITasks;
}

const TaskCard = ({ task }: ITaskCard) => {
  const dispatch = useDispatch();

  // Toggle the completion status of the task
  const handleToggleDone = () => {
    dispatch(toggleTaskDone(task.title)); 
  };

  // Handle task removal
  const handleRemove = () => {
    dispatch(removeTask(task.title)); 
  };

  return (
    <div
      className={styles.taskCardWrap}
      style={{ backgroundColor: task.isDone ? "#e0ffe0" : "inherit" }}
    >
      <div className={styles.taskCardWrap__information}>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggleDone}
        />
        <div>
          <h1>{task.title}</h1>
          <h3>{task.text}</h3>
        </div>
      </div>
      <button onClick={handleRemove} className={styles.taskCardWrap__action}>
        Удалить
      </button>
    </div>
  );
};

export default TaskCard;
