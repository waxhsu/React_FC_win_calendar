import './EnrollNow.css';
import NextCohortStarts from '../NextCohortStarts/NextCohortStarts.js'

function EnrollNow(){
  return (
    <div id='EnrollNow' className='bg-black py-4'>
        <NextCohortStarts />

        <div className="text-center">
              <a className="cta btn btn-custom" href="#PurchasePlans">ENROLL NOW</a>
        </div>
    </div>
    
)
}

export default EnrollNow;


