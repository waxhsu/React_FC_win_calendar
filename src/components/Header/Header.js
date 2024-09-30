import './Header.css';
import LogoBlack from '../../images/CC-UIE-black-logo.png';

function Navbar(){
  return (
    <div id="Header" className="bg-lightGray">
        <div className="topbar container-cc">
          <div>
            <img className='img-resp' alt='centerCentre' src={LogoBlack} />
          </div>
    
          <div className=''>
            <a className="btn btn-custom btn-shadow" href="#PurchasePlans">Enroll Now</a>
          </div>
        </div>
    </div>
  );
}

export default Navbar;

