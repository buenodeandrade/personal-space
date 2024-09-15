import React from 'react';
import Clock from './components/Clock';
import GoogleCalendar from './components/GoogleCalendar';
import SpotifyPlayer from './components/SpotifyPlayer';
import TodoList from './components/TodoList';
import Notepad from './components/Notepad';
import Browser from './components/Browser';
import Pomodoro from './components/Pomodoro';
import './style.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <Clock />
        
        <GoogleCalendar />
        <SpotifyPlayer />
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
