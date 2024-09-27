import './Testimonials2.css';
import OpenQuotation from '../../images/quotes.png'
import TestimonialHeart from '../../images/testimonial-heart.png';
import TestimonialThumbUp from '../../images/testimonial-thumb-up.png';

function Testimonials2(){
  return (
    <div id='Testimonials2' className='bg-pink'>

      <div className="container-cc py-2 mobile-align-start flex">
        <div className="text-white column basis50 testimonial divider">
          <div className="pr-3">
            <img src={TestimonialHeart} className="img-resp image-left imgTestimonial" alt="Describe a picture" />
            <div className="testimonial-title">
              <h2>
                <img className='quote' src={OpenQuotation} />
                C.M., Senior UX Designer in Digital Media Software:
              </h2>
            </div>
            <p>
              <em>This program transformed my discussions with my team. I now
              stop negative assumptions and see the full picture of what my
              team is working on. Allowing for better connections and
              support.</em>
            </p>
          </div>
        </div>

        
        <div className="text-white column basis50 testimonial left-padding">
          <div className="pl-3">
            <img src={TestimonialThumbUp} className="img-resp image-left imgTestimonial" alt="Describe a picture"/>
            <div className="testimonial-title">
              <h2>
                <img className='quote' src={OpenQuotation} />
                J.C., UX Design Manager at a B2C Home service:
              </h2>
            </div>
            <p>
              <em>This program taught me that success is a result of the positive
              change you make in the world. The focus on servant leadership
              and the actionable pillars helped me to practice climbing a
              ladder to achieve real-life wins.
              </em>
            </p>
          </div>
        </div>
      </div>

    </div>
    
)
}

export default Testimonials2;


