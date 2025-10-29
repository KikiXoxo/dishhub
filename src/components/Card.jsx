import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ image, title, description, to }) => {
  return (
    <Link to={to} className='block'>
      <div className='bg-sky-50 dark:bg-gray-800 shadow rounded-2xl overflow-hidden transition hover:shadow-lg dark:hover:bg-gray-950'>
        <img src={image} alt={title} className='w-full h-48 object-cover' />
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
