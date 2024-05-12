import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/tasks/tasks.reducer";
import { v4 as uuidv4 } from "uuid";

import styles from "./Creation.module.css";

const Creation = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // Handles form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newTask = {
      id: uuidv4(), 
      title,
      text,
      isDone: false, 
    };
    dispatch(addTask(newTask)); // Dispatch the action to add the task to the store
    setTitle("");
    setText(""); 
  };
  return (
    <form onSubmit={handleSubmit} className={styles.creationFormWrap}>
      <div className={styles.creationFormContainer}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название задачи"
          className={styles.creationFormContainer__input}
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Описание задачи"
          className={styles.creationFormContainer__textarea}
        />
        <button type="submit" className={styles.creationFormContainer__action}>
          Создать
        </button>
      </div>
    </form>
  );
};

export default Creation;
