import { useEffect } from 'react';
import './winCalendar.css';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const googleCalendarApiKey = 'AIzaSyCNuPc8INoIhejkZ0ZpBgqxMMubNbs7Twc';

// Obtain Google Calendar ID from Google Calendar Settings
const JUN_CohortId = 'c_da135cf666ae629bc8c39bfbe7a099540d70593c448d73a9fec7cd8c3578e4ba@group.calendar.google.com';
const JUL_CohortId = 'c_56ec5181422e91d15aeb51914a84ebfdfc8129ed04652867d24f67feadf3bb87@group.calendar.google.com';
const AUG_CohortId = 'c_d03dbf2cf6a04124e760ddbb3af9128c1e1b6e42c8ad4f53ada4e9b7808aba2f@group.calendar.google.com';
const SEP_CohortId = 'c_d7a7143c2a40c09aefe2caf30e0bda03330bf518b579adbc616e65c1a6234884@group.calendar.google.com';

function WinCalendar() {
  useEffect(() => {
    const calendarEl = document.getElementById('calendar');
    
    const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, googleCalendarPlugin, listPlugin],

        initialView: 'listYear', // can use 'listYear' to show schedule per Year,
    
        headerToolbar: {
            left: 'prev',
            center: 'title',
            // right: 'listYear dayGridMonth'
            right: 'next listYear dayGridMonth',
        },

        titleFormat: () => {
            return 'September 4, 2024 – December 11, 2025';
        },

        validRange: {
            start: '2024-01-01', 
            end: '2025-01-01'
        },

        

        googleCalendarApiKey: googleCalendarApiKey,
        eventSources: [
            // {
            //     googleCalendarId: JUN_CohortId,
            //     className: 'June Cohort',
            // },
            // {
            //     googleCalendarId: JUL_CohortId,
            //     className: 'July Cohort',
            // },
            // {
            //     googleCalendarId: JUL_CohortId,
            //     className: 'August Cohort',
            // },
            {
                googleCalendarId: SEP_CohortId,
                className: 'September Cohort',
            },
        ],
        eventColor: 'red',

    });
    
    calendar.render(); // Render the calendar when the component mounts
    
    return () => {
      calendar.destroy(); // Clean up the calendar when the component unmounts
    };
  }, []);

  return (
    <div id="winCalendar">
      <div id="calendar"></div>
    </div>
  );
}

export default WinCalendar;











// import { useEffect, useState } from 'react';
// import './winCalendar.css';
// import { Calendar } from '@fullcalendar/core'; // FullCalendar core
// import dayGridPlugin from '@fullcalendar/daygrid'; // FullCalendar DayGrid plugin
// import googleCalendarPlugin from '@fullcalendar/google-calendar'; // FullCalendar Google Calendar plugin
// import listPlugin from '@fullcalendar/list'; // FullCalendar List plugin

// const googleCalendarApiKey = 'AIzaSyCNuPc8INoIhejkZ0ZpBgqxMMubNbs7Twc';
// const JUNE_CohortId = 'c_da135cf666ae629bc8c39bfbe7a099540d70593c448d73a9fec7cd8c3578e4ba@group.calendar.google.com';
// const JUL_CohortId = 'c_56ec5181422e91d15aeb51914a84ebfdfc8129ed04652867d24f67feadf3bb87@group.calendar.google.com';
// const AUG_CohortId = 'c_d03dbf2cf6a04124e760ddbb3af9128c1e1b6e42c8ad4f53ada4e9b7808aba2f@group.calendar.google.com';
// const SEP_CohortId = 'c_d7a7143c2a40c09aefe2caf30e0bda03330bf518b579adbc616e65c1a6234884@group.calendar.google.com';

// function WinCalendar() {
//   const [selectedCohort, setSelectedCohort] = useState(JUNE_CohortId); // Default to June cohort

//   useEffect(() => {
//     const calendarEl = document.getElementById('calendar');
    
//     const calendar = new Calendar(calendarEl, {
//       plugins: [dayGridPlugin, googleCalendarPlugin, listPlugin],
//       initialView: 'listYear',
    
//       headerToolbar: {
//         left: 'prev next today',
//         center: 'title',
//         right: 'listYear dayGridMonth'
//       },

//       titleFormat: () => {
//         return 'June 12, 2024 – October 22, 2024';
//       },

//       validRange: {
//         start: '2024-06-01', 
//         end: '2025-02-01'
//       },

//       googleCalendarApiKey: googleCalendarApiKey,
//       events: {
//         googleCalendarId: selectedCohort, // Set the selected cohort calendar
//       }
//     });
    
//     calendar.render(); // Render the calendar when the component mounts
    
//     return () => {
//       calendar.destroy(); // Clean up the calendar when the component unmounts
//     };
//   }, [selectedCohort]); // Re-render calendar when selectedCohort changes

//   return (
//     <div className="winCalendar">
//       {/* Dropdown to select calendar */}
//       <select 
//         value={selectedCohort} 
//         onChange={(e) => setSelectedCohort(e.target.value)}
//       >
//         <option value={JUNE_CohortId}>June Cohort</option>
//         <option value={JUL_CohortId}>July Cohort</option>
//         <option value={AUG_CohortId}>August Cohort</option>
//         <option value={SEP_CohortId}>September Cohort</option>
//       </select>
      
//       {/* Calendar */}
//       <div id="calendar"></div>
//     </div>
//   );
// }

// export default WinCalendar;





