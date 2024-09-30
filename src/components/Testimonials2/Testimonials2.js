import './Testimonials2.css';
import OpenQuotation from '../../images/quotes.png'
import TestimonialHeart from '../../images/testimonial-heart.png';
import TestimonialThumbUp from '../../images/testimonial-thumb-up.png';
import { TESTIMONIES } from '../../const.js'

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
                {TESTIMONIES[2].title}::
              </h2>
            </div>
            <p>
              <em>{TESTIMONIES[2].desc}:</em>
            </p>
          </div>
        </div>

        
        <div className="text-white column basis50 testimonial left-padding">
          <div className="pl-3">
            <img src={TestimonialThumbUp} className="img-resp image-left imgTestimonial" alt="Describe a picture"/>
            <div className="testimonial-title">
              <h2>
                <img className='quote' src={OpenQuotation} />
                {TESTIMONIES[3].title}:
              </h2>
            </div>
            <p>
              <em>{TESTIMONIES[3].desc}:</em>
            </p>
          </div>
        </div>
      </div>

    </div>
    
)
}

export default Testimonials2;


