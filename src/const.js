import servicePlaceholder from './img/servicePlaceholder.jpg';
import testimonyPlaceholder from './img/testimonyPlaceholder.png';

import landingPic1 from './img/landingPlaceholder1.jpg';
import landingPic2 from './img/landingPlaceholder2.jpg';
import landingPic3 from './img/landingPlaceholder3.jpg';

//FOOTER
import facebook from './img/social/facebook.png';
import linkedin from './img/social/linkedin.png';
import twitter from './img/social/twitter.png';
import youtube from './img/social/youtube.png';
import instagram from './img/social/instagram.png';

import amex from './img/payment/amex.png';
import discover from './img/payment/discover.png';
import mastercard from './img/payment/mastercard.png';
import visa from './img/payment/visa.png';



export const CONTENT = [
  {
    image: landingPic1,
  },
  {
    image: landingPic2,
  },
  {
    image: landingPic3,
  },
];


/////////////////////
// SERVICE SECTION //
// so i might need to put the API stuff here
/////////////////////

export const winCALENDAR = [
  {
    name: `Supporting your business`,
    src: servicePlaceholder,
    desc: `we do this good, but more so on average`,
    link: `www.google.com`,
  },
]


/////////////////////////
// TESTIMONIAL SECTION //
/////////////////////////

export const TESTIMONIES = [
  {
    src: testimonyPlaceholder,
    name: `Jerry Atrics`,
    location: `Springfield, WI`,
    date: `2013/02/29`,
    rating: `★★★☆☆`,
    desc: `It's the exact medium quality service i expected`,

  },
  {
    src: testimonyPlaceholder,
    name: `Generic_Eric1`,
    location: `Greenplace, Greenland`,
    date: `2019/04/22`,
    rating: `★★☆☆☆`,
    desc: `Solid ok service 5/10`,

  },
  {
    src: testimonyPlaceholder,
    name: `bobs_and_vageneLUVer`,
    location: `British Island, Europe`,
    date: `like, yesterday`,
    rating: `★★★☆☆`,
    desc: `it is one of the services of all time. They really put the ordinary in extraordinary`,

  },
]


////////////////////
// FOOTER SECTION //
////////////////////

export const FOOTER_customerCare = [
  {
    name: `Contact Us`,
    link: '#',
  },
  {
    name: `FAQs`,
    link: '#',
  },
  {
    name: `Terms of Service`,
    link: '#',
  },
  {
    name: `Privacy Policy`,
    link: '#',
  },
]

export const FOOTER_company = [
  {
    name: `About Us`,
    link: '#',
  },
  {
    name: `Why [company]`,
    link: '#service',
  },
  {
    name: `Contact Us`,
    link: '#',
  },
  {
    name: `Testimonials`,
    link: '#testimonies',
  },
]


// <a href={`#${child.get('label')}`}>{child.get('label')}</a>
// automated backlinking??
// https://stackoverflow.com/questions/46180291/click-link-to-scroll-to-specific-section-react-js


export const FOOTER_account = [
  {
    name: `Sign In/Register`,
    link: '#',
  },
  {
    name: `My Wishlist`,
    link: '#',
  },
  {
    name: `My Cart`,
    link: '#',
  },
]


export const FOOTER_socials = [
  {
    src: facebook,
    link: 'https://www.facebook.com',
  },
  {
    src: linkedin,
    link: 'https://www.linkedin.com',
  },
  {
    src: twitter,
    link: 'https://www.twitter.com',
  },
  {
    src: youtube,
    link: 'https://www.youtube.com',
  },
  {
    src: instagram,
    link: 'https://www.instagram.com',
  },
]

export const FOOTER_payment = [
  {
    src: amex,
  },
  {
    src: visa,
  },
  {
    src: mastercard,
  },
  {
    src: discover,
  },
]