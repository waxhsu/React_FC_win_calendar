import './TimeCommitment.css';
import WinCalendar from '../winCalendar/winCalendar.js'


function TimeCommitment(){
  return (
    <div id='TimeCommitment' className='container-cc pb-4'>
      <h1 class="column text-center font-mogan">
        Our How to Win Stakeholders & Influence Decisions Program
      </h1>

      <div class="column">
      <p>
        We want you to get the support you need to attain a new level in your
        UX career.
      </p>
      <p>
        That’s why we invite you to enroll in our brand new <b>How to Win Stakeholders & Influence Decisions program</b>.
      </p>
      <p>
        This 16-week program has everything you need to master each of the <b>8 Pillars of Stakeholder Influence</b>. Attain a new set of tools, skills, and mindset from program
        creators Leslie Jensen-Inman and Jared Spool to propel your
        career in a whole new (and much more fun) direction.
      </p>
      </div>

      <h1 class="text-center font-mogan column">
        Our September Cohort Schedule
      </h1>

      <WinCalendar />

      <h1 class="pt-1 font-mogan">
      Time Commitment and Program Schedule
      </h1>



      <h3>Commit 2-3 hours per week to see real change.</h3>
      <p>
        <b>We hold a new program start date every month.</b> Once you start the program, you’ll gain access to
        our private online learning space hosted in our Leaders of Awesomness community.
      </p>

      <p>
        <b>Then every two weeks, for the 16-weeks of the program,</b> Leslie and Jared will introduce you to a
        brand new pillar of stakeholder influence. They’ll share the techniques, tips, and methods that will expand your
        current skill set and put you on a path to success.
      </p>

      <p>
        <b>You’ll join weekly live lab sessions every Wednesday for direct mentorship and guidance.</b> For
        the first four weeks of the program, you can join a live lab session on Wednesdays at 11am ET (15.00 GMT) or at
        7pm ET (23.00 GMT). For the remaining twelve weeks, you can join the live lab sessions on Wednesday 1pm ET
        (17.00 GMT) or
        7pm ET (23.00 GMT).
      </p>

      <p>
        <b>Each live lab session is recorded, so you can catch up by watching the recording if you miss
          it.</b> We usually have the recordings posted within 24 hours. If you have questions, you can put them in
        the discussion area in our community space.
      </p>

      <p>
        <b>Each week, there’s also a video about the topic to watch at your convenience and some homework to
          prepare for the labs.</b> The videos are usually about 45 minutes long, and the homework can take 20 - 40
        minutes.
      </p>

      <p>
        <b>Overall you’ll expect to spend about 2 to 3 hours a week on this program.</b> That’s a 1 hour live
        lab session every week, a 1 hour video every other week, and ½ hour of intentional practice/homework every week.

      </p>



      <h2 id="your-investment-in-lifetime-skills-will-forever-change-the-trajectory-of-your-ux-career">
        Your investment in lifetime skills will forever change the trajectory of your UX career.
      </h2>
      <p>
        We’re quite serious when we say this. What you learn in this program
        will be skills, tools, and mindsets that you’ll use every day for the
        lifetime of your UX career. We’ve seen UX professionals take these
        techniques and successfully make a case for…
      </p>
      <ul className=''>
        <li>
          starting an important research project that’s been back-burnered for
          the last 18 months.
        </li>
        <li>
          growing their UX team to better keep pace with product and
          development.
        </li>
        <li>
          expanding their organization’s research capability to influence
          strategic decisions.
        </li>
        <li>
          shifting their organization to stop <em>saying</em> they’re
          customer-centered, and instead
          <em>truly become</em> customer-centered.
        </li>
      </ul>

    </div>
    
)
}

export default TimeCommitment;


