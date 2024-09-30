import './Landing.css';
import LandingImg from '../../images/landing.png';
import NextCohortStarts from '../NextCohortStarts/NextCohortStarts.js'
import { LANDING } from '../../const.js'

function Landing(){
  return (
    <div className="bg-black py-4">
        <img 
          className="img-resp centercenter container-cc" 
          src={LANDING[0].src}  
          alt={LANDING[0].alt}
        />
        <NextCohortStarts />
    </div>
  )
}

export default Landing;