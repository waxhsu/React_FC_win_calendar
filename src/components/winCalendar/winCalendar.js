import { useEffect } from 'react';
import './winCalendar.css';
import { Calendar } from '@fullcalendar/core'; // FullCalendar core
import dayGridPlugin from '@fullcalendar/daygrid'; // FullCalendar DayGrid plugin
import listPlugin from '@fullcalendar/list'; // FullCalendar DayGrid plugin
import googleCalendarPlugin from '@fullcalendar/google-calendar'; // FullCalendar Google Calendar plugin

const googleCalendarApiKey = 'AIzaSyCNuPc8INoIhejkZ0ZpBgqxMMubNbs7Twc';

// Obtain Google Calendar ID from Google Calendar Settings
const googleCalendarId = 'c_da135cf666ae629bc8c39bfbe7a099540d70593c448d73a9fec7cd8c3578e4ba@group.calendar.google.com';

function WinCalendar() {
  useEffect(() => {
    const calendarEl = document.getElementById('calendar');
    
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, googleCalendarPlugin, listPlugin],
      initialView: 'listMonth', // can use 'listYear' to show schedule per Year
      googleCalendarApiKey: googleCalendarApiKey,
      events: {
        googleCalendarId: googleCalendarId

      }
    });
    
    calendar.render(); // Render the calendar when the component mounts
    
    return () => {
      calendar.destroy(); // Clean up the calendar when the component unmounts
    };
  }, []);

  return (
    <div className="winCalendar ">
      <div id="calendar"></div>
    </div>
  );
}

export default WinCalendar;
