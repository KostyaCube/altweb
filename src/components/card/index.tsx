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

  const Official = ({ extraClass = '' }: { extraClass?: string }) =>
    official ? (
      <div className={`official ${extraClass}`}>
        <img src={lock} alt="lock" />
        Official software
      </div>
    ) : null;

  const Universal = ({ extraClass = '' }: { extraClass?: string }) =>
    universal ? (
      <div className={`universal ${extraClass}`}>
        <img src={circleCheck} alt="check" />
        This software is designed to work with any site
      </div>
    ) : null;

  const Badges = ({
    children,
    extraClass = '',
  }: {
    children?: React.ReactNode;
    extraClass?: string;
  }) => (
    <div className={`badges ${extraClass}`}>
      <div className="rating">
        {rating} <img src={star} alt="star" />
      </div>
      <div className="reviews">{reviewsCount} Reviews</div>
      <Official />
      {children}
    </div>
  );

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

            <Official extraClass="mobile" />
            <Universal />
            <Badges />
          </div>
        </div>

        <span className="description">{description}</span>

        <Universal extraClass="mobile" />
        <Badges extraClass="mobile">
          <span className="price mobile">{price}</span>
        </Badges>
      </div>
    </Link>
  );
}

export default Card;
