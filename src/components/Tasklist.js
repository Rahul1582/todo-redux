import { Counter } from "./Counter";
import { Task } from "./Task";
import styles from "./Tasklist.module.css";
import clipboard from "./../images/clipboard.svg";

export function TaskList({ taskList, onDeleteTask, onSwitchCheck }) {
  function onHandleDeleteTask(id) {
    onDeleteTask(id);
  }

  function onHandleSwitchCheck(id) {
    console.log(`TaskList.jsx ${id}`);
    onSwitchCheck(id);
  }

  return (
    <div className={styles.container}>
      <Counter taskListCounter={taskList} />

      {taskList.length === 0 ? (
        <div className={styles.emptyContainer}>
          <img src={clipboard} alt="Empty" />
          <div className={styles.emptyText}>
            <strong> Yay!! No Tasks</strong>
          </div>
        </div>
      ) : (
        <div className={styles.tasksContainer}>
          {taskList.map((task) => {
            return (
              <Task
                id={task.id}
                key={task.id}
                content={task.taskName}
                isTaskComplete={task.isTaskComplete}
                onDeleteTask={onHandleDeleteTask}
                onSwitchCheck={onHandleSwitchCheck}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
