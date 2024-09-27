import './IntroStatement.css';
import Person1 from '../../images/individual-7.png';
import Person2 from '../../images/individual-6.png';
import Person3 from '../../images/individual-8.png';

function IntroStatement(){
  return (
    <div id='IntroStatement'>

        <div id='introStatementA' className='bg-lightGray' >
          <div className='introStatementFormat container-cc py-1'>
            <div className='column basis70'>
              <p className='py-1'>
                Because of the program...
              </p>
              <h2>
                I got unlimited access to users for deep user research when, before, nobody would let them near any users
                or customers.
              </h2>
            </div>

            <div className='column basis30'>
              <img src={Person1} class="img-placeholder"
                  alt="Searching in book (with magnifying glass) " />
            </div>
          </div>
        </div>


        <div id='introStatementB'>
          <div className='introStatementFormat container-cc py-1'>
              <div className='column basis30'>
                <img src={Person2} class="img-placeholder"
                    alt="Chess piece with road map " />
              </div>
              <div className='column basis70'>
                <p className='py-1'>
                  Halfway through the program...
                </p>
                <h2>
                  I started being called to run executive-level visioning workshops, with the execs excited to adopt a UX
                  perspective on the organization’s strategy.
                </h2>
              </div>
            </div>
        </div>

        <div id='introStatementC' className='bg-lightGray' >
          <div className='introStatementFormat container-cc py-1'>
            <div className='column basis70'>
              <p className='py-1'>
                After graduating the program...
              </p>
              <h2>
                I'm now regularly collaborating with Product Managers who never used to give me the time of day, let alone
                give UX any consideration.
              </h2>
            </div>

            <div className='column basis30'>
              <img src={Person3} class="img-placeholder"
                  alt="Man pushing knight chess piece." />
            </div>
          </div>
        </div>
        
      </div>
    
    
  )
}

export default IntroStatement;


