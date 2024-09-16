import React, { useState, useEffect } from 'react';
import Clock from './components/Clock';
import GoogleCalendar from './components/GoogleCalendar';
import TodoList from './components/TodoList';
import Notepad from './components/Notepad';
import Pomodoro from './components/Pomodoro';
import './style.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <Clock />
        <GoogleCalendar />
        <button onClick={toggleTheme}>
          {theme === 'dark' ? '☀︎' : '☾'}
        </button>
      </header>
      <aside className="app-sidebar">
        <Pomodoro />
        <TodoList />
      </aside>
      <main className="app-main">
        <Notepad />
      </main>
    </div>
  );
}

export default App;
