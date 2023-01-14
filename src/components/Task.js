import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";

const Task = ({ id, content, isTaskComplete, deletetodo, completetodo }) => {
  return (
    <div className={styles.taskContainer}>
      <button onClick={() => completetodo(id)}>
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

      <button title="Delete" onClick={() => deletetodo(id)}>
        <Trash size={14} color="var(--gray-300)" />
      </button>
    </div>
  );
};

export default Task;
