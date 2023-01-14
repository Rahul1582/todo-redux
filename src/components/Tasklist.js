// import { Counter } from "./Counter";
import Task from "./Task";
import styles from "./Tasklist.module.css";
import clipboard from "./../images/clipboard.svg";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

const TaskList = (props) => {
  return (
    <div className={styles.container}>
      {props.todos.length === 0 ? (
        <div className={styles.emptyContainer}>
          <img src={clipboard} alt="Empty" />
          <div className={styles.emptyText}>
            <strong> Yay!! No Tasks</strong>
          </div>
        </div>
      ) : (
        <div className={styles.tasksContainer}>
          {props.todos.map((task) => {
            return (
              <Task
                id={task.id}
                key={task.id}
                content={task.content}
                isTaskComplete={task.completed}
                // onDeleteTask={onHandleDeleteTask}
                // onSwitchCheck={onHandleSwitchCheck}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(TaskList);
