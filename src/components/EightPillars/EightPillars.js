import './EightPillars.css';
import NumOne from '../../images/num-1.png';
import NumTwo from '../../images/num-2.png';
import NumThree from '../../images/num-3.png';
import NumFour from '../../images/num-4.png';
import NumFive from '../../images/num-5.png';
import NumSix from '../../images/num-6.png';
import NumSeven from '../../images/num-7.png';
import NumEight from '../../images/num-8.png';

function EightPillars(){
  return (
    <div id='EightPillars' className="container-cc">
      <div className='pb-4 pt-2'>
        <h1 className='font-mogan'>The 8 Pillars of Stakeholder Influence</h1>

        <div class="">
          <p>
            Every UX leader reaches a point where their work needs to shift.
            Creating great designs and conducting meaningful UX research isn’t
            enough. They must overcome the pressures of the organization and,
            most importantly, they need the help of key stakeholders to make
            that happen.
          </p>
          <p>
            UX is a team sport. You need support and buy-in from your partners
            in product management and development. However, that support won’t
            come by itself.
          </p>
          <p>
            We’ve spent the last two decades studying how successful UX leaders
            get their peers to make UX a top priority. We’ve collected the
            techniques and perspectives that give these UX leaders an advantage
            in their organization.
          </p>
          <p>
            We’ve packaged these up into eight important themes. We call them…
          </p>
        </div>
      </div>



    <div>
        <h2 className='font-mogan'>
          Wins from 8 Pillars of Stakeholder Influence
        </h2>
    </div>



    <div id='Pillar1'>
        <div className='container-cc py-1 flex'>
            <div className='column centercenter'>
              <img src={NumOne} class="pillar-img"
                  alt="Number One" />
            </div>
            <div className='column'>
            <h2>Become the UX leader your org is seeking.</h2>
            <p>
              You’re no longer asking for permission. You are influencing positive change throughout your organization with
              the backing and support of your team.
            </p>
            </div>
        </div>
    </div>


    <div id='Pillar2'>
        <div className='container-cc py-1 flex'>
            <div className='column centercenter'>
              <img src={NumTwo} class="pillar-img"
                  alt="Number Two" />
            </div>
            <div className='column'>
            <h2>Establish UX outcomes & visions.</h2>
            <p>
              You and your stakeholders are finally on the same page. You have conversations, not disagreements around which
              efforts will best improve your products and services.
            </p>
            </div>
        </div>
    </div>


    <div id='Pillar3'>
        <div className='container-cc py-1 flex'>
            <div className='column centercenter'>
              <img src={NumThree} class="pillar-img"
                  alt="Number Three" />
            </div>
            <div className='column'>
            <h2>Build strong connection skills.</h2>
            <p>
              You no longer feel like you’re selling the team on the importance of UX. You’re having meaningful
              conversations that influence product ideas and create natural buy-in for your initiatives.
            </p>
            </div>
        </div>
    </div>


    <div id='Pillar4'>
        <div className='container-cc py-1 flex'>
            <div className='column centercenter'>
              <img src={NumFour} class="pillar-img"
                  alt="Number Four" />
            </div>
            <div className='column'>
            <h2>Navigate product & development politics.</h2>
            <p>
              You no longer feel like you’re fighting your organization. You’ve uncovered common ground and you and other
              team leads have identified opportunities where you can work together.
            </p>
            </div>
        </div>
    </div>


    <div id='Pillar5'>
        <div className='container-cc py-1 flex'>
            <div className='column centercenter'>
              <img src={NumFive} class="pillar-img"
                  alt="Number Five" />
            </div>
            <div className='column'>
            <h2>Explore the dynamics of organizational power and influence.</h2>
            <p>
              Others in your organization see UX as a powerful positive force. They’re requesting the influence and
              expertise of UX on their projects and teams.
            </p>
            </div>
        </div>
    </div>


    <div id='Pillar6'>
        <div className='container-cc py-1 flex'>
            <div className='column centercenter'>
              <img src={NumSix} class="pillar-img"
                  alt="Number Six" />
            </div>
            <div className='column'>
            <h2>Identifying persuasive UX metrics.</h2>
            <p>
              You’re connected to your organization’s most essential objectives and you’ve demonstrated how UX achieves
              those key business objectives.
            </p>
            </div>
        </div>
    </div>


    <div id='Pillar7'>
        <div className='container-cc py-1 flex'>
            <div className='column centercenter'>
              <img src={NumSeven} class="pillar-img"
                  alt="Number Seven" />
            </div>
            <div className='column'>
            <h2>Growing a practice of servant leadership.</h2>
            <p>
              Others in the organization come to you and see you as their champion. Not only highlighting you as a leader
              but also championing your agendas and priorities.
            </p>
            </div>
        </div>
    </div>


    <div id='Pillar8'>
        <div className='container-cc py-1 flex'>
            <div className='column centercenter'>
              <img src={NumEight} class="pillar-img"
                  alt="Number Eight" />
            </div>
            <div className='column'>
            <h2>Pinpoint user needs through strong UX research.</h2>
            <p>
              You’ve created a solid base of evidence that strengthens the importance of your initiatives. Others now come
              to you and see research as a way to strengthen their initiatives too.
            </p>
            </div>
        </div>
    </div>


    <div class="pb-4">
      <p>
        As you master the skills, tools, and mindsets of each pillar, you’ll
        immediately feel as if you’ve been released from the restraints that
        have been holding you back. You’ll see results right away because your
        ideas and suggestions won’t get the pushback they have in the past.
      </p>
      <p>
        Instead, you’ll become empowered to push for even bigger and better
        things. Most importantly, your contributions will be appreciated and
        encouraged. You’ll finally have the support you need.
      </p>
    </div>






    </div>
    
)
}

export default EightPillars;


