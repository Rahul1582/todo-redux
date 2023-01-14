import plusSign from "./../images/plussign.svg";
import styles from "./Newtask.module.css";
import { useState } from "react";
import { connect } from "react-redux";
import { addtodo } from "../redux/reducer";
import { v4 as uuidv4 } from "uuid";

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addtodo(obj))
  };
};

const NewTask = (props, id) => {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(e) {
    e.preventDefault();
    console.log(newTask);
    const getId = uuidv4();
    props.addTodo({
      id: getId,
      content: newTask,
      completed: false
    });
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
        <img src={plusSign} alt="Plus sign" />
      </button>
    </form>
  );
};

export default connect(null, mapDispatchToProps)(NewTask);
