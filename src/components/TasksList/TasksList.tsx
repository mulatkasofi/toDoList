import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskCard from "../TaskCard/TaskCard";
import { getSlice } from "../../store/tasks/tasks.selectors";
import { Reorder } from "framer-motion";
import { reorderTasks } from "../../store/tasks/tasks.reducer";
import SearchInput from "../SearchInput/SearchInput";
import cn from "classnames";
import { ITasks } from "../../store/tasks/tasks.types";

import styles from "./TasksList.module.css";

const TaskList = () => {
  const { tasks, query } = useSelector(getSlice);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");

  // Filtering tasks based on the active status and search query
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.isDone;
      if (filter === "active") return !task.isDone;
      return true;
    })
    .filter((task) => task.title.toLowerCase().includes(query.toLowerCase()));

  // Handles the reordering of tasks via drag-and-drop
  const handleReorder = (newOrder: ITasks[]) => {
    dispatch(reorderTasks(newOrder));
  };

  return (
    <div className={styles.taskListWrap}>
      <div className={styles.taskListWrap__info}>
        <SearchInput />
        <div className={styles.taskListWrap__actionWrap}>
          <button
            onClick={() => setFilter("all")}
            className={cn(styles.taskListWrap__actionWrap__button, {
              [styles.taskListWrap__actionWrap__button__active]:
                filter === "all",
            })}
          >
            Все
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={cn(styles.taskListWrap__actionWrap__button, {
              [styles.taskListWrap__actionWrap__button__active]:
                filter === "completed",
            })}
          >
            Выполненные
          </button>
          <button
            onClick={() => setFilter("active")}
            className={cn(styles.taskListWrap__actionWrap__button, {
              [styles.taskListWrap__actionWrap__button__active]:
                filter === "active",
            })}
          >
            Невыполненные
          </button>
        </div>
        <div className={styles.taskListWrap__actionWrap__isDone}>
          <p>Выполненные: {tasks.filter((task) => task.isDone).length}</p>
          <p>Невыполненные: {tasks.filter((task) => !task.isDone).length}</p>
        </div>
      </div>
      <Reorder.Group
        axis="y"
        values={tasks}
        onReorder={handleReorder}
        className={styles.taskListWrap__elements}
      >
        {tasks.length !== 0 ? (
          filteredTasks.map((task) => (
            <Reorder.Item key={task.id} value={task}>
              <TaskCard key={task.title} task={task} />
            </Reorder.Item>
          ))
        ) : (
          <p>Заданий нет</p>
        )}
      </Reorder.Group>
    </div>
  );
};

export default TaskList;
