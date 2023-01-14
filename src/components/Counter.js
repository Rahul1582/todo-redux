import styles from "./Counter.module.css";

const Counter = ({ taskListCounter = [] }) => {
  console.log(taskListCounter);
  const sumCompleteTask = taskListCounter.reduce(
    (sum, task) => (task.completed === true ? sum + 1 : sum),
    0
  );

  return (
    <div className={styles.counterContainer}>
      <p>
        <strong className={styles.counterDescription}>All Tasks</strong>
        <span className={styles.counter}>{taskListCounter.length}</span>
      </p>
      <p>
        <strong className={styles.counterDescription}>
          Total Tasks Completed
        </strong>
        <span className={styles.counter}>{sumCompleteTask}</span>
      </p>
    </div>
  );
};

export default Counter;
