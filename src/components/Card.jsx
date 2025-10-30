import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ image, title, description, to }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(image);

  const handleError = () => {
    setImgSrc('/login-image.jpg'); // fallback if image from API is unavailable
  };

  return (
    <Link to={to} className='block'>
      <div className='bg-sky-50 dark:bg-gray-800 shadow rounded-2xl overflow-hidden transition hover:shadow-lg dark:hover:bg-gray-950'>
        <div className='relative w-full h-48 md:h-32 lg:h-48'>
          {/* Image */}
          <img
            src={imgSrc}
            alt={title}
            onLoad={() => setHasLoaded(true)}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              hasLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Spinner placeholder */}
          {!hasLoaded && (
            <div className='absolute inset-0 flex items-center justify-center bg-sky-100 dark:bg-gray-900'>
              <div className='w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
            </div>
          )}
        </div>

        <div className='p-4'>
          <h3 className='text-lg font-semibold mb-2 line-clamp-1 text-gray-900 dark:text-gray-100'>
            {title}
          </h3>

          {description && (
            <p className='text-sm text-gray-600 dark:text-gray-300 line-clamp-3'>
              {description}
            </p>
          )}

          <div className='mt-3'>
            <span className='text-blue-600 dark:text-blue-400 font-medium hover:underline'>
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export default Card;
