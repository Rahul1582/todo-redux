import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/Newtask";
import { TaskList } from "./components/Tasklist";

function App() {
  const [tasks, setTasks] = useState([]);

  function getNewTask(newTask) {
    const getId = uuidv4();
    setTasks([
      ...tasks,
      {
        key: getId,
        id: getId,
        isTaskComplete: false,
        taskName: newTask
      }
    ]);
    console.log(tasks);
  }

  function switchCheck(taskToCheck) {

    const tasksSwitched = tasks.map((task) => {

      return task.id === taskToCheck
        ? {
            key: task.id,
            id: task.id,
            isTaskComplete: !task.isTaskComplete,
            taskName: task.taskName
          }
        : task;
    });
    setTasks(tasksSwitched);
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.key !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }
  return (
    <div className="App">
      <Header />
      <NewTask onGetNewTask={getNewTask} />
      <TaskList
        taskList={tasks}
        onDeleteTask={deleteTask}
        onSwitchCheck={switchCheck}
      />
    </div>
  );
}

export default App;
