import './Header.css';
import logo from '../../images/CC-UIE-black-logo.png';

function Navbar(){
  return (
    <div id="Header" className="bg-lightGray">
        <div className="topbar container-cc">
          <div>
            <img className='img-resp' alt='centerCentre' src={logo} />
          </div>
    
          <div className=''>
            <a className="btn btn-custom btn-shadow" href="#pricing">Enroll Now</a>
          </div>
        </div>
    </div>
  );
}

export default Navbar;