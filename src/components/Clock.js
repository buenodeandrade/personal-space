import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // Update the state with the new date every second
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  // Function to get a greeting based on the time of day
  const getGreeting = () => {
    const hours = time.getHours();
    if (hours < 12) {
      return 'Good morning';
    } else if (hours < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  // Function to format the date with weekday and ordinal day
  const formatDate = () => {
    const options = { weekday: 'long', month: 'long', year: 'numeric' };
    const day = time.getDate();
    const suffix = (day % 10 === 1 && day !== 11) ? 'st' : 
                   (day % 10 === 2 && day !== 12) ? 'nd' : 
                   (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
    const date = `${day}${suffix} of ${time.toLocaleDateString('en-US', { month: 'long' })} ${time.getFullYear()}`;
    return date;
  };

  return (
    <div className="clock">
      <h3>{getGreeting()}! :)</h3>
      <p>How are you on this {time.toLocaleDateString('en-US', { weekday: 'long' })},</p>
      <p>{formatDate()}?</p> {/* Display detailed date */}
      <h3>It's now {time.toLocaleTimeString('en-US', { hour12: true })}.</h3> {/* Display time */}
    </div>
  );
}

export default Clock;
