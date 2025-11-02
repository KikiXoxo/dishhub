import { useState } from 'react';
import { Link } from 'react-router-dom';

const CardDetails = ({ image, title, description, to }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(image);

  const handleError = () => {
    setImgSrc('/login-image.jpg');
  };

  return (
    <div className='flex flex-col xl:flex-row gap-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden p-4 md:p-6 transition'>
      {/* Image */}
      <div className='flex-shrink-0 w-full xl:w-2/5 relative'>
        {!imgLoaded && (
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin' />
          </div>
        )}
        <img
          src={imgSrc}
          alt={title}
          onLoad={() => setImgLoaded(true)}
          onError={handleError}
          className={`w-full h-72 object-cover rounded-xl transition-opacity duration-300 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Content */}
      <div className='flex flex-col justify-between xl:w-3/5'>
        <div>
          <h2 className='text-2xl font-bold mb-4'>Description</h2>
          <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
            {description || 'No description available.'}
          </p>
        </div>

        <div className='mt-6'>
          <Link
            to={to}
            className='inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition'
          >
            View Meals →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
