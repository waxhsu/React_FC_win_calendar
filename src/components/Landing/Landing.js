import './Landing.css';
import LandingImg from '../../images/landing.png';
import NextCohortStarts from '../NextCohortStarts/NextCohortStarts.js'

function Landing(){
  return (
    <div className="Landing">
        <img className="LandingImg" src={LandingImg} />
        <NextCohortStarts />
    </div>
  )
}

export default Landing;