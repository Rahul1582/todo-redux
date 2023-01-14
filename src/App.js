import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import NewTask from "./components/Newtask";
import TaskList from "./components/Tasklist";

function App() {

  return (
    <div className="App">
      <Header />
      <NewTask />
      <TaskList />
    </div>
  );
}

export default App;
