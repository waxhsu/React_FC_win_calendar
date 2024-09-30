import './Testimonials1.css';
import OpenQuotation from '../../images/quotes.png'
import TestimonialHeart from '../../images/testimonial-heart.png';
import TestimonialStar from '../../images/testimonial-star.png';
import { TESTIMONIES } from '../../const.js'


function Testimonials1(){
  return (
    <div id='Testimonials1' className='bg-pink'>

      <div className="container-cc py-2 mobile-align-start flex">
        <div className="text-white column basis50 testimonial divider">
          <div className="pr-3">
            <img src={TestimonialHeart} className="img-resp image-left imgTestimonial" alt="Describe a picture" />
            <div className="testimonial-title">
              <h2>
                <img className='quote' src={OpenQuotation} />
                 {TESTIMONIES[0].title}:
              </h2>
            </div>
            <p>
              <em>{TESTIMONIES[0].desc}</em>
            </p>
          </div>
        </div>

        
        <div className="text-white column basis50 testimonial left-padding">
          <div className="pl-3">
            <img src={TestimonialStar} className="img-resp image-left imgTestimonial" alt="Describe a picture"/>
            <div className="testimonial-title">
              <h2>
                <img className='quote' src={OpenQuotation} />
                {TESTIMONIES[1].title}:
              </h2>
            </div>
            <p>
              <em>{TESTIMONIES[1].desc}</em>
            </p>
          </div>
        </div>
      </div>

    </div>
    
)
}

export default Testimonials1;


