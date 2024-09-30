import './NextCohortStarts.css';
import { STARTING_DATE } from '../../const.js'

function NextCohortStarts(){
  return (
    <div id='nextCohortStarts' className='startingDate text-center text-white py-1'>
        Next cohort starts: <b>{STARTING_DATE[0].date}</b>
    </div>
  )
}

export default NextCohortStarts;


