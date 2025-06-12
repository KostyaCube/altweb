import React from 'react';

export type SoftwareCard = {
  title: string;
  imgSrc: string;
  rating: number;
  reviewsCount: number;
  price: string;
  url: string;
  official?: boolean;
  universal?: boolean;
};

const cards: SoftwareCard[] = [
  {
    title: '2Captcha solver',
    imgSrc: '/src/assets/img/img (1).svg',
    rating: 4.6,
    reviewsCount: 456,
    price: 'Free',
    official: true,
    universal: true,
    url: 'https://example.com/',
  },
  {
    title: 'Puppeteer plugin to solve reCAPTCHAs automatically',
    imgSrc: '/src/assets/img/img (2).svg',
    rating: 4.6,
    reviewsCount: 456,
    price: '$67',
    universal: true,
    url: 'https://example.com/',
  },
  {
    title: '2captcha-javascript',
    imgSrc: '/src/assets/img/img (3).svg',
    rating: 4.6,
    reviewsCount: 456,
    price: 'Free',
    universal: true,
    url: 'https://example.com/',
  },
  {
    title: 'Puppeteer plugin to solve reCAPTCHAs automatically',
    imgSrc: '/src/assets/img/img (2).svg',
    rating: 4.6,
    reviewsCount: 456,
    price: '$67',
    universal: true,
    url: 'https://example.com/',
  },
];

function Cards() {
  return <div>Cards</div>;
}

export default Cards;
