// src/components/GoogleCalendar.js
import React, { useEffect } from 'react';

const GoogleCalendar = () => {
  useEffect(() => {
    const loadCalendar = () => {
      if (window.gapi) {
        // Your logic to initialize Google Calendar API or embed here
        window.gapi.load('calendar', () => {
          console.log('Google Calendar API loaded.');
          // Additional code to handle the calendar embedding
        });
      } else {
        console.error('Google API is not loaded.');
      }
    };

    loadCalendar();
  }, []);

  return (
    <div className="google-calendar">
      {/* Embed or content related to Google Calendar */}
      <iframe
        src="https://calendar.google.com/calendar/embed?src=en-us.brazilian%23holiday%40group.v.calendar.google.com&ctz=America%2FToronto"
        style={{ border: 0 }}
        width="1000"
        height="180"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default GoogleCalendar;
