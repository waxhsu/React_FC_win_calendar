import './EnrollNow.css';
import NextCohortStarts from '../NextCohortStarts/NextCohortStarts.js'

function EnrollNow(){
  return (
    <div id='EnrollNow' className='bg-black py-3'>
        <NextCohortStarts />

        <div class="text-center">
              <a class="cta btn btn-custom" href="#pricing">ENROLL NOW</a>
        </div>
    </div>
    
)
}

export default EnrollNow;


