import './Landing.css';
import landingPic1 from '../../img/landingPlaceholder1.jpg';
import landingPic2 from '../../img/landingPlaceholder2.jpg';


function Landing(){
  return (
    <div id='landing' className="Landing">
      <div className='leftLanding'>
        <div className='infoBox'>Filler things about the website idk</div>
        <div className='buttonBox'>
          {/* <a id='login' className='button' href="" target="_blank">Login</a>
          <a id='signUp' className='button' href="" target="_blank">Get started</a> */}
        </div>
      </div>



      <div className='rightLanding'>
        <img src={landingPic2} />
      </div>
    </div>
  )
}

export default Landing;

/* IF I WANT TO ADD IMAGE */
