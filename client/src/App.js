import React from 'react';
import { TaskInput, TaskList } from './components/_index';
import './App.css';

function App() {
  return (
    <main className="app__body">
      <header>
        <h1>Task Organizer</h1>
      </header>
      <TaskInput />
      <TaskList />
    </main>
  );
}

export default App;
