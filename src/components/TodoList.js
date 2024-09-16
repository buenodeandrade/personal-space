import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(tasks.map((t, i) => 
      i === index ? { ...t, completed: !t.completed } : t
    ));
  };

  return (
    <div className="todo-list">
      <h3>To-Do List</h3>
      <input 
        className="text"
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter a task" 
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} style={{ color: t.completed ? '#54a254' : '#70c470' }}>
            {t.completed ? '☑ ' : '☐ '}
            {t.text}
            <button class="done" onClick={() => toggleTaskCompletion(index)}>
              {t.completed ? '↻' : '🗸'}
            </button>
            <button class="delete" onClick={() => removeTask(index)}>✗</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
