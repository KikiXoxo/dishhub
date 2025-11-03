import { useState } from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ image, title, to }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(image);

  const handleError = () => {
    setImgSrc('/login-image.jpg'); // fallback if image from API is unavailable
  };

  return (
    <Link to={to} className='block'>
      <div className='bg-sky-50 dark:bg-gray-800 shadow rounded-2xl overflow-hidden transition hover:shadow-lg dark:hover:bg-gray-950'>
        {/* Image container */}
        <div className='relative w-full h-48 md:h-32 lg:h-48'>
          <img
            src={imgSrc}
            alt={title}
            onLoad={() => setHasLoaded(true)}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              hasLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Spinner while loading */}
          {!hasLoaded && (
            <div className='absolute inset-0 flex items-center justify-center bg-sky-100 dark:bg-gray-700'>
              <div className='w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
            </div>
          )}
        </div>

        <div className='p-4'>
          <h3 className='text-lg font-semibold mb-3 line-clamp-1 text-gray-900 dark:text-gray-100'>
            {title}
          </h3>

          <div className='mt-auto'>
            <span className='text-blue-600 dark:text-blue-400 font-medium hover:underline'>
              View Meal →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MealCard;
