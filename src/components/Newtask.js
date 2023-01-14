import plusSign from "./../images/plussign.svg";
import styles from "./Newtask.module.css";
import { useState } from "react";

export function NewTask({ onGetNewTask }) {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(e) {
    e.preventDefault();
    console.log(newTask);
    onGetNewTask(newTask);
    setNewTask("");
  }

  function handleNewTaskChange(e) {
    e.target.setCustomValidity("");
    setNewTask(e.target.value);
  }

  function handleNewTaskInvalid(e) {
    e.target.setCustomValidity("Please Type Something");
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <input
        type="text"
        value={newTask} 
        placeholder="Type Something"
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button type="submit">
        Add New Task
        <img src={plusSign} alt="Image"/>
      </button>
    </form>
  );
}
