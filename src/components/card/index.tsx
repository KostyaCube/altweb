import { Link } from 'react-router-dom';
import { SoftwareCard } from '../../pages/cards';
import arrow from '../../assets/icons/arrow.svg';
import star from '../../assets/icons/star.svg';
import circleCheck from '../../assets/icons/circle-check.svg';
import lock from '../../assets/icons/lock.svg';

import './styles.css';

function Card(props: SoftwareCard) {
  const {
    title,
    imgSrc,
    rating,
    reviewsCount,
    price,
    official,
    universal,
    url,
    description,
  } = props;

  return (
    <Link to={url}>
      <div className="wrapper">
        <div className="card">
          <img src={imgSrc} alt={title} />
          <span className="price">{price}</span>

          <div className="card-info">
            <div className="title">
              {title} <img src={arrow} alt="arrow" />
            </div>

            {official && (
              <div className="official mobile">
                <img src={lock} alt="lock" />
                Official software
              </div>
            )}

            {universal && (
              <div className="universal">
                <img src={circleCheck} alt="check" /> This software is designed
                to work with any site
              </div>
            )}

            <div className="badges">
              <div className="rating">
                {rating} <img src={star} alt="star" />
              </div>

              <div className="reviews">{reviewsCount} Reviews</div>

              {official && (
                <div className="official">
                  <img src={lock} alt="lock" />
                  Official software
                </div>
              )}
            </div>
          </div>
        </div>
        <span className="description">{description}</span>

        {universal && (
          <div className="universal mobile">
            <img src={circleCheck} alt="check" /> This software is designed to
            work with any site
          </div>
        )}

        <div className="badges mobile">
          <div className="rating">
            {rating} <img src={star} alt="star" />
          </div>
          <div className="reviews">{reviewsCount} Reviews</div>
          <span className="price mobile">{price}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
