import './Testimonials1.css';
import OpenQuotation from '../../images/quotes.png'
import TestimonialHeart from '../../images/testimonial-heart.png';
import TestimonialStar from '../../images/testimonial-star.png';

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
                 J.D., A Senior Digital UX Leader in a B2C Software:
              </h2>
            </div>
            <p>
              <em>I picked up invaluable tips for reframing my mindset when
                collaborating with my partners. I discovered whom to influence
                and measure my impact and outcomes.</em>
            </p>
          </div>
        </div>

        
        <div className="text-white column basis50 testimonial left-padding">
          <div className="pl-3">
            <img src={TestimonialStar} className="img-resp image-left imgTestimonial" alt="Describe a picture"/>
            <div className="testimonial-title">
              <h2>
                <img className='quote' src={OpenQuotation} />
                S.P., UX Designer and Researcher in Insurance Solutions:
              </h2>
            </div>
            <p>
              <em>This program gave me the tools and advice I need to be a better
                listener, ask better questions in meetings, and get better
                results in conversations with my stakeholders.
              </em>
            </p>
          </div>
        </div>
      </div>

    </div>
    
)
}

export default Testimonials1;


