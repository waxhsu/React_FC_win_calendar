import './Footer.css';
import LogoWhite from '../../images/CC-UIE-white-logo.png';
import { FOOTER } from '../../const.js'

function Footer() {
    return (
        <div id="Footer" className='bg-black py-2 px-3 flex-direction-column'>
            <div id='mainFooter' className='img-resp flex centercenter py-3'>
                <div className='pr-2 ft-logo basis30'>
                    <img src={LogoWhite} className='img-resp' />
                </div>

                <div className='pr-2 text-white flex-direction-column basis40'>
                    <p>{FOOTER[0].address1}</p>
                    <p>{FOOTER[0].address2}</p>
                    <p>{FOOTER[0].phoneNumber}</p>
                </div>

                <div className='text-white basis30'>
                    <p>Center Centre is proud to provide you the expertise you need to
                    deliver better products and services.
                    </p>
                </div>
                
            </div>

            <div id='subFooter' className='border-top flex-space-between text-white pt-2'>
                <span>Copyright {FOOTER[0].year} Center Centre Inc. All rights reserved.</span>
                <span>Questions or comments? <a href={FOOTER[0].contactUs}>Contact us.</a></span>
                <span><a href={FOOTER[0].privacyNotice} className='footerLink'>Privacy Notice</a></span>

            </div>

        
        </div>
    );
}

export default Footer