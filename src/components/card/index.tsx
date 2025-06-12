import { Link } from 'react-router-dom';
import { SoftwareCard } from '../../pages/cards';
import arrow from '../../assets/icons/arrow.svg';
import star from '../../assets/icons/star.svg';
import circleCheck from '../../assets/icons/circle-check.svg';
import lock from '../../assets/icons/lock.svg';

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

  const Official = ({ className = '' }: { className?: string }) =>
    official ? (
      <div
        className={`flex items-center gap-2 rounded-full text-white bg-cyan-600 text-sm px-3 py-0.5 w-fit ${className}`}
      >
        <img src={lock} alt="lock" className="w-4 h-4" />
        Official software
      </div>
    ) : null;

  const Universal = ({ className = '' }: { className?: string }) =>
    universal ? (
      <div
        className={`flex items-center text-sm text-gray-800 mt-2 ${className}`}
      >
        <img src={circleCheck} alt="check" className="w-4 h-4 mr-1" />
        This software is designed to work with any site
      </div>
    ) : null;

  const Badges = ({ className = '' }: { className?: string }) => (
    <div className={`flex gap-3 mt-3 items-center flex-wrap ${className}`}>
      <div className="bg-blue-100 rounded-full px-3 py-0.5 text-sm font-semibold flex items-center">
        {rating}
        <img src={star} alt="star" className="w-4 h-4 ml-1" />
      </div>
      <div className="text-sm text-gray-500">{reviewsCount} Reviews</div>
      <div className="hidden sm:block">
        <Official />
      </div>
    </div>
  );

  return (
    <Link to={url}>
      <div className="relative border border-blue-100 rounded-lg p-5 sm:min-h-[158px] min-h-[110px] cursor-pointer">
        <div className="flex gap-5 sm:pr-16 pr-3">
          <img
            src={imgSrc}
            alt={title}
            className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] object-contain"
          />

          <span className="hidden sm:block absolute top-3 right-5 text-cyan-600 font-semibold text-lg">
            {price}
          </span>

          <div className="flex flex-col flex-1">
            <div className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center flex-wrap">
              <div className=" items-center gap-1">
                {title}
                <img src={arrow} alt="arrow" className="w-4 h-4 inline ml-2" />
              </div>
            </div>

            <div className="sm:hidden mt-2">
              <Official />
            </div>

            <div className="hidden sm:block">
              <Universal />
            </div>

            <div className="hidden sm:flex">
              <Badges />
            </div>
          </div>
        </div>

        <p className="hidden sm:block mt-3 text-sm text-gray-600 leading-6">
          {description}
        </p>

        <div className="sm:hidden mt-3 relative">
          <Universal />
          <Badges />
          <div className="mt-2 text-cyan-600 font-semibold text-lg absolute bottom-0 right-0">
            {price}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
