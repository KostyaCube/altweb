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
        <div className="card-info">
          <img src={imgSrc} alt={title} />
          <span className="price">{price}</span>

          <div className="title-wrapper">
            <div className="title">
              {title}
              <img src={arrow} alt="arrow" />
            </div>

            {universal && (
              <div className="universal">
                <img src={circleCheck} alt="check"></img> This software is
                designed to work with any site
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
      </div>
    </Link>
  );
}

export default Card;
