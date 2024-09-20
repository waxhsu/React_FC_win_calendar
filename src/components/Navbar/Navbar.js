import './Navbar.css';
import logo from '../../img/logo.png';
import animateScrollTo from 'animated-scroll-to';

function Navbar(){
  return (
    <div className="Navbar">
      <img className='logo' alt='squareLogo' src={logo} />
      
      <div className='mainOptions'>
        <div>
          {/* <div onClick={() => window.location.replace("#service")}> */}
            <a className="Navbar-options" href="#service">Services</a>
          {/* </div> */}
        </div>

        <div>
            
            <a className="Navbar-options" href="">Company</a>
        </div>
        <div>
            <a className="Navbar-options" href="">Contact</a>
        </div>
      </div>

      <div className='rightSide'>
          <a id='login' className='button' href="">Login</a>
          <a id='signUp' className='button' href="">Get started</a>
      </div>
    </div>


  );
}

export default Navbar;
/////

