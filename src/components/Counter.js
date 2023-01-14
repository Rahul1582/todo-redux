import styles from "./Counter.module.css";

export function Counter({ taskListCounter }) {
  const sumCompleteTask = taskListCounter.reduce(
    (sum, task) => (task.isTaskComplete === true ? sum + 1 : sum),
    0
  );

  return (
    <div className={styles.counterContainer}>
      <p>
        <strong className={styles.counterDescription}>Total Tasks Pending</strong>
        <span className={styles.counter}>{taskListCounter.length}</span>
      </p>
      <p>
        <strong className={styles.counterDescription}>Total Tasks Completed</strong>
        <span className={styles.counter}>{sumCompleteTask}</span>
      </p>
    </div>
  );
}
