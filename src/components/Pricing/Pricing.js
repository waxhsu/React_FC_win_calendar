import './Pricing.css';
import WinSoloSignUp2x from '../../images/Win-Solo-Signup2x.png'
import WinTeamSignUp2x from '../../images/Win-Team-Signup2x.png'
import { PAYMENT_PLAN } from  '../../const.js'

function Pricing(){
  return (
<div id='DoYouHave' className="container-cc">
    <div className='pb-4 pt-2'>
        <h1 className='font-mogan'>Do you have your sights on changing UX in your organization?</h1>
        <h2 className=''>The change begins with you.</h2>

        <p>Think about your future.</p>
      <ul>
        <li>
          A future where your work is improving the lives of your customers
          and users.
        </li>
        <li>A future where you don’t have to battle just to do your job.</li>
        <li>A future where you’re working to your full potential.</li>
      </ul>
      <p>Does that get you excited?</p>
      <p>
        Then you’re ready. You’re ready to get the right skillset, the right
        toolset, and the right mindset to positively impact this world. You’ll
        have the power to make a difference. You’ll love the work you do every
        day. You’ll be energized and excited about the problems you’re
        solving.
      </p>
      <p>
        And we'll be there, right beside you. They will
        support you all the way. With the knowledge and expertise they’ve
        acquired over decades, they know what works for the most successful UX
        leaders. With their help, you’ll join that select group of outstanding
        professionals.
      </p>
      <p>
        This can be your reality. And it starts today with one simple step.
        Enroll in the program.
      </p>
      <p>Enrolling solo? Use the Individual button.</p>
      <p>
        Do you have two or more people from your organization enrolling in the
        program? Use the Team button.
      </p>
      <p>
        That’s it. That’s all you have to do to get 16 weeks of support. That’s all you have to do to get on the path to
        changing the trajectory of your UX career.
      </p>
      <h2 id="we-guarantee-your-satisfaction-100-">
        We guarantee your satisfaction 100%
      </h2>
      <p>As in, your money back. Seriously.</p>
      <p>
        These techniques work. We’ve seen them work with UX leaders all around
        the world.
      </p>
      <p>
        We want you to succeed. We want you to feel 100% confident that you’ll
        know how to align your UX capabilities with key business objectives.
        Even your toughest stakeholders — the ones constantly blocking UX
        progress — will find it difficult to argue with solid ideas that
        support their own priorities.
      </p>
      <p>
        That’s why we offer this guarantee. There’s no risk here. Sign up, and
        you’ll see why we’re so confident about the 8 Pillars.
      </p>

      
   


    <div id='PurchasePlans'>
    <h1 className="font-mogan mogine-mobile-30">Your next step to winning stakeholders & influencing decisions…</h1>
        <div className="flex">
          <div className="bg-white column basis50">
            <img className="img-resp" src={WinSoloSignUp2x} />
            <div className="bg-lightGray px-2 py-1 pb-2">
              <h2>Enroll as a Solo UX Leader</h2>
              <p>If you’re a UX leader or someone ready to jump into UX leadership, this program is for you. You’ll get
                the full
                mentorship and coaching you need to grow your responsibility and influence in your organization.</p>

              <p>You can pay <b>{PAYMENT_PLAN[0].monthlyPrice}/month</b> for 4 months.</p>
              <p>Or you can <b>save {PAYMENT_PLAN[0].monthlyPrice}</b> with <b>a one-time payment of {PAYMENT_PLAN[0].oneTimePrice}</b>.</p>

              <div className="centercenter pt-2 pb-1 mobile-padding">
                <a className="btn btn-custom btn-fill btn-shadow"
                  href={PAYMENT_PLAN[0].enrollLink}>Enroll as an Individual</a>
              </div>
            </div>

          </div>
          

          <div className="bg-white column basis50">
            <img className="img-resp" src={WinTeamSignUp2x} />
            <div className="bg-lightGray px-2 py-1 pb-2">
              <h2>Enroll as a Team of 2 or More (save per person)</h2>

              <p>When members of your UX team learn these skills and techniques together, the entire team becomes a more
                effective force to be reckoned with.</p>
              <p>We offer a price for anyone registering for more than just themselves to the program.</p>
              <p>Two team members are still a team, so any team of 2 or more people can register at the discounted team
                member price.</p>
              <p>Each of you can enroll for <b>{PAYMENT_PLAN[1].monthlyPrice}/month</b> for 4 months.</p>
              <p>Or you can <b>save {PAYMENT_PLAN[1].monthlyPrice}</b> when you pay <b>a one-time payment of {PAYMENT_PLAN[1].oneTimePrice}</b>.</p>


              <div className="centercenter pt-1 pb-1 mobile-padding">
                <a className="btn btn-customPink btn-fill btn-shadow"
                  href={PAYMENT_PLAN[1].enrollLink}>Enroll as a Team Member</a>
              </div>




            </div>

          </div>
        </div>
      
      
    </div>

    </div>





</div>
    
)
}

export default Pricing;


