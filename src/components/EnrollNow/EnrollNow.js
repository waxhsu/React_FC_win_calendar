import './EnrollNow.css';
import NextCohortStarts from '../NextCohortStarts/NextCohortStarts.js'

function EnrollNow(){
  return (
    <div id='EnrollNow' className='bg-black py-4'>
        <NextCohortStarts />

        <div className="text-center">
              <a className="btn btn-custom" href="#PurchasePlans">Enroll Now</a>
        </div>
    </div>
    
)
}

export default EnrollNow;


