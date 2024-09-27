import './AboutUs.css';
import MeetJared from '../../images/meet-jared.png'
import MeetLeslie from '../../images/meet-leslie.png'


function AboutUs(){
  return (
    <div id='AboutUs' className='bg-lightGray pb-4'>
      <div className='container-cc py-2 mobile-align-start flex container-cc'>
        <h1 className="font-mogan">
          Jared Spool & Dr. Leslie Jensen-Inman will guide you.
        </h1>
      </div>

      <div class="container-cc flex">
        <div class="column basis60">
          <p>
            Everything you learn in this 16-week program comes directly from Leslie and Jared's experience. They’ve been
            working for decades across industries, discovering the best practices of successful UX leaders.
          </p>
          <p>
            Leslie and Jared joined forces in 2012. Since then, they have worked with top UX leaders at organizations like
            IBM, NASA, GE, Fidelity Investments, GM, Exxon Mobil, Dolby, and Adobe.
          </p>
          <p>
            Leslie’s deep knowledge of leadership and human relationships is mind-bogglingly astute. You’ll ask yourself,
            “how does she know my stakeholders are exactly like that?”
          </p>
        </div>
        <div class="column basis40">
          <img src={MeetLeslie} class="img-placeholder" alt="Dr. Leslie Jensen-Inman and Jared Spool" />
        </div>
      </div>


      <div class="container-cc flex">
        <div class="column basis40">
          <img src={MeetJared} class="img-placeholder" alt="Dr. Leslie Jensen-Inman and Jared Spool" />
        </div>
        <div class="column basis60">
          <p>
            Everything you learn in this 16-week program comes directly from Leslie and Jared's experience. They’ve been
            working for decades across industries, discovering the best practices of successful UX leaders.
          </p>
          <p>
            Leslie and Jared joined forces in 2012. Since then, they have worked with top UX leaders at organizations like
            IBM, NASA, GE, Fidelity Investments, GM, Exxon Mobil, Dolby, and Adobe.
          </p>
          <p>
            Leslie’s deep knowledge of leadership and human relationships is mind-bogglingly astute. You’ll ask yourself,
            “how does she know my stakeholders are exactly like that?”
          </p>
        </div>

      </div>







      </div>
    
)
}

export default AboutUs;


