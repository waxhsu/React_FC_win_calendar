// import './winCalendar.css';
// const googleCalendarApiKey = 'AIzaSyCNuPc8INoIhejkZ0ZpBgqxMMubNbs7Twc';
// const googleCalendarId = 'c_6ac1b95b43f0bc6b7729121b7f5eb6af644b44192b24c7cd2a648282e9d5df0d@group.calendar.google.com';

// function winCalendar() {
//     return (
//         <div className="winCalendar">

// asdf

//         </div>
//     );
// }

// export default winCalendar

import { useEffect } from 'react';
import './winCalendar.css';
import { Calendar } from '@fullcalendar/core'; // FullCalendar core
import dayGridPlugin from '@fullcalendar/daygrid'; // FullCalendar DayGrid plugin
import listPlugin from '@fullcalendar/list'; // FullCalendar DayGrid plugin
import googleCalendarPlugin from '@fullcalendar/google-calendar'; // FullCalendar Google Calendar plugin

const googleCalendarApiKey = 'AIzaSyCNuPc8INoIhejkZ0ZpBgqxMMubNbs7Twc';
const googleCalendarId = 'c_6ac1b95b43f0bc6b7729121b7f5eb6af644b44192b24c7cd2a648282e9d5df0d@group.calendar.google.com';

function WinCalendar() {
  useEffect(() => {
    const calendarEl = document.getElementById('calendar');
    
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, googleCalendarPlugin, listPlugin],
      initialView: 'listYear', // can use 'listMonth' to show schedule per Month
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
    <div className="winCalendar">
      <div id="calendar"></div>
    </div>
  );
}

export default WinCalendar;
