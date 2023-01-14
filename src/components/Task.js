import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { addtodo, deletetodo, completetodo } from "../redux/reducer";

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addtodo(obj))
  };
};

const Task = ({ id, content, isTaskComplete }) => {
  return (
    <div className={styles.taskContainer}>
      <button>
        {isTaskComplete ? (
          <CheckCircle weight="fill" size={17.45} color="var(--blue-300)" />
        ) : (
          <Circle size={17.45} color="var(--blue-300)" />
        )}
      </button>

      {isTaskComplete ? (
        <p className={styles.completeTask}>{content}</p>
      ) : (
        <p>{content}</p>
      )}

      <button title="Delete">
        <Trash size={14} color="var(--gray-300)" />
      </button>
    </div>
  );
};

export default Task;
