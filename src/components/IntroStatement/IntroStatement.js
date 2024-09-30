import './IntroStatement.css';
import { INTRO_STATEMENT } from '../../const.js'

function IntroStatement(){
  return (
    <div id='IntroStatement'>

        <div id='introStatementA' className='bg-lightGray' >
          <div className='introStatementFormat container-cc py-1'>
            <div className='column basis70'>
              <p className='py-1'>{INTRO_STATEMENT[0].span}</p>
              <h2>{INTRO_STATEMENT[0].desc}</h2>
            </div>

            <div className='column basis30'>
              <img 
                src={INTRO_STATEMENT[0].src} 
                className="img-resp"
                alt={INTRO_STATEMENT[0].alt} />
            </div>
          </div>
        </div>



        <div id='introStatementB'>
          <div className='introStatementFormat container-cc py-1'>
              <div className='column basis30'>
                <img 
                  src={INTRO_STATEMENT[1].src} 
                  className="img-placeholder"
                  alt={INTRO_STATEMENT[1].alt}  />
              </div>
              <div className='column basis70'>
                <p className='py-1'>{INTRO_STATEMENT[1].span}</p>
                <h2>{INTRO_STATEMENT[1].desc}</h2>
              </div>
            </div>
        </div>



        <div id='introStatementC' className='bg-lightGray' >
        <div className='introStatementFormat container-cc py-1'>
            <div className='column basis70'>
              <p className='py-1'>{INTRO_STATEMENT[2].span}</p>
              <h2>{INTRO_STATEMENT[2].desc}</h2>
            </div>

            <div className='column basis30'>
              <img 
                src={INTRO_STATEMENT[2].src} 
                className="img-resp"
                alt={INTRO_STATEMENT[2].alt} />
            </div>
          </div>
        </div>
        
      </div>
    
    
  )
}

export default IntroStatement;


