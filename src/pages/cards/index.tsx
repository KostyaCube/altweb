import Card from '../../components/card';
import jsIcon from '../../assets/img/img-1.svg';
import lockIcon from '../../assets/img/img-2.svg';
import puppeteerIcon from '../../assets/img/img-3.svg';
import './styles.css';

export type SoftwareCard = {
  title: string;
  imgSrc: string;
  rating: number;
  reviewsCount: number;
  price: string;
  url: string;
  official?: boolean;
  universal?: boolean;
  description?: string;
};

const cards: SoftwareCard[] = [
  {
    title: '2Captcha solver',
    imgSrc: lockIcon,
    rating: 4.6,
    reviewsCount: 456,
    price: 'Free',
    official: true,
    universal: true,
    url: 'card/id',
    description:
      'Extension for the Google Chrome browser that automatically recognizes captchas such as ReCaptcha V2, V3, GeeTest, Arkose Labs FunCaptcha, Human Captcha and others.',
  },
  {
    title: 'Puppeteer plugin to solve reCAPTCHAs automatically',
    imgSrc: puppeteerIcon,
    rating: 4.6,
    reviewsCount: 456,
    price: '$67',
    universal: true,
    url: 'card/id',
    description:
      'Solves reCAPTCHAs automatically, using a single line of code.',
  },
  {
    title: '2captcha-javascript',
    imgSrc: jsIcon,
    rating: 4.6,
    reviewsCount: 456,
    price: 'Free',
    universal: true,
    url: 'card/id',
    description:
      'JavaScript npm package for easy integration with the API of 2captcha captcha solving service to bypass recaptcha, funcaptcha, geetest and solve any other captchas.',
  },
  {
    title: 'Puppeteer plugin to solve reCAPTCHAs automatically',
    imgSrc: puppeteerIcon,
    rating: 4.6,
    reviewsCount: 456,
    price: '$67',
    universal: false,
    url: 'card/id',
    description:
      'Extension for the Google Chrome browser that automatically recognizes captchas such as ReCaptcha V2, V3, GeeTest, Arkose Labs FunCaptcha, Human Captcha and others.',
  },
];

function Cards() {
  return (
    <div className="container">
      <h2>Software</h2>
      {cards.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
}

export default Cards;
