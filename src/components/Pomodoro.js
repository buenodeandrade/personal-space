import React, { useState, useEffect, useRef } from 'react';
import alertSound from '../sounds/alert.mp3';
import playSound from '../sounds/play.mp3';
import pauseSound from '../sounds/pause.mp3';

function Pomodoro() {
  const [workTimeInput, setWorkTimeInput] = useState(25); // Input field for work time (in minutes)
  const [breakTimeInput, setBreakTimeInput] = useState(5);  // Input field for break time (in minutes)
  const [timeLeft, setTimeLeft] = useState(25 * 60);  // Default time left (25 minutes)
  const [isRunning, setIsRunning] = useState(false);  // Is the timer running?
  const [onBreak, setOnBreak] = useState(false);      // Is it break time?
  const audioRef = useRef(null);
  const startAudioRef = useRef(null);
  const pauseAudioRef = useRef(null);

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      audioRef.current.play(); // Play the sound when time reaches 0
      setOnBreak(prevOnBreak => !prevOnBreak); // Switch between work/break
      setTimeLeft(onBreak ? workTimeInput * 60 : breakTimeInput * 60); // Set new time
    }

    return () => clearInterval(timer);  // Clean up interval on component unmount
  }, [isRunning, timeLeft, onBreak, workTimeInput, breakTimeInput]);

  const startPauseTimer = () => {
    if (isRunning) {
      pauseAudioRef.current.play(); // Play pause sound if the timer is running
    } else {
      startAudioRef.current.play(); // Play start sound if the timer is not running
    }
    setIsRunning(!isRunning); // Toggle the running state
  };

  const resetTimer = () => {
    setIsRunning(false);
    setOnBreak(false);
    setTimeLeft(workTimeInput * 60);  // Reset to user-specified work time
  };

  const handleWorkTimeChange = (e) => {
    setWorkTimeInput(e.target.value);
    if (!isRunning) {
      setTimeLeft(e.target.value * 60); // Update timer when not running
    }
  };

  const handleBreakTimeChange = (e) => {
    setBreakTimeInput(e.target.value);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pomodoro">
      <h2>{onBreak ? 'Break Time' : 'Work Time'}</h2>
      <h1>{formatTime(timeLeft)}</h1>

      <div className="inputs">
        <label>
          Work Time (minutes):
          <input
            type="number"
            value={workTimeInput}
            onChange={handleWorkTimeChange}
            disabled={isRunning} // Disable when the timer is running
          />
        </label>
        <label>
          Break Time (minutes):
          <input
            type="number"
            value={breakTimeInput}
            onChange={handleBreakTimeChange}
            disabled={isRunning} // Disable when the timer is running
          />
        </label>
      </div>

      <div className="buttons">
        <button onClick={startPauseTimer}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer}>
          Reset
        </button>
      </div>
      <audio ref={audioRef} src={alertSound}></audio>
      <audio ref={startAudioRef} src={playSound}></audio>
      <audio ref={pauseAudioRef} src={pauseSound}></audio>
    </div>
  );
}

export default Pomodoro;