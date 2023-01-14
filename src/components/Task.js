import { CheckCircle, Circle, Trash } from "phosphor-react";

import styles from "./Task.module.css";

export function Task({
  id,
  content,
  isTaskComplete,
  onDeleteTask,
  onSwitchCheck
}) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleSwitchCheck() {
    onSwitchCheck(id);
  }

  return (
    <div className={styles.taskContainer}>
      <button onClick={handleSwitchCheck}>
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

      <button title="Delete" onClick={handleDeleteTask}>
        <Trash size={14} color="var(--gray-300)" />
      </button>
    </div>
  );
}
