import { Link } from 'react-router-dom';
import { PiRobotDuotone } from 'react-icons/pi';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full text-center py-20 px-4'>
      <PiRobotDuotone className='text-8xl mb-6 text-gray-600 dark:text-gray-300' />
      <h1 className='text-3xl font-bold mb-2'>Page Not Found</h1>
      <p className='text-gray-600 dark:text-gray-400 mb-6'>
        The page you are looking for does not exist. Check the sidebar or go
        back home.
      </p>
      <Link
        to='/discover'
        className='inline-block bg-indigo-950 text-white dark:bg-gray-100 dark:text-gray-800 px-6 py-2 rounded-full hover:opacity-90 transition'
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
