// import { Counter } from "./Counter";
import Task from "./Task";
import Counter from "./Counter";
import styles from "./Tasklist.module.css";
import clipboard from "./../images/clipboard.svg";
import { connect } from "react-redux";
import { deletetodo, completetodo } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deletetodo(id)),
    completeTodo: (id) => dispatch(completetodo(id))
  };
};

const TaskList = (props) => {
  // console.log(props.todos.reducer);
  return (
    <div className={styles.container}>
      {props.todos.reducer.length === 0 ? (
        <div className={styles.emptyContainer}>
          <img src={clipboard} alt="Empty" />
          <div className={styles.emptyText}>
            <strong> Yay!! No Tasks</strong>
          </div>
        </div>
      ) : (
        <div className={styles.tasksContainer}>
          <Counter taskListCounter={props.todos.reducer} />
          {props.todos.reducer.map((task) => {
            return (
              <Task
                id={task.id}
                key={task.id}
                content={task.content}
                isTaskComplete={task.completed}
                deletetodo={props.deleteTodo}
                completetodo={props.completeTodo}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
