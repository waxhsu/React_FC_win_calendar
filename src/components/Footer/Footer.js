import './Footer.css';
import {FOOTER_company, FOOTER_customerCare, FOOTER_account, FOOTER_socials, FOOTER_payment} from '../../const.js';

function Footer() {
    return (
        <div className="Footer">

        <div className='sectionContainer'>
            <div className="section1">
                <h4>Customer Care</h4>
                {FOOTER_customerCare.map((customer) => {
                    return (
                            <a className='footerNav' href={customer.link}>
                            {customer.name}
                            </a>
                    );
                })}
            </div>



            <div className="section2">
                <h4>About AVRG</h4>
                {FOOTER_company.map((company) => {
                    return (
                            <a className='footerNav' href={company.link}>
                            {company.name}
                            </a>
                    );
                })}
            </div>



            <div className="section3">
                <h4>My Account</h4>
                {FOOTER_account.map((account) => {
                    return (
                            <a className='footerNav' href={account.link}>
                            {account.name}
                            </a>
                    );
                })}
            </div>


            <div className='section4'>
                <h4>Subscribe to us</h4>
                <input type="text" name="" value="Email address" />
                <button type="button" name="button">SUBSCRIBE</button>
                <div className='social_links'>
                    {FOOTER_socials.map((socials) => {
                    return (
                            <a className='footerNav' href={socials.link}>
                            <img className='social_icons' src={socials.src} alt='' />
                            </a>
                    );
                    })}
                </div>
            </div>
        </div>
        
        <div className='section5'>
            <div>© 1992 AVRG. All Rights Reserved.</div>
            <div className='paymentOptions'>
                {FOOTER_payment.map((payment) => {
                    return (
                        <div>
                            <a href={payment.link}>
                            <img className='payment_icons' src={payment.src} alt='' />
                            </a>
                        </div>
                        
                    );
                })}
            </div>
        </div>
        
        </div>
    );
}

export default Footer